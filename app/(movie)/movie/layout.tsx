import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>영화 리스트</div>
      {children}
    </div>
  );
}
