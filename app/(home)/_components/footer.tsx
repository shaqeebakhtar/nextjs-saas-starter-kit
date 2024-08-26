import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary w-full">
      <div className="max-w-screen-xl mx-auto py-10 pb-8 px-3 lg:pt-20 lg:pb-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="space-y-6 col-span-2">
            <Image
              alt="Company logo"
              src="./logoipsum.svg"
              height={140}
              width={28}
              className="w-full max-w-[140px] object-cover"
            />
            <p className="max-w-xs text-sm text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
              iure.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="group border border-gray-400 p-2 rounded-full transition-all hover:bg-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="w-4 h-4 text-gray-400 transition-all group-hover:text-primary" />
              </Link>
              <Link
                href="#"
                className="group border border-gray-400 p-2 rounded-full transition-all hover:bg-gray-200"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon className="w-4 h-4 text-gray-400 transition-all group-hover:text-primary" />
              </Link>
              <Link
                href="#"
                className="group border border-gray-400 p-2 rounded-full transition-all hover:bg-gray-200"
              >
                <span className="sr-only">GitHub</span>
                <LinkedinIcon className="w-4 h-4 text-gray-400 transition-all group-hover:text-primary" />
              </Link>
              <Link
                href="#"
                className="group border border-gray-400 p-2 rounded-full transition-all hover:bg-gray-200"
              >
                <span className="sr-only">GitHub</span>
                <YoutubeIcon className="w-4 h-4 text-gray-400 transition-all group-hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <h3 className="text-sm font-title font-medium text-zinc-100">
              Features
            </h3>
            <ul role="list" className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 lg:mt-0">
            <h3 className="text-sm font-title font-medium text-zinc-100">
              Resources
            </h3>
            <ul role="list" className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0">
            <h3 className="text-sm font-title font-medium text-zinc-100">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0">
            <h3 className="text-sm font-title font-medium text-zinc-100">
              Others
            </h3>
            <ul role="list" className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-all hover:text-white hover:underline underline-offset-2"
                >
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-t-gray-500/20 my-6" />
        <p className="text-xs text-muted-foreground">© 2024 Acme Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
