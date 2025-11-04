import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Servizi',
    links: [
      { title: 'Impianti Termici', href: '/work/family-fund' },
      { title: 'Impianti Industriali', href: '/work/unseal' },
      { title: 'Impianti Ospedalieri', href: '/work/phobia' },
      {
        title: (
          <>
            Vedi tutti <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Azienda',
    links: [
      { title: 'Chi Siamo', href: '/about' },
      { title: 'Come Lavoriamo', href: '/process' },
      { title: 'News', href: '/blog' },
      { title: 'Contatti', href: '/contact' },
    ],
  },
  {
    title: 'Seguici',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Iscriviti alla newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Ricevi aggiornamenti su normative, tecnologie e novità del settore
        impiantistico direttamente nella tua casella email.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Indirizzo email"
          autoComplete="email"
          aria-label="Indirizzo email"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-ddblue-500 focus:ring-ddblue-500/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Invia"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-ddblue-500 text-white transition hover:bg-ddblue-600"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-ddblue-500/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © DD Service {new Date().getFullYear()} - P.IVA: [Da inserire]
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
