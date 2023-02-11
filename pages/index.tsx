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
      <div className="min-h-screen scroll-smooth bg-gradient-to-tl from-backgroundLighter to-backgroundDarker py-8  px-6 sm:px-16 md:px-24 lg:px-48 2xl:px-56">
        <Navbar />

        <main className="mt-24 w-full space-y-6 px-6">
          <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <h1 className="line mt-8 mb-8 font-IntegralCF text-4xl leading-tight tracking-widest text-text">
                {title} <br /> <span className="tracking-normal text-primary">Gabriel Espindola!</span>
              </h1>
              <p className="mb-8 max-w-sm text-lg tracking-wider text-text">{subtitle}</p>

              <div className="mb-6 flex space-x-5 text-2xl text-text transition-colors">
                <SiReact className="hover:text-primary" />
                <SiTypescript className="hover:text-primary" />
                <SiJavascript className="hover:text-primary" />
                <SiNextdotjs className="hover:text-primary" />
                <SiPrisma className="hover:text-primary" />
                <SiTailwindcss className="hover:text-primary" />
              </div>

              <button className="bg-primary px-6 py-3 text-2xl font-bold text-backgroundLighter">
                {portfolio}
              </button>
            </div>

            <div className="layou relative m-auto mt-8 aspect-square h-[358px] w-[267px] bg-cyan-500 object-cover lg:mt-0">
              <Image src="/profile-picture.png" alt="Profile picture" fill className="z-10" />

              <span className="absolute -bottom-4 -left-5 z-0">
                <Image src={'/vec1.svg'} aria-hidden alt="decoration" width={64} height={64} />
              </span>
              <span className="absolute -bottom-6 -left-3 z-20">
                <Image src={'/vec2.svg'} aria-hidden alt="decoration" width={64} height={64} />
              </span>
              <span className="absolute top-10 right-0 z-10 translate-x-1/2">
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
