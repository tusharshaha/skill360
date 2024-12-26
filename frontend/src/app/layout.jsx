import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Skill360 - Learn Anytime, Anywhere',
  description:
    'Skill360 is your ultimate platform for online learning in Bangla. Explore courses, develop new skills, and achieve your goals with ease.',
  keywords:
    'e-learning, online courses, freelancing, Skill360, education, skills development'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
