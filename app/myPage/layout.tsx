import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page',
};

// 하위 layout은 html 태그를 사용하지않는다 children안에 있기에 html은 중복 태그가 되기 때문이다.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <h1>마이페이지만 보임</h1>
    </div>
  );
}
