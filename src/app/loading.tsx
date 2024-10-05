'use client';

import BarLoader from 'react-spinners/BarLoader';

export default function Loading() {
  return <BarLoader height={8} speedMultiplier={4} width={200} />;
}
