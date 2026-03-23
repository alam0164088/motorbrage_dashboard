'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // List of public routes that don't require authentication
    const publicRoutes = ['/', '/forgot-password'];

    // If not logged in and trying to access a protected route, redirect to login
    if (!isLoggedIn && !publicRoutes.includes(pathname)) {
      router.push('/');
    }
  }, [pathname, router]);

  // If we are on the login page, render children directly (no sidebar layout)
  if (pathname === '/') {
    return <>{children}</>;
  }

  return <>{children}</>;
};

export default AuthProvider;
