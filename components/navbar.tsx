import Link from 'next/link';

import { Menu, Spade } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';

export const Navbar = () => {
  return (
    <nav className="px-4 py-6 flex sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <div className="flex items-center gap-4">
        <Spade />
        {/* TODO: Add underline vector drawing animation */}
        <h1 className="font-mono hidden sm:block">gabrielluizep.dev</h1>
      </div>

      <Button variant="ghost" size="icon" className="ml-auto md:hidden">
        {/* TODO: Add mobile drawer */}
        <Menu />
      </Button>

      <ul className="hidden md:flex items-center gap-4 ml-auto">
        <li>
          <Link href="/">
            <Button variant="link">Home</Button>
          </Link>
        </li>

        <li>
          <Link href="/projects">
            <Button variant="link">Projects</Button>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <Button variant="link">Blog</Button>
          </Link>
        </li>

        <li>
          <Link href="/#contact">
            <Button variant="link">Contact</Button>
          </Link>
        </li>
      </ul>

      {/* TODO: Add theme toggle */}
      <ModeToggle />
    </nav>
  );
};
