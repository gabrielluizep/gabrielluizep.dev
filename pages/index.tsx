import Image from 'next/image'

import { SiJavascript, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { useIntl } from 'react-intl'

import Navbar from '../components/home/Navbar'
import SideLinks from '../components/home/SideLinks'

export default function Index() {
  const intl = useIntl()

  const title = intl.formatMessage({ id: 'page.home.hero.title' })
  const subtitle = intl.formatMessage({ id: 'page.home.hero.subtitle' })
  const portfolio = intl.formatMessage({ id: 'page.home.hero.portfolio' })

  return (
    <>
      <div className="py-8 px-6 min-h-screen bg-gradient-to-tl from-backgroundLighter to-backgroundDarker  sm:px-16 md:px-24 lg:px-48 2xl:px-56 scroll-smooth">
        <Navbar />

        <main className="w-full px-6 mt-24 space-y-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <h1 className="text-4xl text-text font-IntegralCF mt-8 mb-8 tracking-widest line leading-tight">
                {title} <br /> <span className="text-primary tracking-normal">Gabriel Espindola!</span>
              </h1>
              <p className="text-text max-w-sm text-lg mb-8 tracking-wider">{subtitle}</p>

              <div className="text-text transition-colors text-2xl flex space-x-5 mb-6">
                <SiReact className="hover:text-primary" />
                <SiTypescript className="hover:text-primary" />
                <SiJavascript className="hover:text-primary" />
                <SiNextdotjs className="hover:text-primary" />
                <SiPrisma className="hover:text-primary" />
                <SiTailwindcss className="hover:text-primary" />
              </div>

              <button className="text-backgroundLighter px-6 py-3 font-bold text-2xl bg-primary">
                {portfolio}
              </button>
            </div>

            <div className="relative m-auto h-[358px] w-[267px] aspect-square bg-cyan-500 mt-8 lg:mt-0 object-cover layou">
              <Image src="/profile-picture.png" alt="Profile picture" fill className="z-10" />

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
