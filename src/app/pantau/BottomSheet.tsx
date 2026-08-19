'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import MaterialIcon from '../components/MaterialIcon';

interface BottomSheetProps {
  children: React.ReactNode;
  peekContent: React.ReactNode;
  isExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

export default function BottomSheet({
  children,
  peekContent,
  isExpanded: controlledExpanded,
  onExpandedChange,
}: BottomSheetProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

  const setExpanded = useCallback(
    (val: boolean) => {
      if (controlledExpanded === undefined) {
        setInternalExpanded(val);
      }
      onExpandedChange?.(val);
    },
    [controlledExpanded, onExpandedChange]
  );

  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef(0);
  const dragStartExpanded = useRef(false);

  const handleDragStart = useCallback(
    (clientY: number) => {
      setIsDragging(true);
      dragStartY.current = clientY;
      dragStartExpanded.current = isExpanded;
    },
    [isExpanded]
  );

  const handleDragMove = useCallback(
    (clientY: number) => {
      if (!isDragging) return;
      const diff = clientY - dragStartY.current;
      setDragOffset(diff);
    },
    [isDragging]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 40;

    if (dragStartExpanded.current) {
      // Was expanded → drag down to collapse
      if (dragOffset > threshold) {
        setExpanded(false);
      }
    } else {
      // Was collapsed → drag up to expand
      if (dragOffset < -threshold) {
        setExpanded(true);
      }
    }

    setDragOffset(0);
  }, [isDragging, dragOffset, setExpanded]);

  // Touch handlers
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleDragStart(e.touches[0].clientY);
    },
    [handleDragStart]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleDragMove(e.touches[0].clientY);
    },
    [handleDragMove]
  );

  const onTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Mouse handlers for desktop
  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientY);
    const onMouseUp = () => handleDragEnd();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Compute visual drag for live feedback (clamped)
  const getTransformStyle = (): React.CSSProperties => {
    if (!isDragging || dragOffset === 0) return {};

    if (isExpanded) {
      const clamped = Math.max(0, dragOffset);
      const dampened = Math.sqrt(clamped) * 5;
      return { transform: `translateY(${dampened}px)` };
    } else {
      const clamped = Math.min(0, dragOffset);
      const dampened = -(Math.sqrt(Math.abs(clamped)) * 5);
      return { transform: `translateY(${dampened}px)` };
    }
  };

  return (
    <div
      ref={sheetRef}
      className={`absolute bottom-0 left-0 right-0 z-30 flex flex-col bg-slate-50/95 backdrop-blur-md rounded-t-3xl border-t border-white/60 shadow-[0_-8px_30px_rgba(0,0,0,0.18)] ${
        isDragging ? '' : 'transition-all duration-300 ease-out'
      }`}
      style={{
        maxHeight: isExpanded ? '78vh' : '150px',
        ...getTransformStyle(),
      }}
    >
      {/* Drag Handle Bar */}
      <div
        className="flex flex-col items-center pt-2.5 pb-1 cursor-grab active:cursor-grabbing select-none shrink-0"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={(e) => handleDragStart(e.clientY)}
        onClick={() => setExpanded(!isExpanded)}
      >
        <div className="w-12 h-1.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors" />
        <div className="flex items-center gap-1 mt-1">
          <MaterialIcon
            name={isExpanded ? 'expand_more' : 'expand_less'}
            className="text-xs text-gray-500"
          />
          <span className="text-[9px] text-gray-500 font-semibold">
            {isExpanded ? 'Tutup / Geser Turun' : 'Buka / Geser Naik'}
          </span>
        </div>
      </div>

      {/* Peek Content (always visible at top of bottom sheet) */}
      <div className="px-4 pb-2 shrink-0">
        {peekContent}
      </div>

      {/* Expandable Scrollable Content */}
      <div
        className={`overflow-y-auto px-4 pb-6 space-y-3 scrollbar-none transition-all duration-200 ${
          isExpanded ? 'opacity-100 flex-1' : 'opacity-0 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
