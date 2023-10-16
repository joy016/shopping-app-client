'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const user = '';
  const initApp = useCallback(async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    initApp();
    if (user.length === 0) {
      router.push('/product');
    } else {
      router.push('/login');
    }
  }, []);

  return <main>hello</main>;
}
