import Link from 'next/link'
import notFound from './assets/sadness.png';
import Image from "next/image";
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-5/6">
      <h2 className="text-5xl font-bold text-center">Em breve!</h2>
      <p className="text-xl text-center">Esta página está sobre construção...</p>
      <Image className="object-contain h-auto max-w-96 mt-4" src={notFound} alt=""/>
      <Footer/>
    </main>
  )
}