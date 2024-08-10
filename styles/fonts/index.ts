import localFont from 'next/font/local';

export const author = localFont({
  src: [
    {
      path: './Author-Variable.woff2',
      style: 'normal',
    },
    {
      path: './Author-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});
