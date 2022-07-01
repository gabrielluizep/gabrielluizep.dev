import Image from 'next/image'

import { FiMenu } from 'react-icons/fi'

// bg-blue-300/30 sm:bg-green-300/30 md:bg-yellow-300/30 lg:bg-red-300/30 xl:bg-orange-300/30 2xl:bg-slate-300/30
export default function Index() {
  return (
    <div className="py-8 px-6 min-h-screen bg-gradient-to-tl from-backgroundLighter to-backgroundDarker ">
      <nav className="flex items-center justify-between">
        <Image src={'/logo.svg'} alt="logo" width={48} height={48} />
        <FiMenu color="white" size={32} />
      </nav>

      <main className="w-full px-6 py-16 space-y-6">
        <div className="relative max-w-[200px] m-auto w-full h-64 bg-text z-10">
          <span className="absolute -top-5 -left-5 z-0">
            <Image src={'/vec1.svg'} alt="decoration" width={64} height={64} />
          </span>
        </div>
        <p className="text-justify text-text">
          Olá, eu sou <span className="text-primary">Gabriel Espindola!</span> consectetur adipisicing elit.
          Debitis alias reiciendis beatae tempora ipsa. Animi nihil, minus ad sit harum placeat dolor hic
          repellendus doloribus ex. Debitis nostrum placeat optio.
        </p>
      </main>
    </div>
  )
}
