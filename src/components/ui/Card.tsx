'use client';
import React from 'react';

type CardProps = React.PropsWithChildren<{ className?: string }>

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`app-box ${className}`}>{children}</div>
  );
}
