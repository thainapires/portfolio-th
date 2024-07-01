import Image from "next/image";
import Link from 'next/link';
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

import profilePicture from './assets/profilepicture.png';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div id="homeSection" className="grow w-4/5 md:w-full mt-4 md:mt-0 grid md:grid-flow-col grid-flow-row justify-center items-center h-screen max-h-[400px]">
        <div className="flex flex-col md:order-1 order-2 md:justify-normal">
          <h1 className="lg:max-w-96 md:max-w-80 md:mt-0 mt-6 text-3xl md:text-4xl lg:text-5xl font-bold md:text-start text-center">Desenvolvedora Web Full Stack</h1>
          <h2 className="max-w-sm md:text-4xl text-2xl md:text-start text-center">Thainá Pires</h2>
          <p className="md:text-start text-center">📍Rio de Janeiro, RJ</p>
          <div className="flex justify-center items-center md:justify-normal">
              <Link href="https://linkedin.com/in/thainapires"><AiFillLinkedin size={"1.35rem"}/></Link>
              <Link href="https://github.com/thainapires"><FaGithubSquare size={"1.25rem"}/></Link>
          </div>
        </div>
        <div className="md:order-2 order-1 justify-center flex"> 
          <Image className="object-contain h-auto max-w-64 " src={profilePicture} alt=""/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center" id="warning">
        <MdConstruction size="3rem"/>
        <div>Em construção</div>
      </div>
      <footer className="w-full rounded-lg shadow mt-4 bottom-0 absolute">
        <div className="w-full max-w-screen-xl mx-auto ">
            <hr className="mx-6 mb-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <span className="mb-6 block text-sm text-gray-500 sm:text-center dark:text-white-400">© 2024 <Link href="#" className="hover:underline">Thainá Pires</Link>. Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
