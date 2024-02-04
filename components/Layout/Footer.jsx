import Link from 'next/link'
import Container from './Container'
import Highlight from '../Utils/Highlight'
import { BLOG_NAME } from '../../lib/constants'

const navigation = {
  main: [
    { name: 'Blog', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [

    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joeehoover/',
      icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
              <path
                  d="M22.225 0H1.77C.79 0 0 .774 0 1.729V22.27C0 23.227.792 24 1.77 24H22.228c.98 0 1.772-.774 1.772-1.729V1.73C24 .774 23.205 0 22.225 0zM7.356 20.667H3.89V9h3.466v11.667zM5.621 7.73a2.07 2.07 0 01-2.067-2.078 2.07 2.07 0 012.067-2.08 2.072 2.072 0 012.07 2.08 2.07 2.07 0 01-2.07 2.078zm15.046 12.938h-3.467v-5.862c0-1.378-.025-3.154-2-3.154-2.003 0-2.305 1.502-2.305 3.056v5.96H9.524s.046-9.662 0-10.667h3.466v1.514l-.025.037h.025v-.037c.456-.7 1.576-1.717 3.243-1.717 3.554 0 4.2 2.328 4.2 5.356v6.524z"
              />
          </svg>
      ),
  },
  
    {
      name: 'Twitter',
      href: 'https://twitter.com/JoeEHoover',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/joehoover',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=7PA-mHAAAAAJ&hl=en',
      icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 512 512" {...props}>
              <path
                  fillRule="evenodd"
                  d="M213 111l-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0V160c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"
                  clipRule="evenodd"
              />
          </svg>
      ),
  }
  ],
}
export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 dark:bg-black dark:text-white dark:border-black h-full pb-10">
      <Container>
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item, index) => (
              <div key={index} className="px-5 py-2">
                <Link
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-200">

                  {item.name}

                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400 cursor-default">
            &copy; {new Date().getFullYear()} <Highlight>{BLOG_NAME}</Highlight>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
