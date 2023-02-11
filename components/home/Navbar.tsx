import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { FiGithub, FiGlobe, FiLinkedin, FiMenu, FiTwitter, FiX } from 'react-icons/fi'
import { useIntl } from 'react-intl'

export default function Navbar() {
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
