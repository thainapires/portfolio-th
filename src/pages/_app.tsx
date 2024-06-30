import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header, Menu } from '../styles/pages/app'
import '../styles/global.css'
import { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {

  const [isActive, setIsActive] = useState(false);

  const toogleClass = () => {
    setIsActive(!isActive);
  }

  const divClasses = classNames('flex block hamburger md:hidden focus:outline-none', {
    open: isActive,
  });

  const divClasses2 = classNames('absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-darkBlue sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg', {
    hidden: !isActive,
  })

  return (
    <div id="header">
      <nav className="lg:px-36 px-4 relative bg-darkBlue container mx-auto p-6 h-20">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <Image src={logoImg} width={40} alt=""/>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-mainPurple">Home</Link>
            <Link href="#aboutMeSection" className="hover:text-mainPurple">Sobre mim</Link>
            <Link href="#experiencesSection" className="hover:text-mainPurple">Carreira</Link>
            <Link href="#projectsSection" className="hover:text-mainPurple">Projetos</Link>
            <Link href="#" className="hover:text-mainPurple">Contato</Link>
          </div>
          <button onClick={toogleClass} className={divClasses} id="menu-btn">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="md:hidden">
          <div id="menu" className={divClasses2}>
            <Link href="/">Home</Link>
            <Link href="/aboutme">Sobre mim</Link>
            <Link href="#experiencesSection">Carreira</Link>
            <Link href="#projectsSection">Projetos</Link>
            <Link href="#">Contato</Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}