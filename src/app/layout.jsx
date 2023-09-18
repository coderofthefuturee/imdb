import Providers from './Providers.jsx'
import Header from './components/header.jsx' // Note the change here
import './globals.css'
import Navbar from './components/Navbar.jsx'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />

          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
