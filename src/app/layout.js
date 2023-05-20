import './globals.css';
import { Inter } from 'next/font/google';
import Headers from './Headers';
import Footers from './Footers';
import Copyright from './Copyright';
import { StoreProvider } from './utils/Store';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ThaiChin',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <Headers />
          </header>
          <main>
            <div className="container">{children}</div>
          </main>
          <footer>
            <Footers />
            <Copyright />
          </footer>
        </body>
      </html>
    </StoreProvider>
  );
}
