import './globals.css'
import { Providers } from './redux/provider';


export const metadata = {
  title: 'João Ricardo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
