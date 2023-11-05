import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter'
});

// const ProductSans = localFont({
//   src: [ ],
//   display: 'swap',
//   variable: '--product-sans'
// })

export { inter };