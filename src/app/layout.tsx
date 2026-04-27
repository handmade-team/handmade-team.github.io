import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '가내수공업팀 - 스트리머 전문 콘텐츠 제작',
  description: '스트리머 전문 콘텐츠 제작팀 가내수공업팀 공식 웹사이트',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
