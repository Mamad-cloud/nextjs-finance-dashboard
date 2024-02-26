import '@/app/ui/global.css'
import { iran_sans } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${iran_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
