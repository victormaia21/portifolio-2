import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { IconType } from 'react-icons';
import { MdClose } from "react-icons/md";

interface IconData {
  name?: string;
  component: IconType;
}

interface Props {
  src: string;
  icons: IconData[];
  video: string;
  title: string;
  description: string;
  date: string;
  projectLink?: string;
  repositoryLink: string;
  linkedinPostLink: string;
}

export default function Project({
    src,
    icons,
    video,
    title,
    description,
    date,
    linkedinPostLink,
    repositoryLink,
    projectLink,
}: Props) {

  const [info, setInfo] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setInfo(false);
    }
  };

  return (
    <>
        <div
          className="relative h-full mt-2 border-b-[3px]  border-b-[#16f083] transition-all duration-500 cursor-pointer hover:scale-110 group hover:z-40"
          onClick={() => setInfo(true)}
        >
            <Image
            src={src}
            alt=""
            height={400}
            width={400}
            className="z-10 w-full h-full"
            />
        
            <div className="absolute bg-[rgba(0,0,0,.5)] right-0 top-0 w-full h-full z-0 group-hover:bg-transparent">
                <div className="h-full w-full flex justify-center items-center gap-2 group-hover:invisible">
                    {icons.length > 0 &&
                    icons.map((icon, index) => (
                        <icon.component
                        className="text-xl text-[#16f083]"
                        key={index}
                        />
                    ))}
                </div>
            </div>
        
            {/* Div com transição corrigida */}
            <div className="z-30 bg-[#202120] flex rounded-b-2xl absolute top-full w-full h-12 -translate-y-[120%] mt-4 justify-between pt-3 pb-3  opacity-0 group-hover:opacity-100  group-hover:delay-300 group-hover:translate-y-[-20%] transition-all duration-500">
                <p className={`text-white ml-3 text-sm`}>{date}</p>
                <button className="mr-3 text-sm bg-[#202120] text-[#16f083] pl-2 pr-2 rounded-xl border-[1px] border-[#16f083] duration-500 transition-all group-hover:delay-1000 group-hover:bg-[#16f083] group-hover:text-white">Ver mais</button>
            </div>
        </div>
        <div
            className={`bg-[rgba(0,0,0,.5)] w-full fixed top-0 left-0 h-full z-50 backdrop-blur-[2px] flex justify-center items-center transition-opacity duration-700 ${
                info ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={handleOutsideClick} // Adiciona o evento de clique fora
        >
            <div
              ref={modalRef} // Referência à segunda div
              className="w-3/4 h-4/5 bg-black rounded-lg"
            >
                <div className="sm:flex gap-12 h-[85%] p-4 z-10">
                {/* Seção do Vídeo */}
                <div className="w-full sm:w-3/5 flex justify-center items-start">
                    <video controls autoPlay className="w-full h-auto rounded-lg">
                    <source src={video} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>

                {/* Seção de Informações */}
                <article className="w-full h-4/6 sm:w-2/5 sm:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#16f083] scrollbar-track-[#202120]">
                    <div className="flex flex-col">
                    <div className="flex justify-end">
                        <MdClose
                        className="text-[#16f083] text-[3em] mr-4 cursor-pointer"
                        onClick={() => setInfo(false)}
                        />
                    </div>
                    <h1 className="text-[#16f083] font-bold text-2xl">{title}</h1>
                    </div>
                    <p className="text-[#aaa] mt-5">{description}</p>
                    <p className="text-[#16f083] mt-3 font-bold">{date}</p>
                </article>
                </div>

                {/* Rodapé ou outra seção */}
                <div className="mt-12 ml-4 flex flex-wrap gap-2 z-0">
                {projectLink && (
                    <Link
                    href={projectLink}
                    target="_blank"
                    className="bg-[#16f083] pt-2 pb-2 pl-3 pr-3 rounded-lg text-sm"
                    >
                    Acessar projeto
                    </Link>
                )}
                <Link
                    href={repositoryLink}
                    target="_blank"
                    className="bg-[#16f083] pt-2 pb-2 pl-3 pr-3 rounded-lg text-sm"
                >
                    Acessar repositorio
                </Link>
                <Link
                    href={linkedinPostLink}
                    target="_blank"
                    className="bg-[#16f083] pt-2 pb-2 pl-3 pr-3 rounded-lg text-sm"
                >
                    Ver post no LinkedIn
                </Link>
                </div>
            </div>
            </div>

    </>
  );
}
