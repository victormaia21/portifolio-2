"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import Project from "@/components/Projetcts/Project";
import { SiPrisma } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { SiTypeorm } from "react-icons/si";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [itsDark, setItsDark] = useState(true);

  useEffect(() => {
    setItsDark(true);
  }, [])
 
  const iconsNodeWithPrisma = [
    {
      component: SiPrisma
    },
    {
      component: SiTypescript
    },
    {
      component: FaNodeJs
    },
    {
      component: SiSwagger
    },
    {
      component: GrMysql
    },
    {
      component: FaDocker
    }
  ]
  
  const iconsNestAutenticacao = [
    {
      component: SiNestjs
    },
    {
      component: SiSwagger
    },
    {
      component: SiTypeorm
    },
    {
      component: BiLogoPostgresql
    },
    {
      component: SiTypescript,
    },
    {
      component: FaDocker
    },
    {
      component: SiPrisma
    },
  ];

  const iconsNextPosts = [
    {
      component: FaHtml5
    },
    {
      component: SiNextdotjs
    },
    {
      component: FaSass
    },
    {
      component: SiTypescript
    }
  ]

  const descriptionNodeWithPrisma = `
  Esse projeto nasceu da necessidade de criar uma API backend segura e eficiente que pudesse lidar com o cadastro e gerenciamento de usuários. A ideia era garantir que cada usuário tivesse uma experiência tranquila, desde o momento do registro até o gerenciamento de seu perfil, incluindo o envio de uma foto.

O maior desafio foi configurar corretamente a autenticação com JWT, pois queria garantir que as rotas protegidas estivessem realmente seguras. Além disso, integrar o Prisma com o banco de dados MySQL foi um aprendizado importante, principalmente ao lidar com queries mais complexas.

Durante o desenvolvimento, usei o Multer para gerenciar o upload das fotos e o Swagger para documentar a API. Essas escolhas foram fundamentais para garantir que a aplicação fosse tanto funcional quanto fácil de entender por outros desenvolvedores.

No final, o projeto atendeu totalmente os objetivos. Aprendi muito sobre segurança com JWT, boas práticas de estruturação de APIs e como o Prisma pode facilitar o trabalho com bancos de dados. Foi uma experiência muito enriquecedora que me preparou para novos desafios.


  `

  const descriptionNestAutenticacao = `
    Sempre me interessei por criar sistemas seguros e escaláveis, e foi isso que me motivou a desenvolver esse projeto de autenticação usando NestJS. O objetivo principal era criar uma aplicação robusta que pudesse lidar com registro, login e autorização, com um foco especial na segurança.

    Inicialmente, configurar o JWT no NestJS foi um pouco desafiador, mas entendi como os Guards do Nest funcionam e como proteger rotas de maneira eficaz. Outro ponto interessante foi aprender a lidar com uploads de fotos de perfil usando o Multer, uma funcionalidade que parece simples, mas que tem várias nuances quando falamos de segurança e performance.

    Eu também quis garantir que a API fosse bem documentada para facilitar a integração com outras aplicações. Por isso, o Swagger foi uma ferramenta indispensável nesse projeto. Além disso, todo o ambiente foi configurado para rodar em Docker, o que tornou o processo de desenvolvimento muito mais organizado.

    No final, a aplicação ficou do jeito que eu imaginava: segura, escalável e pronta para ser integrada em diferentes contextos. O projeto me ensinou muito sobre como estruturar uma aplicação backend robusta e como utilizar o NestJS de maneira eficaz.
  `

  const descriptionNextPost = `
  Sempre achei interessante como mapas podem enriquecer a experiência do usuário em aplicações web, e foi essa curiosidade que me levou a criar esse projeto. A ideia era simples: um blog onde os usuários pudessem visualizar informações não só em texto, mas também em mapas interativos.

  Uma das maiores dificuldades foi integrar o Leaflet com Next.js, especialmente porque o comportamento dos mapas em ambientes SSR (Server-Side Rendering) pode ser um pouco complexo. No entanto, foi recompensador ver os mapas funcionando perfeitamente, mostrando localizações de usuários e posts de maneira dinâmica.

  Outro ponto de aprendizado foi a gestão de estado com Zustand. Implementar funcionalidades como busca avançada e gerenciamento de favoritos foi um desafio, mas também uma oportunidade de explorar novas formas de melhorar a experiência do usuário.

  No final, a aplicação não só atingiu seus objetivos, como também superou minhas expectativas. Além de criar uma interface bonita e responsiva com Material-UI, consegui implementar uma estrutura robusta que pode ser facilmente expandida no futuro. Foi um projeto divertido e desafiador, que me fez crescer muito como desenvolvedor.
  `
  return (
    <div className={`relative ${itsDark ? "bg-black" : "bg-white"}]`}>
      <header className="border-b-[#16f083] border-b-[2px] pt-3 pb-3 bg-black fixed w-full z-50 pr-4 pl-4">
          <h1 className="text-2xl font-bold text-center text-white">Portfólio</h1>
      </header>
      <main className={`pt-[3.8em] ${itsDark ? "bg-black" : "bg-white"}`}>
        <section className="grid justify-around mt-24 items-center gap-12 sm:flex">
          <div className="text-center">
            <h1 className={`font-bold text-4xl ${itsDark && "text-white"} transition-all duration-700 tracking-widest`}>Olá, eu sou</h1>
            <h1 className={`font-bold text-4xl ${itsDark && "text-[#16f083]"} transition-all duration-700 tracking-widest`}>João Victor :{")"}</h1>
            <p className="text-[#aaa] text-xl mt-2">Desenvolvedor Full-Stack</p>
            <div className="mt-5 flex gap-3">
              <Link
                href="/download/curriculo.pdf"
                target="_blank"
                download
                className="bg-[#16f083] pl-4 pr-4 pt-2 pb-2 text-white rounded-3xl transition-all duration-700 hover:scale-90"
              >
                Download Curriculo
              </Link>
              <Link
                href="malito:jvictorbmadm@gmail.com"
                target="_blank"
                className=
                  {
                    `border-[1px] border-[#16f083] pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-[#16f083] 
                    hover:text-white transition-all duration-700 hover:scale-90 ${itsDark && "text-white"}`
                  }
              >
                Entra em contato
              </Link>
            </div>
          </div>
          <div>
            <Link href="https://github.com/victormaia21" about="meu github" target="_blank">
              <Image 
                src={itsDark ? "/img/eu2.jpg" : "/img/eu.jpg"} 
                alt="Eu" 
                width={300} 
                height={300} 
                className="cursor-pointer hover:scale-110 transition-all duration-700 z-0"
              />
            </Link>
          </div>
        </section>
        <section className={`${itsDark ? "bg-black" : "bg-white"}`}>
          <article className="w-1/2 m-auto mt-20">
            <h1 className={`${itsDark ? "text-white" : "text-black"} text-center font-bold text-3xl`}>Sobre mim</h1>
            <p className="text-[#aaa] mt-3 text-lg">
              Desenvolvedor Full-Stack com experiência em React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, 
              Material UI, NodeJs, NestJs, e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui
              experiência em projetos gerenciados por Metodologias Ágeis. Formado em Analise e desenvolvimento de sistema.
            </p>
          </article>
        </section>
        <section className={`${itsDark ? "bg-black" : "bg-white"}`}>
          <h1 className={`${itsDark ? "text-white" : "text-black"} text-center mt-12 font-bold text-3xl`}>Habilidades</h1>
          <div className="grid grid-cols-habilitiys gap-4 pl-36 pr-36 text-center mt-12">
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 rounded-tl-xl border-b-[2px] h-36 border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>HTML5</h2>
              <FaHtml5 />
            </div>
            <div 
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>CSS3</h2>
              <FaCss3Alt />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>JavaScript</h2>
              <IoLogoJavascript />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>TypeScript</h2>
              <SiTypescript />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>React</h2>
              <FaReact />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>Next.js</h2>
              <SiNextdotjs />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>React Query</h2>
              <SiReactquery />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>Sass</h2>
              <FaSass />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>Figma</h2>
              <FaFigma />
            </div>
            <div
            className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>Node.js</h2>
              <FaNodeJs />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>NestJS</h2>
              <SiNestjs />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>PostgreSQL</h2>
              <BiLogoPostgresql />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>MySQL</h2>
              <GrMysql />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>MongoDB</h2>
              <SiMongodb />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>Docker</h2>
              <FaDocker />
            </div>
            <div
              className=
              "flex flex-col items-center bg-[#202120] text-[#16f083] justify-center gap-1 text-2xl pt-6 pb-6 pl-2 pr-2 h-36 rounded-tl-xl border-b-[2px] border-b-[#16f083] cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <h2>Swagger</h2>
              <SiSwagger />
            </div>
          </div>
        </section>
        <section className={`pl-36 pr-36 ${itsDark && "text-white"} pt-20`}>
          <h1 className="text-center text-3xl font-bold">Projetos</h1>
          <div className="mt-12">
            <h1 className="text-2xl">Backend</h1>
            <div className="bg-[#16f083] w-36 h-1"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                <Project 
                  src={'/img/nodewithprisma.png'}
                  icons={iconsNodeWithPrisma}
                  video={"/videos/nodejswithprisma.mp4"}
                  date="21 de julho de 2024"
                  title="Projeto com Node.js, TypeScript e Prisma"
                  description={descriptionNodeWithPrisma}
                  repositoryLink="https://github.com/victormaia21/Crud-nodeJs-Typescript-Docker-Prisma/tree/main"
                  linkedinPostLink="https://www.linkedin.com/posts/joaovictorbm_nodejs-typescript-prisma-activity-7218342465525710849-5X3e?utm_source=share&utm_medium=member_desktop"
                />
                <Project 
                  src={'/img/autenticacaowithnest.png'}
                  icons={iconsNestAutenticacao}
                  video={"/videos/autenticacaowithnest.mp4"}
                  date="21 de julho de 2024"
                  title="Projeto de Autenticação com NestJS"
                  description={descriptionNestAutenticacao}
                  repositoryLink="https://github.com/victormaia21/Jest-authenticated-backend-with-prisma"
                  linkedinPostLink="https://www.linkedin.com/posts/joaovictorbm_nestjs-postgresql-jwt-activity-7218058731412963328-Dc3r?utm_source=share&utm_medium=member_desktop"
                />
            </div>
            
            <h1 className="text-2xl mt-20">Frontend</h1>
            <div className="bg-[#16f083] w-36 h-1"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-4 gap-y-4 pb-48 h-full">
              <Project 
                  src={'/img/posts.png'}
                  icons={iconsNextPosts}
                  video={"/videos/posts.mp4"}
                  date="21 de julho de 2024"
                  title="Projeto de posts com nextjs e sass"
                  description={descriptionNextPost}
                  repositoryLink="https://github.com/victormaia21/app-posts-mapa-with-nextjs/tree/main"
                  linkedinPostLink="https://www.linkedin.com/posts/joaovictorbm_aplica%C3%A7%C3%A3o-de-blog-com-nextjs-e-integra%C3%A7%C3%A3o-activity-7218001868373839875-QQst?utm_source=share&utm_medium=member_desktop"
              />
            </div>
          </div>
        </section>
        <footer className={`${itsDark && "text-white"} pt-52 pb-52`}>
          <h1 className={`text-center text-3xl font-bold`}>Contatos</h1>
          <div className="md:flex md:w-full w-1/3 m-auto justify-center gap-x-12 gap-y-32 text-center mt-20">
            <Link href="malito:jvictorbmadm@gmail.com" target="_blank" className="flex flex-col items-center hover:scale-125 duration-500 transition-all" about="">
              <div className="bg-[#202120] h-12 w-12 rounded-full flex justify-center items-center">
                <MdEmail className="text-3xl text-[#16f083]"/>
              </div> 
              <h2 className="font-bold text-lg mt-2">E-mail</h2>
              <p className="mt-1 text-[#aaa]">jvictorbmadm@gmail.com</p>
            </Link>
            <Link href="https://wa.me/5568999517836?text=Oi%20jo%C3%A3o" target="_blank" className="flex flex-col items-center hover:scale-125 duration-500 transition-all" about="">
              <div className="bg-[#202120] h-12 w-12 rounded-full flex justify-center items-center">
                <MdOutlineLocalPhone className="text-3xl text-[#16f083]"/>
              </div>
              <h2 className="font-bold text-lg mt-2">Telefone</h2>
              <p className="mt-1 text-[#aaa]">(68) 99951-7836</p>
            </Link>
            <Link href="https://www.linkedin.com/in/joaovictorbm/" target="_blank" className="flex flex-col items-center hover:scale-125 duration-500 transition-all" about="">
              <div className="bg-[#202120] h-12 w-12 rounded-full flex justify-center items-center">
                <FaLinkedinIn className="text-3xl text-[#16f083]" />
              </div>
              <h2 className="font-bold text-lg mt-2">Linkedin</h2>
              <p className="mt-1 text-[#aaa]">João Victor Benevenuto Maia</p>
            </Link>
            <Link href="https://github.com/victormaia21" target="_blank" className="flex flex-col items-center hover:scale-125 duration-500 transition-all" about="">
              <div className="bg-[#202120] h-12 w-12 rounded-full flex justify-center items-center">
                <FaGithub className="text-3xl text-[#16f083]" />
              </div>
              <h2 className="font-bold text-lg mt-2">GitHub</h2>
              <p className="mt-1 text-[#aaa]">@victormaia21</p>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
