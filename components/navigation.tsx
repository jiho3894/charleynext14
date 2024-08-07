'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathName = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home {pathName === '/' && '^^'}</Link>
        </li>
        <li>
          <Link href="/myPage">MyPage {pathName === '/myPage' && '^^'}</Link>
        </li>
        <li>
          <Link href="/list">List {pathName === '/list' && '^^'}</Link>
        </li>
        <li>
          <Link href="/shop">Shop {pathName === '/shop' && '^^'}</Link>
        </li>{' '}
        <li>
          <Link href="/movie">Movie {pathName === '/movie' && '^^'}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
