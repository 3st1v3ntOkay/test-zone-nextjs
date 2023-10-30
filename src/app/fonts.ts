import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter'
});

const ProductSans = localFont({
  src: [
    {
      path: '../fonts/product-sans-regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../fonts/product-sans-bold.ttf',
      weight: '800',
      style: 'bold'
    },
  ],
  display: 'swap',
  variable: '--product-sans'
})

export { inter, ProductSans };