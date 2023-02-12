import Image from 'next/image'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

import { useIntl } from 'react-intl'

import projects from '../../constants/portfolio-projects'

export default function Portfolio() {
  const intl = useIntl()

  const portfolioProjects = intl.formatMessage({ id: 'page.portfolio.portfolioProjects' })

  console.log(intl.locale)

  return (
    <div className="min-h-screen bg-gradient-to-tl from-backgroundLighter to-backgroundDarker px-8">
      <main className="mx-auto max-w-md py-14 md:max-w-xl">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.svg"
              alt="logo"
              width={48}
              height={48}
              className="transition-all hover:rotate-45"
            />
            <p className="hidden font-mono text-primary sm:inline">gabrielluizep.dev</p>
          </div>

          <Link href="/" passHref>
            <FiHome color="white" size={32} />
          </Link>
        </div>

        <h1 className="mb-8 text-2xl font-bold text-white md:text-4xl">{portfolioProjects}</h1>

        {projects.map((project) => (
          <Link
            href={`/portfolio/${project.slug}`}
            key={project.slug}
            className="mb-4 block text-lg font-semibold text-white underline md:text-2xl"
          >
            {project.title}
          </Link>
        ))}

        <Link
          href={`https://minecraft.gabrielluizep.dev`}
          className="mb-4 block text-lg font-semibold text-white underline md:text-2xl"
        >
          Minecraft
        </Link>
      </main>
    </div>
  )
}
