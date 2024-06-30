import { Main, HomeTitle, ProjectsSection, AboutMeSection, AboutMeText, ProjectsList } from '../styles/pages/home'
import profilePicture from '../assets/profilepicture.png'
import aboutMePicture from '../assets/aboutme.jpg'
import Project from '../components/Project'
import { LinkedinLogo, GithubLogo } from "phosphor-react";
import { workElements, academicElements } from "../assets/js/timelineElements";
import { BiLogoTypescript } from "react-icons/bi";
import Link from 'next/link';

import Image from 'next/image'

export default function Home() {
  return (
    <Main className="flex items-center justify-center w-full">
    
    <div id="homeSection" className="w-4/5 md:w-full mt-4 md:mt-0 grid md:grid-flow-col grid-flow-row justify-center items-center h-screen max-h-[400px]">
      <div className="flex flex-col md:order-1 order-2 md:justify-normal">
        <h1 className="lg:max-w-96 md:max-w-80 md:mt-0 mt-6 text-3xl md:text-4xl lg:text-5xl font-bold md:text-start text-center">Desenvolvedora Web Full Stack</h1>
        <h2 className="max-w-sm md:text-4xl text-2xl md:text-start text-center">Thainá Pires</h2>
        <p className="md:text-start text-center">📍Rio de Janeiro, RJ</p>
        <div className="flex justify-center md:justify-normal">
            <Link href="https://linkedin.com/in/thainapires"><LinkedinLogo size={"1.25rem"}/></Link>
            <Link href="https://github.com/thainapires"><GithubLogo size={"1.25rem"}/></Link>
        </div>
      </div>
      <div className="md:order-2 order-1 justify-center flex"> 
        <Image className="object-contain h-auto max-w-64 " src={profilePicture} alt=""/>
      </div>
    </div>

    {/*About Me Section*/}
    <div id="aboutMeSection" className="w-4/5 md:w-full mb-12 mt-12 md:mt-0 grid md:grid-flow-col grid-flow-row gap-8 justify-center items-center">
          <div className="md:order-1 order-2 justify-center align-center flex">
            <Image className="rounded-2xl rounded md:max-h-48 lg:max-h-64 max-h-44 w-auto" src={aboutMePicture} alt=""/>
          </div>
          <div className="flex flex-col justify-center md:order-2 order-1 md:max-w-96">
                <h1 className="pt-4 md:max-w-md md:text-4xl text-3xl text-center md:text-start md:text-3xl font-bold ">Sobre mim</h1>
                <h2 className="text-xl pb-5 text-center md:text-start">Full Stack Web Developer em Rio de Janeiro - Brasil 📍</h2>
                <p className="pb-2 text-center md:text-start">👋 Me chamo Thainá, mas pode me chamar de Thai</p>
                <p className="pb-2 text-center md:text-start">💻 Sou formada em Ciência da Computação pelo Cefet/RJ e trabalho com Desenvolvimento Web há mais de dois anos</p>
                <p className="text-center md:text-start">💡Trabalho remotamente e gosto muito de viajar e conhecer novos lugares</p>
          </div>
          {/*<div className="flex items-center justify-center md:flex-row flex-col-reverse px-6 mx-auto space-y-0 mt-10 mb-32 md:space-y-0 gap-16">
              <div>
                <Image className="rounded-2xl rounded" src={aboutMePicture} width={450} alt=""/>
              </div>
              <div className="md:w-2/5">
                <h1 className="pt-4 max-w-md text-4xl text-center sm:text-left md:text-3xl font-bold ">Sobre mim</h1>
                <h2 className="text-xl pb-5">Full Stack Web Developer com base no Rio de Janeiro - Brasil 📍</h2>
                <p className="text-justify pb-2">👋 Me chamo Thainá, mas pode me chamar de Thai</p>
                <p className="pb-2">💻 Sou formada em Ciência da Computação pelo Cefet/RJ e trabalho com Desenvolvimento Web há mais de dois anos</p>
                <p>💡Trabalho remotamente e gosto muito de viajar e conhecer novos lugares</p>
              </div>
          </div>*/}
      </div>

      <footer className="w-full  rounded-lg shadow  mt-4">
        <div className="w-full max-w-screen-xl mx-auto ">
            <hr className="mx-6 mb-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <span className="mb-6 block text-sm text-gray-500 sm:text-center dark:text-white-400">© 2024 <Link href="#" className="hover:underline">Thainá Pires</Link>. Todos os direitos reservados.</span>
        </div>
    </footer>

 {/*Home Section
      <div id="homeSection" className="flex flex-col-reverse md:flex-row justify-center align-center md:h-[calc(100vh-100px)]">
          <div className="flex flex-col justify-center align-center max-w-fit">
            <h1 className="md:w-3/4 md:text-4xl lg:text-5xl font-bold ">Desenvolvedora Web Full Stack</h1>
            <h2 className=" max-w-sm text-4xl text-center sm:text-left">Thainá Pires</h2>
            <p className="">📍Rio de Janeiro, RJ</p>
            <div className="flex">
                <LinkedinLogo size={"1.25rem"}/>
                <GithubLogo size={"1.25rem"}/>
            </div>
          </div>
          <div className="flex justify-center align-center h-auto max-w-56"> 
            <Image className="object-contain" src={profilePicture} alt=""/>
          </div>
      </div>
*/}
      {/*Home Section
      <div id="homeSection" className="flex justify-center align-center h-[calc(100vh-100px)]">
        <div className="flex container flex-col-reverse md:flex-row items-center px-6 mx-auto gap-4 space-y-0 md:space-y-0">
          <div className="flex flex-col space-y-1">
            <h1 className="pt-4 max-w-md md:pt-0 text-5xl font-bold">Desenvolvedora Web Full Stack</h1>
            <h2 className="max-w-sm text-4xl text-center sm:text-left">Thainá Pires</h2>
            <p>📍Rio de Janeiro, RJ</p>
            <div className="flex justify-center md:justify-start">
              <LinkedinLogo size={"1.25rem"}/>
              <GithubLogo size={"1.25rem"}/>
            </div>
          </div>
          <div> 
            <Image src={profilePicture} width={300} alt=""/>
          </div>
        </div>
      </div>
*/}

      {/*Experiences and Academics Section
      <div id="experiencesSection" className="flex flex-col">
        <h4 className="font-bold text-4xl md:text-3xl md:text-center pb-12">Minha trajetória até aqui</h4>
        <div className="flex justify-center items-center gap-12">
          <div>
            <h2 className="text-xl font-bold pb-4 text-center">Experiência</h2>
            {
              workElements.map((element) => {
                return (
                  <div key={element.id} className="border-mainPurple border-2 rounded-lg w-96 p-4 mb-4">
                    <div className="font-bold">{element.title}</div>
                    <div className="text-base text-white text-opacity-80">{element.company}</div>
                    <div className="text-base text-white text-opacity-50">{element.date}</div>
                    <div className="text-base text-white text-opacity-50">{element.location}</div>
                    <div className="text-sm pt-2">{element.description}</div>
                  </div>
                )
              })
            }
           
          </div>
          <div>
            <h2 className="text-xl font-bold pb-4 text-center">Formação Acadêmica</h2>
            {
              academicElements.map((element) => {
                return (
                  <div key={element.id} className="border-mainPurple border-2 rounded-lg w-96 p-4 mb-4">
                    <div className="font-bold">{element.title}</div>
                    <div className="text-base text-white text-opacity-70">{element.school}</div>
                    <div className="text-base text-white text-opacity-50">{element.date}</div>
                    <div className="text-base text-white text-opacity-50">{element.location}</div>
                    <div className="text-sm pt-2">{element.description}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </div>*/}

      {/*Projects Section
      <div id="projectsSection" className="flex flex-col pt-20 pb-24">
        <h4 className="font-bold text-4xl md:text-3xl md:text-center pb-12">Trabalhos e Projetos</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>*/}
      
    </Main>
  )
}
