import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function SideLinks() {
  return (
    <div className="lg:right:32 fixed right-16 bottom-0 hidden h-32 w-[1px] bg-text sm:block md:right-24">
      <div className="absolute -top-full -translate-x-1/2 space-y-5">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/gabrielluizep"
          className="hidden cursor-pointer text-white shadow-2xl hover:text-primary sm:block"
        >
          <FiGithub color="inherit" size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/gabrielluizep"
          className="hidden cursor-pointer text-white shadow-2xl hover:text-primary sm:block"
        >
          <FiTwitter color="inherit" size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/gabrielluizep"
          className="hidden cursor-pointer text-white shadow-2xl hover:text-primary sm:block"
        >
          <FiLinkedin color="inherit" size={24} />
        </a>
      </div>
    </div>
  )
}
