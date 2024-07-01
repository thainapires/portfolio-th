'use client'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Header() {

  return (
    <div id="header">
        <nav className="lg:px-36 px-4 relative bg-darkBlue container mx-auto p-6 h-20">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <Image src={logoImg} width={40} alt=""/>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-mainPurple">Home</Link>
                    <Link href="/" className="hover:text-mainPurple">Sobre mim</Link>
                    <Link href="/" className="hover:text-mainPurple">Carreira</Link>
                    <Link href="/" className="hover:text-mainPurple">Projetos</Link>
                    <Link href="/" className="hover:text-mainPurple">Contato</Link>
                </div>
                <ThemeSwitcher/>
            </div>
        </nav>
    </div>
  );
};