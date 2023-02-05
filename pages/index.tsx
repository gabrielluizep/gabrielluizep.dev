import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { FiMenu, FiX, FiLinkedin, FiTwitter, FiGithub, FiGlobe } from 'react-icons/fi'
import { SiJavascript, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { useIntl } from 'react-intl'

export default function Index() {
  const intl = useIntl()

  const title = intl.formatMessage({ id: 'page.home.hero.title' })
  const subtitle = intl.formatMessage({ id: 'page.home.hero.subtitle' })

  return (
    <>
      <div className="py-8 px-6 min-h-screen bg-gradient-to-tl from-backgroundLighter to-backgroundDarker  sm:px-16 md:px-24 lg:px-48 2xl:px-56 scroll-smooth">
        <Navbar />

        {/* Content */}
        <main className="w-full px-6 mt-24 space-y-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
            <div>
              <h1 className="text-4xl text-text font-IntegralCF mt-8 mb-8 tracking-widest line leading-tight">
                {title} <br /> <span className="text-primary tracking-normal">Gabriel Espindola!</span>
              </h1>
              <p className="text-text max-w-sm text-lg mb-8 tracking-wider">{subtitle}</p>

              <div className="text-text transition-colors text-2xl flex space-x-5">
                <SiReact className="hover:text-primary" />
                <SiTypescript className="hover:text-primary" />
                <SiJavascript className="hover:text-primary" />
                <SiNextdotjs className="hover:text-primary" />
                <SiPrisma className="hover:text-primary" />
                <SiTailwindcss className="hover:text-primary" />
              </div>
            </div>

            <div className="relative m-auto h-[358px] w-[267px] aspect-square bg-cyan-500 mt-8 lg:mt-0">
              <Image
                src="/profile-picture.png"
                alt="Profile picture"
                objectFit="cover"
                layout="fill"
                className="z-10"
              />

              <span className="absolute -bottom-4 -left-5 z-0">
                <Image src={'/vec1.svg'} aria-hidden alt="decoration" width={64} height={64} />
              </span>
              <span className="absolute -bottom-6 -left-3 z-20">
                <Image src={'/vec2.svg'} aria-hidden alt="decoration" width={64} height={64} />
              </span>
              <span className="absolute top-10 right-0 translate-x-1/2 z-10">
                <Image src={'/vec5.svg'} aria-hidden alt="decoration" width={64} height={64} />
              </span>
            </div>
          </section>

          <SideLinks />
        </main>
      </div>
    </>
  )
}

const SideLinks = () => (
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
)

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const intl = useIntl()

  const about = intl.formatMessage({ id: 'navbar.about' })
  const contact = intl.formatMessage({ id: 'navbar.contact' })
  const curriculum = intl.formatMessage({ id: 'navbar.curriculum' })

  const handleChangeLanguage = () => {
    if (router.locale === 'en') {
      return router.push(router.asPath, router.asPath, { locale: 'pt-BR' })
    }

    return router.push(router.asPath, router.asPath, { locale: 'en' })
  }

  return (
    <nav className="flex items-center justify-between">
      <div className="flex space-x-4 items-center">
        <Image src="/logo.svg" alt="logo" width={48} height={48} className="hover:rotate-45 transition-all" />
        <h1 className="text-primary font-mono">gabrielluizep.dev</h1>
      </div>

      {/* Mobile Menu */}
      <div className="relative md:hidden" onClick={() => setOpen((prev) => !prev)}>
        {!open ? <FiMenu color="white" size={32} /> : <FiX color="white" size={32} />}
        <div
          className={`${
            open ? 'absolute' : 'hidden'
          } right-0 top-full w-48 bg-backgroundLighter grid grid-cols-2 p-5 space-y-5 justify-self-center z-50 shadow-sm shadow-primary text-white font-bold`}
        >
          <p />
          <Link href="#about" passHref>
            {about}
          </Link>
          <p />

          <Link href="mailto:gabrielluizep@hotmail" passHref>
            {contact}
          </Link>
          <p />

          <Link href="/curriculum.pdf" passHref>
            {curriculum}
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
      <div className="hidden space-x-5 md:flex md:space-x-10 text-white items-center">
        {/* <Link href="#about" passHref>
          <button className="text-white py-1 px-4 border-2 border-text">Sobre</button>
        </Link> */}
        <Link href="mailto:gabrielluizep@hotmail.com" passHref>
          <button className="py-1 px-4 border-2 border-text">{contact}</button>
        </Link>
        <Link href="/curriculum.pdf" passHref>
          <button className="py-2 px-4 border-2 border-primary">{curriculum}</button>
        </Link>

        <button className="py-2 px-2 border-2 border-primary" onClick={handleChangeLanguage}>
          <FiGlobe color="inherit" size={24} />
        </button>
      </div>
    </nav>
  )
}
