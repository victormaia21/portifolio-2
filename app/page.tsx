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
    🔧 Tecnologias Utilizadas:
        Node.js e Express: Base robusta para o servidor backend.
        TypeScript: Segurança de tipo para um código mais confiável.
        Prisma: ORM poderoso para integração com banco de dados MySQL.
        JWT (JSON Web Tokens): Autenticação segura e eficiente.
        Multer: Upload de imagens para perfis de usuários.
        Swagger: Documentação clara e interativa da API.

        🌟 Principais Funcionalidades:
        Registro de Usuário 📋:
        Criação de novos usuários com validação de e-mail único.
        Upload de foto de perfil.

        Login 🔑:
        Autenticação de usuários com validação de e-mail e senha.
        Geração de token JWT para sessões seguras.
        Gerenciamento de Perfil 👤:
        Atualização de dados do usuário, incluindo foto de perfil.
        Exclusão de conta de usuário.
        Documentação da API 📚:
        Documentação interativa com Swagger, facilitando o entendimento e testes da API.

        📈 Benefícios do Projeto:
        Segurança: Utilização de tokens JWT para garantir que apenas usuários autenticados possam acessar determinadas rotas.
        Escalabilidade: Estrutura de código modular e clara, facilitando a manutenção e a adição de novas funcionalidades.
        Facilidade de Uso: Documentação detalhada da API para desenvolvedores integrarem facilmente em outras aplicações.
        Estou muito entusiasmado com os resultados deste projeto e como ele pode ser utilizado em diversas aplicações que necessitam de autenticação robusta e segura. Se você estiver interessado em saber mais ou discutir sobre oportunidades, sinta-se à vontade para entrar em contato!
  `

  const descriptionNestAutenticacao = `
    🚀🎉 Estou animado para compartilhar com vocês um projeto incrível que desenvolvi recentemente utilizando NestJS! 🎉🚀

    🔧 Tecnologias Utilizadas:
    NestJS: Framework para Node.js construído para desenvolver aplicações escaláveis e eficientes.
    PostgreSQL: Banco de dados relacional poderoso e de código aberto.
    Prisma: ORM moderno e flexível para Node.js.
    JWT: Implementação de autenticação segura com JSON Web Tokens.

    📦 Configurações Principais:
    Porta do Servidor: 3000
    Banco de Dados: Conectado via PostgreSQL com todas as variáveis de ambiente configuradas para fácil customização.
    Autenticação: Configurada com JWT para segurança robusta.

    🔄 Funcionalidades Implementadas:
    Registro e Login de Usuários: Com validações completas para e-mail, nome de usuário e senha.
    Upload de Imagens: Utilizando o Multer para gerenciar upload de fotos de perfil dos usuários.
    Swagger API Documentation: Documentação da API criada com Swagger para facilitar a interação e entendimento das rotas disponíveis.
    Autorização com Guards: Proteção das rotas com AuthGuard para garantir que apenas usuários autenticados possam acessar determinadas funcionalidades.

    🛠️ Docker:
    Configuração completa do Docker para ambiente de desenvolvimento.
    Serviços: Contêineres separados para PostgreSQL e a aplicação NestJS, garantindo isolamento e facilidade de gerenciamento.

    Este projeto representa um passo significativo no desenvolvimento de APIs robustas e seguras utilizando tecnologias modernas. Estou ansioso para explorar mais oportunidades e continuar evoluindo minhas habilidades. Se você está procurando alguém com experiência prática e paixão por desenvolvimento backend, vamos nos conectar! 🤝🔗
  `

  const descriptionNextPost = `
    🌍 Aplicação de Blog com Next.js e Integração de Mapas

      Desenvolvi uma aplicação de blog dinâmica e responsiva usando Next.js, integrando funcionalidades avançadas de mapa com Leaflet e utilizando a JSONPlaceholder API para busca de dados. Este projeto demonstra minha proficiência em tecnologias de frontend e backend, destacando a experiência do usuário e uma gestão robusta de dados.

      Principais Funcionalidades:
      Interface Amigável: Construída com React e estilizada usando Material-UI, a aplicação oferece um design limpo, intuitivo e responsivo.
      Busca e Filtro Avançados: Implementei um sistema de gerenciamento de estado usando Zustand para lidar com capacidades dinâmicas de busca, permitindo que os usuários filtrem posts de maneira eficiente.
      Integração de Mapas: Integração de mapas Leaflet para exibir dados geográficos, melhorando a visualização de locais de usuários e posts.
      Integração de API: Utilizei Axios para busca eficiente de dados da API JSONPlaceholder, garantindo uma recuperação rápida e confiável dos dados.

      Paginação: Implementação de paginação para lidar com grandes conjuntos de dados, melhorando o desempenho e a experiência do usuário.
      Gestão de Favoritos: Desenvolvi uma funcionalidade para que os usuários possam favoritar posts, com persistência de dados usando local storage.

      TypeScript: Garanti a segurança de tipos e melhorei a qualidade do código usando TypeScript em todo o projeto.
      Testes: Empreguei React Query para gerenciar o estado do servidor e testar a confiabilidade das operações de busca de dados.

      Stack Tecnológico:
      Frontend: Next.js, React, Material-UI, Leaflet, Zustand, TypeScript, Sass
      Backend: JSONPlaceholder API
      Gerenciamento de Estado: Zustand
      Busca de Dados: Axios, React Query
      Ferramentas & Bibliotecas: ESLint, TypeScript, Local Storage

      Destaques:
      Gerenciamento de Estado Eficiente: Uso de Zustand para gerenciamento de estado global, garantindo interações suaves e responsivas.

      Design Responsivo: A aplicação é totalmente responsiva, proporcionando uma experiência ótima tanto em dispositivos desktop quanto móveis.

      Otimização de Desempenho: Implementação das melhores práticas para otimização de desempenho, incluindo busca eficiente de dados e carregamento preguiçoso de componentes.

      Sinta-se à vontade para explorar o repositório do projeto aqui e ver a demonstração ao vivo aqui. Estou animado para conectar-me com profissionais e explorar novas oportunidades onde eu possa aplicar e expandir meu conjunto de habilidades.
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
              <button className="bg-[#16f083] pl-4 pr-4 pt-2 pb-2 text-white rounded-3xl transition-all duration-700 hover:scale-90">Download Curriculo</button>
              <button
                className=
                  {
                    `border-[1px] border-[#16f083] pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-[#16f083] 
                    hover:text-white transition-all duration-700 hover:scale-90 ${itsDark && "text-white"}`
                  }
              >
                Entra em contato
              </button>
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
                  title="Projeto de Autenticação com Node.js e Prisma"
                  description={descriptionNodeWithPrisma}
                  repositoryLink="https://github.com/victormaia21/Crud-nodeJs-Typescript-Docker-Prisma/tree/main"
                  linkedinPostLink="https://www.linkedin.com/posts/joaovictorbm_nodejs-typescript-prisma-activity-7218342465525710849-5X3e?utm_source=share&utm_medium=member_desktop"
                />
                <Project 
                  src={'/img/autenticacaowithnest.png'}
                  icons={iconsNestAutenticacao}
                  video={"/videos/autenticacaowithnest.mp4"}
                  date="21 de julho de 2024"
                  title="Projeto de Autenticação com Nest.JS e Prisma"
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
