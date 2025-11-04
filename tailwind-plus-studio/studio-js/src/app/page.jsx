import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-ddblue-500 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            La fiducia dei nostri clienti è il nostro successo
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="I nostri progetti realizzati"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ogni impianto è un progetto unico. Ci impegniamo a fornire soluzioni
          su misura che garantiscono efficienza, sicurezza e durata nel tempo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Progetto</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="I nostri servizi"
        title="Soluzioni complete per ogni tipo di impianto"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Dalla progettazione alla manutenzione, offriamo un servizio a 360 gradi
          per impianti termici, industriali e ospedalieri. Esperienza e tecnologia
          al servizio delle tue esigenze.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Impianti Termici">
              Installazione, manutenzione e riparazione di caldaie, sistemi di
              riscaldamento, pompe di calore e impianti di climatizzazione.
              Interventi rapidi e certificati.
            </ListItem>
            <ListItem title="Impianti Industriali">
              Progettazione e manutenzione di impianti per il settore industriale.
              Montaggio e smontaggio di macchinari complessi con personale
              specializzato e attrezzature all&apos;avanguardia.
            </ListItem>
            <ListItem title="Impianti Ospedalieri">
              Servizi dedicati al settore sanitario con particolare attenzione
              alle normative vigenti. Manutenzione programmata e interventi
              d&apos;urgenza per garantire continuità operativa.
            </ListItem>
            <ListItem title="Manutenzione Programmata">
              Contratti di manutenzione personalizzati per prevenire guasti e
              ottimizzare l&apos;efficienza energetica. Assistenza continua e
              reportistica dettagliata degli interventi.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'DD Service - Specialisti in manutenzione, montaggio e smontaggio di impianti termici, industriali e ospedalieri. Esperienza, professionalità e innovazione dal 2019.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Esperti in manutenzione impianti termici, industriali e ospedalieri
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            DD Service offre soluzioni complete per la manutenzione, il montaggio e lo smontaggio
            di impianti di ogni tipo. Operiamo con professionalità e precisione dal 2019,
            garantendo efficienza e affidabilità in ogni intervento.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Cliente Soddisfatto', logo: logoPhobiaDark }}
      >
        DD Service ha dimostrato grande professionalità nell&apos;installazione del nostro
        impianto termico. Intervento rapido, personale qualificato e assistenza
        post-vendita eccellente. Consigliati!
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
