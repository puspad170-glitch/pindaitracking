import React from 'react';

export interface MaterialIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  fill?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: number;
  opticalSize?: number;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

export default function MaterialIcon({
  name,
  fill = false,
  weight,
  grade,
  opticalSize,
  className = '',
  style,
  ariaLabel,
  ...props
}: MaterialIconProps) {
  // If specific font-variation parameters are provided, compute custom style
  const customVariations = [
    `'FILL' ${fill ? 1 : 0}`,
    weight ? `'wght' ${weight}` : null,
    grade !== undefined ? `'GRAD' ${grade}` : null,
    opticalSize ? `'opsz' ${opticalSize}` : null,
  ]
    .filter(Boolean)
    .join(', ');

  const mergedStyle: React.CSSProperties = {
    ...(customVariations ? { fontVariationSettings: customVariations } : {}),
    ...style,
  };

  return (
    <span
      className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`.trim()}
      style={mergedStyle}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      {name}
    </span>
  );
}
