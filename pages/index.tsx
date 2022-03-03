import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { MdAdsClick, MdOutlineWork, MdPerson, MdSchool, MdWavingHand } from 'react-icons/md'
import { ImGithub, ImLinkedin } from 'react-icons/im'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>gabrielluizep.dev</title>
        <meta name="description" content="Gabriel Luiz Espindola Pedro developer page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cabeçalho */}
      <div className="max-w-7xl m-auto p-4 md:flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold">Gabriel Espindola</h1>
          <h2 className="text-xl ">Desenvolvedor React</h2>
        </div>
        <div className="flex space-x-4 mt-2">
          <a target="_blank" rel="noreferrer" href="https://github.com/gabrielluizep">
            <ImGithub className="text-4xl" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabrielluizep/">
            <ImLinkedin className="text-4xl" />
          </a>
        </div>
      </div>

      {/* Corpo */}
      <div className="max-w-7xl m-auto md:flex justify-between p-4">
        {/* Coluna Esquerda */}
        <div>
          {/* Perfil */}
          <div className="flex pr-4 mb-4">
            <MdPerson className="text-4xl pr-2" />
            <div>
              <h3 className="text-2xl font-semibold pb-2">Perfil</h3>
              <p className="max-w-3xl text-justify">
                Estudante de engenharia apaixonado por React e JavaScript, iniciei minha carreira aos 18
                estagiando como técnico de assistência técnico onde realizava análise, teste e conserto de
                produtos, encontrei minha vocação ao ter meu primeiro contato profundo com a programação em um
                projeto final do curso técnico. Aprendi incialmente a base de JavaScript, HTML, CSS e Node.js,
                ao ter maior contato com programação no meio profissional, direcionei minha carreira ao
                desenvolvimento React onde atuo desde então
              </p>
            </div>
          </div>

          <div className="flex pr-4 mb-4">
            <MdAdsClick className="text-4xl pr-2" />
            <div>
              <h3 className="text-2xl font-semibold pb-2">Objetivo</h3>
              <p className="max-w-3xl text-justify">
                Procuro por uma vaga de estágio em desenvolvimento front-end com foco em desenvolvimento
                React. Tenho desejo em me aprofundar meus conhecimentos em TDD com testes unitários e de
                integração e TypeScript.
              </p>
            </div>
          </div>

          <div className="flex pr-4 mb-4">
            <MdOutlineWork className="text-4xl pr-2" />
            <div>
              <h3 className="text-2xl font-semibold pb-4">Estágios</h3>
              <h4 className="text-xl font-">Técnico Assistência Técnico, Intelbras</h4>
              <p className="text-xs text-slate-400 pb-2">janeiro 2020 - novembro 2020</p>
              <h4 className="text-xl font-">Técnico de Desenvolvimento de produto, Intelbras</h4>
              <p className="text-xs text-slate-400 pb-2">novembro 2020 - abril 2021</p>
              <h4 className="text-xl font-">Desenvolvedor React, Intelbras</h4>
              <p className="text-xs text-slate-400 pb-2">abril 2021 - janeiro 2022</p>
              <h4 className="text-xl font-">Desenvolvedor Fulstack, Web Tecnologia</h4>
              <p className="text-xs text-slate-400 pb-2">fevereiro 2022 - março 2022</p>
            </div>
          </div>

          <div className="flex pr-4 mb-4">
            <MdSchool className="text-4xl pr-2" />
            <div>
              <h3 className="text-2xl font-semibold pb-4">Formação Acadêmica</h3>
              <h4 className="text-xl font-">
                Técnico em telecomunicações, Instituto Federal de Santa Catarina
              </h4>
              <p className="text-xs text-slate-400 pb-2">janeiro 2017 - abril 2021</p>
              <h4 className="text-xl font-">
                Engenharia de telecomunicações, Instituto Federal de Santa Catarina
              </h4>
              <p className="text-xs text-slate-400 pb-2">maio 2020 - presente</p>
            </div>
          </div>

          <div className="flex pr-4 mb-4">
            <MdSchool className="text-4xl pr-2" />
            <div>
              <h3 className="text-2xl font-semibold pb-4">Cursos</h3>
              <h4 className="text-xl font-">
                React - The Complete Guid (incl Hooks, React Router, Redux), Udemy
              </h4>
              <p className="text-xs text-slate-400 pb-2">janeiro 2021 - março 2021</p>
            </div>
          </div>

          <div className="flex pr-4 mb-4">
            <MdWavingHand className="text-4xl pr-2" />
            <div>
              <h3 className="text-2xl font-semibold pb-2">Atividades Extra-Curriculares</h3>
              <h4 className="text-xl font-">Membro do Supremo Conselho da Ordem DeMolay Brasil</h4>
              <p className="text-xs text-slate-400 pb-2">novembro 2017 - presente</p>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div>
          <h3 className="text-2xl font-semibold">Dados Pessoais</h3>
          <div className="p-2 mb-4">
            <p>Palhoça</p>
            <p>Brasil</p>
            <a className="text-teal-600" href="mailto:gabrielluizep@hotmail.com">
              gabrielluizep@hotmail.com
            </a>
          </div>

          <h3 className="text-2xl font-semibold">Data / Local de nascimento</h3>
          <div className="p-2 mb-4">
            <p>15/06/2021</p>
            <p>São José, Santa Catarina, Brasil</p>
          </div>

          <h3 className="text-2xl font-semibold">Competências</h3>
          <div className="p-2 mb-4">
            <p>HTML & CSS</p>
            <div className="w-4/5 h-1 bg-cyan-500" />

            <p>JavaScript</p>
            <div className="w-4/5 h-1 bg-cyan-500" />

            <p>React</p>
            <div className="w-4/5 h-1 bg-cyan-500" />

            <p>Material-UI</p>
            <div className="w-4/5 h-1 bg-cyan-500" />

            <p>Linux</p>
            <div className="w-4/5 h-1 bg-cyan-500" />

            <p>SCRUM</p>
            <div className="w-4/5 h-1 bg-cyan-500" />

            <p>Git</p>
            <div className="w-3/5 h-1 bg-cyan-500" />

            <p>Redux</p>
            <div className="w-3/5 h-1 bg-cyan-500" />

            <p>Next.js</p>
            <div className="w-2/5 h-1 bg-cyan-500" />

            <p>Typescript</p>
            <div className="w-1/5 h-1 bg-cyan-500" />

            <p>TailwindCSS</p>
            <div className="w-1/5 h-1 bg-cyan-500" />
          </div>
          <h3 className="text-2xl font-semibold">Idiomas</h3>
          <div className="p-2">
            <p>Português</p>
            <div className="w-4/5 h-1 bg-cyan-500" />
            <p>Inglês</p>
            <div className="w-4/5 h-1 bg-cyan-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
