import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = { title: 'Exercícios | Delta Fit', description: 'Cadastro local de exercícios de teste' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
