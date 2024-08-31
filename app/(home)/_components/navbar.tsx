'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  {
    text: 'Features',
    href: '#',
  },
  {
    text: 'How it works?',
    href: '#',
  },
  {
    text: 'Testimonials',
    href: '#',
  },
  {
    text: 'Pricing',
    href: '#',
  },
  {
    text: 'FAQs',
    href: '#',
  },
  {
    text: 'Help',
    href: '#',
  },
];

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuActive ? 'hidden' : 'auto';
  }, [isMenuActive]);

  return (
    <header className="bg-white sticky inset-x-0 top-0 z-[100] shadow-sm">
      <div className="h-16 flex gap-4 items-center justify-between max-w-screen-xl mx-auto px-3 lg:px-16">
        <Link href="#">
          <Image
            alt="Company logo"
            src="./logoipsum.svg"
            height={140}
            width={28}
            className="w-full max-w-[140px] object-cover"
          />
        </Link>
        <nav
          className={cn(
            'fixed max-h-0 hidden opacity-0 border-t z-20 top-16 left-0 right-0 px-4 py-6 w-full bg-white shadow-lg duration-300 origin-top transition-all lg:block lg:static lg:max-h-full lg:opacity-100 lg:px-0 lg:py-0 lg:shadow-none lg:border-t-0 lg:w-auto',
            isMenuActive && 'block max-h-screen bottom-0 opacity-100'
          )}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-1 divide-y lg:divide-y-0">
            {navLinks.map((link, index) => (
              <NavListItem text={link.text} href={link.href} key={index} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'rounded-full px-6 h-9'
            )}
          >
            Sign Up
          </Link>
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 lg:hidden"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            {isMenuActive ? (
              <XIcon className="w-5 h-5 text-muted-foreground" />
            ) : (
              <MenuIcon className="w-5 h-5 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const NavListItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="block w-full py-3 lg:px-3 lg:py-1.5 lg:rounded-sm text-lg lg:text-sm lg:text-muted-foreground font-medium lg:hover:bg-muted lg:hover:text-primary lg:hover:font-medium"
      >
        {text}
      </Link>
    </li>
  );
};
