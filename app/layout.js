import './globals.css'
import Navbar from './ui/navbar';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>ThatMovieList</title>
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }
  