export interface DestinationInfo {
  name: string;
  address: string;
  eta: string;
}

export interface VehicleData {
  id: string;
  plate: string;
  type: string;
  driver: string;
  phone: string;
  image?: string;
  status: 'online' | 'perjalanan' | 'maintenance' | 'tersedia';
  statusLabel: string;
  engineStatus: 'ON' | 'OFF';
  speed: string;
  speedUnit: string;
  engineHours: string;
  fuelLevel: string;
  tripDistance: string;
  totalDistance: string;
  battery: string;
  destination: DestinationInfo;
  mapQuery: string;
}

export interface VehicleGroup {
  id: string;
  title: string;
  icon: string;
  badgeColor: string;
  vehicles: VehicleData[];
}

export const sampleVehicles: VehicleData[] = [
  {
    id: 'GPS F52618',
    plate: 'F 8291 AB',
    type: 'Truk Compactor 01',
    driver: 'Budi Santoso',
    phone: '0812-3456-7890',
    image: '/assets/Truk_2.jpeg',
    status: 'online',
    statusLabel: 'Online',
    engineStatus: 'ON',
    speed: '35',
    speedUnit: 'km/jam',
    engineHours: '34.6 jam',
    fuelLevel: '52 Liter',
    tripDistance: '49.7 km',
    totalDistance: '580 km',
    battery: '95%',
    destination: {
      name: 'TPS Sukasari',
      address: 'Jl. Raya Bogor No.45, Bogor',
      eta: '8 menit',
    },
    mapQuery: '-6.5971,106.7949',
  },
  {
    id: 'GPS F52672',
    plate: 'F 8122 CD',
    type: 'Truk Armroll 02',
    driver: 'Rusman',
    phone: '0813-8899-2341',
    status: 'online',
    statusLabel: 'Online',
    engineStatus: 'ON',
    speed: '28',
    speedUnit: 'km/jam',
    engineHours: '42.1 jam',
    fuelLevel: '68 Liter',
    tripDistance: '32.4 km',
    totalDistance: '740 km',
    battery: '88%',
    destination: {
      name: 'TPST Bantargebang',
      address: 'Jl. Pangkalan V, Bekasi',
      eta: '45 menit',
    },
    mapQuery: '-6.3541,106.9949',
  },
  {
    id: 'GPS F52690',
    plate: 'F 8431 EF',
    type: 'Truk Dump 03',
    driver: 'Ahmad Fauzi',
    phone: '0857-1122-3344',
    status: 'perjalanan',
    statusLabel: 'Perjalanan',
    engineStatus: 'ON',
    speed: '42',
    speedUnit: 'km/jam',
    engineHours: '29.8 jam',
    fuelLevel: '40 Liter',
    tripDistance: '61.2 km',
    totalDistance: '420 km',
    battery: '90%',
    destination: {
      name: 'TPS Baranangsiang',
      address: 'Jl. Pajajaran No.12, Bogor Timur',
      eta: '14 menit',
    },
    mapQuery: '-6.6021,106.8049',
  },
  {
    id: 'GPS F52633',
    plate: 'F 8901 GH',
    type: 'Truk Tangki 04',
    driver: 'Dedi Kurniawan',
    phone: '0818-4455-6677',
    status: 'perjalanan',
    statusLabel: 'Perjalanan',
    engineStatus: 'ON',
    speed: '38',
    speedUnit: 'km/jam',
    engineHours: '55.3 jam',
    fuelLevel: '75 Liter',
    tripDistance: '18.9 km',
    totalDistance: '910 km',
    battery: '92%',
    destination: {
      name: 'Pool Cibuluh',
      address: 'Jl. Raya KS Tubun No.88, Bogor Utara',
      eta: '22 menit',
    },
    mapQuery: '-6.5521,106.8149',
  },
  {
    id: 'GPS F52604',
    plate: 'F 8002 KL',
    type: 'Truk Derek 05',
    driver: 'Hendra Wijaya',
    phone: '0819-7788-9900',
    status: 'maintenance',
    statusLabel: 'Maintenance',
    engineStatus: 'OFF',
    speed: '0',
    speedUnit: 'km/jam',
    engineHours: '88.1 jam',
    fuelLevel: '25 Liter',
    tripDistance: '0.0 km',
    totalDistance: '1,240 km',
    battery: '65%',
    destination: {
      name: 'Bengkel Dinas LH',
      address: 'Jl. Bina Marga No.3, Bogor',
      eta: 'Dalam Perbaikan',
    },
    mapQuery: '-6.5821,106.7849',
  },
  {
    id: 'GPS F52611',
    plate: 'F 8119 MN',
    type: 'Truk Box 06',
    driver: 'Joko Prasetyo',
    phone: '0821-2233-4455',
    status: 'tersedia',
    statusLabel: 'Tersedia',
    engineStatus: 'OFF',
    speed: '0',
    speedUnit: 'km/jam',
    engineHours: '12.4 jam',
    fuelLevel: '90 Liter',
    tripDistance: '0.0 km',
    totalDistance: '210 km',
    battery: '98%',
    destination: {
      name: 'Pool Utama Pajajaran',
      address: 'Jl. Raya Pajajaran No.1, Bogor',
      eta: 'Siaga / Standby',
    },
    mapQuery: '-6.5911,106.7999',
  },
];

export function getVehicleGroups(vehicles: VehicleData[] = sampleVehicles): VehicleGroup[] {
  return [
    {
      id: 'online',
      title: 'Armada Aktif / Online',
      icon: 'local_shipping',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      vehicles: vehicles.filter((v) => v.status === 'online'),
    },
    {
      id: 'perjalanan',
      title: 'Dalam Perjalanan',
      icon: 'near_me',
      badgeColor: 'bg-amber-100 text-amber-700',
      vehicles: vehicles.filter((v) => v.status === 'perjalanan'),
    },
    {
      id: 'siaga',
      title: 'Maintenance & Siaga',
      icon: 'build',
      badgeColor: 'bg-slate-100 text-slate-700',
      vehicles: vehicles.filter((v) => v.status === 'maintenance' || v.status === 'tersedia'),
    },
  ];
}
