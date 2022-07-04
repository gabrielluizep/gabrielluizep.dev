import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { FiMenu, FiX, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'

// bg-blue-300/30 sm:bg-green-300/30 md:bg-yellow-300/30 lg:bg-red-300/30 xl:bg-orange-300/30 2xl:bg-slate-300/30
export default function Index() {
  return (
    <div className="py-8 px-6 min-h-screen bg-gradient-to-tl from-backgroundLighter to-backgroundDarker sm:py-12 sm:px-16 md:px-24 lg:px-48 2xl:px-56">
      {/* Breakpoint visualizer */}
      <span className="fixed h-10 w-10 bottom-0 left-0 bg-blue-300 sm:bg-green-300 md:bg-yellow-300 lg:bg-red-300 xl:bg-orange-300 2xl:bg-slate-300" />

      <Navbar />

      {/* Content */}
      <main className="w-full px-6 py-16 sm:py-24 space-y-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <p className="text-justify text-text max-w-sm">
            Olá, eu sou <span className="text-primary">Gabriel Espindola!</span> consectetur adipisicing elit.
            Debitis alias reiciendis beatae tempora ipsa. Animi nihil, minus ad sit harum placeat dolor hic
            repellendus doloribus ex. Debitis nostrum placeat optio.
          </p>

          <div className="relative max-w-[200px] m-auto w-full h-64 bg-text z-10">
            <span className="absolute -bottom-4 -left-5 z-0">
              <Image src={'/vec1.svg'} alt="decoration" width={64} height={64} />
            </span>
            <span className="absolute -bottom-6 -left-3 z-0">
              <Image src={'/vec2.svg'} alt="decoration" width={64} height={64} />
            </span>
            <span className="absolute top-10 right-0 translate-x-1/2 z-0">
              <Image src={'/vec5.svg'} alt="decoration" width={64} height={64} />
            </span>
          </div>
        </section>
      </main>

      <div className="fixed sm:block right-16 md:right-24 lg:right:32 bottom-0 h-32 w-[1px] bg-text hidden">
        <div className="space-y-5 absolute -translate-x-1/2 -top-full">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/gabrielluizep"
            className="hidden sm:block text-white cursor-pointer hover:text-primary shadow-2xl"
          >
            <FiGithub color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/gabrielluizep"
            className="hidden sm:block text-white cursor-pointer hover:text-primary shadow-2xl"
          >
            <FiTwitter color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabrielluizep"
            className="hidden sm:block text-white cursor-pointer hover:text-primary shadow-2xl"
          >
            <FiLinkedin color="inherit" size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between">
      <Image src={'/logo.svg'} alt="logo" width={48} height={48} />

      {/* Mobile Menu */}
      <div className="relative sm:hidden" onClick={() => setOpen((prev) => !prev)}>
        {!open ? <FiMenu color="white" size={32} /> : <FiX color="white" size={32} />}
        <div
          className={`${
            open ? 'absolute' : 'hidden'
          } right-0 top-full w-48 bg-backgroundLighter grid grid-cols-2 p-5 space-y-5 justify-self-center z-50 shadow-sm shadow-primary text-white font-bold`}
        >
          <p />
          <Link href="#about" passHref>
            Sobre
          </Link>
          <p />

          <Link href="#contact" passHref>
            Contato
          </Link>
          <p />

          <Link href="#curriculum" passHref>
            Currículo
          </Link>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/gabrielluizep"
            className="text-white cursor-pointer shadow-2xl place-self-start mt-auto"
          >
            <FiGithub color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/gabrielluizep"
            className="text-white cursor-pointer shadow-2xl place-self-start mt-auto"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/gabrielluizep"
            className="text-white cursor-pointer shadow-2xl place-self-start mt-auto"
          >
            <FiTwitter color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/gabrielluizep"
            className="text-white cursor-pointer shadow-2xl place-self-start mt-auto"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabrielluizep"
            className="text-white cursor-pointer shadow-2xl place-self-start mt-auto"
          >
            <FiLinkedin color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabrielluizep"
            className="text-white cursor-pointer shadow-2xl place-self-start mt-auto"
          >
            Linkedin
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden space-x-5 sm:block md:space-x-10">
        <Link href="#about" passHref>
          <button className="text-white py-1 px-4 border-2 border-text">Sobre</button>
        </Link>
        <Link href="#contact" passHref>
          <button className="text-white py-1 px-4 border-2 border-text">Contato</button>
        </Link>
        <Link href="#curriculum" passHref>
          <button className="text-white py-2 px-4 border-2 border-primary">Currículo</button>
        </Link>
      </div>
    </nav>
  )
}
