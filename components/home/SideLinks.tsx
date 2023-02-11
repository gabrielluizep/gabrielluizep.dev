import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function SideLinks() {
  return (
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
}
