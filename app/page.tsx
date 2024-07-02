import Image from "next/image";
import Link from 'next/link';
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaHtml5, FaReact, FaLaravel, FaNodeJs, FaCss3Alt, FaDocker, FaGithub } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiNestjs } from "react-icons/si";

import avatar from './assets/avatar.svg';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div id="homeSection" className="grow w-4/5 md:w-full mt-4 md:mt-0 grid md:grid-flow-col grid-flow-row justify-center items-center h-screen max-h-[400px]">
        <div className="flex flex-col md:order-1 order-2 md:justify-normal mr-10">
          <div>Hello World👋, meu nome é Thainá e sou</div>
          <h1 className="lg:max-w-96 md:max-w-80 md:mt-0 mt-6 text-3xl md:text-4xl lg:text-5xl font-bold md:text-start text-center">Desenvolvedora Web Full Stack</h1>
          <p className="md:text-start text-center">📍Rio de Janeiro, RJ</p>
          <div className="flex justify-center items-center md:justify-normal mt-2">
              <Link href="https://linkedin.com/in/thainapires"><AiFillLinkedin size={"1.35rem"}/></Link>
              <Link href="https://github.com/thainapires"><FaGithubSquare size={"1.25rem"}/></Link>
          </div>
        </div>
        <div className="md:order-2 order-1 justify-center flex"> 
          <Image className="object-contain h-auto max-w-64 " src={avatar} alt=""/>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><FaLaravel className="text-red-500" size="1rem"/> Laravel</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><SiPhp className="text-blue-400" size="1rem"/> PHP</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><FaReact className="text-blue-400" size="1rem"/> React</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><FaNodeJs className="text-green-400" size="1rem"/> Node</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><FaHtml5 className="text-red-400" size="1rem"/> HTML</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><FaCss3Alt className="text-blue-400" size="1rem"/> CSS</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><RiTailwindCssFill className="text-emerald-400" size="1rem"/> Tailwind</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><FaDocker className="text-blue-400" size="1rem"/> Docker</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><FaGithub className="text-black" size="1rem"/> Git</div>
        <div className="py-1 px-3 gap-1 flex justify-center items-center bg-slate-700 rounded rounded-3xl text-md"><SiNestjs className="text-red-400" size="1rem"/> NestJS</div>

      </div>
      <Footer/>
    </main>
  );
}
