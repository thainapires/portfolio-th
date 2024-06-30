import { Links, ProjectCard, ProjectInfo, Tags } from '../styles/components/project'

import Image from 'next/image'
import photoImg from '../assets/photo.svg'

export default function Project() {
    return (
        <div className="flex border-2 p-4 gap-2 rounded-lg border-mainPurple">
            <div className="">
                <h5 className="text-base font-bold pb-2">read.me 📖</h5>
                <p className="text-xs pb-2 text-white text-opacity-50">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                <div className="flex gap-2 pb-4">
                    <span className="text-xs bg-mainPurple rounded">Online</span>
                    <span className="text-xs bg-mainPurple rounded">Typescript</span>
                </div>
                <div className="flex gap-4">
                    <a className="text-sm" href="#">Código</a>
                    <a className="text-sm" href="#">Live Demo</a>
                </div>
            </div>
            <Image className="" src={photoImg} width={160} alt=""/>
        </div>
        
    )
}