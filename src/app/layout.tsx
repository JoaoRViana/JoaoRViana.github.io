import './globals.css'
import { Providers } from './redux/provider';
import favIcon from './icon.png'


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
      <head>
        <link rel="shortcut icon" href={favIcon.src} sizes='any'/>
        </head>
      <body>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
