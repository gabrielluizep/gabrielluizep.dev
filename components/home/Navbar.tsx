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
      <div className="flex items-center space-x-4">
        <Image src="/logo.svg" alt="logo" width={48} height={48} className="transition-all hover:rotate-45" />
        <h1 className="font-mono text-primary">gabrielluizep.dev</h1>
      </div>

      {/* Mobile Menu */}
      <div className="relative md:hidden" onClick={() => setOpen((prev) => !prev)}>
        {!open ? <FiMenu color="white" size={32} /> : <FiX color="white" size={32} />}
        <div
          className={`${
            open ? 'absolute' : 'hidden'
          } right-0 top-full z-50 grid w-48 grid-cols-2 space-y-5 justify-self-center bg-backgroundLighter p-5 font-bold text-white shadow-sm shadow-primary`}
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
            className="mt-auto cursor-pointer place-self-start text-white shadow-2xl"
          >
            <FiGithub color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/gabrielluizep"
            className="mt-auto cursor-pointer place-self-start text-white shadow-2xl"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/gabrielluizep"
            className="mt-auto cursor-pointer place-self-start text-white shadow-2xl"
          >
            <FiTwitter color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/gabrielluizep"
            className="mt-auto cursor-pointer place-self-start text-white shadow-2xl"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabrielluizep"
            className="mt-auto cursor-pointer place-self-start text-white shadow-2xl"
          >
            <FiLinkedin color="inherit" size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabrielluizep"
            className="mt-auto cursor-pointer place-self-start text-white shadow-2xl"
          >
            Linkedin
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden items-center space-x-5 text-white md:flex md:space-x-10">
        {/* <Link href="#about" passHref>
          <button className="text-white py-1 px-4 border-2 border-text">Sobre</button>
        </Link> */}
        <Link href="mailto:gabrielluizep@hotmail.com" passHref>
          <button className="border-2 border-text py-1 px-4">{contact}</button>
        </Link>
        <Link href="/curriculum.pdf" passHref>
          <button className="border-2 border-primary py-2 px-4">{curriculum}</button>
        </Link>

        <button className="border-2 border-primary py-2 px-2" onClick={handleChangeLanguage}>
          <FiGlobe color="inherit" size={24} />
        </button>
      </div>
    </nav>
  )
}
