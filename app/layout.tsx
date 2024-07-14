import Navigation from '../components/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/** layout을 통해 전역 컴포넌트 설정 가능 */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
