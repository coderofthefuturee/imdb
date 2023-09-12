import Providers from './Providers.jsx'
// import DarkModeSwitch from './components/DarkModeSwitch.jsx'
import Header from './components/header.jsx'
import MenuItem from './components/MenuItem.jsx' // Note the change here
import './globals.css'
import Navbar from './components/Navbar.jsx'

export const metadata = {
  title: 'IMDB Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {/* Navbar */}

          <Navbar />

          {/* SearchBox

          {/* <SearchBox /> */} 

          {children}
        </Providers>
      </body>
    </html>
  );
}
