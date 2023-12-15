import type { Metadata } from 'next';
import { Dosis, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

const dosis = Dosis({ subsets: ['latin'], variable: "--font-dosis" });
const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Gerenciador de tarefas',
  description: 'Um gerenciador de tarefas na palma da sua mão',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${dosis.variable} ${inter.variable} bg-neutral-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
