'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">home</Link> {path === '/' ? '불' : ''}
        </li>
        <li>
          <Link href="/about-us">About</Link> {path === '/about-us' ? '불' : ''}
        </li>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      </ul>
    </nav>
  );
}
