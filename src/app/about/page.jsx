import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-ddblue-500 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="I nostri valori"
        title="Qualità, affidabilità e innovazione"
        invert
      >
        <p>
          Ogni progetto è guidato da valori solidi che ci distinguono nel settore
          della manutenzione impianti.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Professionalità" invert>
            Personale qualificato e certificato, sempre aggiornato sulle ultime
            normative e tecnologie del settore. Ogni intervento è eseguito con
            la massima competenza.
          </GridListItem>
          <GridListItem title="Affidabilità" invert>
            Rispettiamo tempi e impegni presi. La vostra fiducia è il nostro
            patrimonio più prezioso, costruito giorno dopo giorno con serietà
            e dedizione.
          </GridListItem>
          <GridListItem title="Innovazione" invert>
            Utilizziamo tecnologie all&apos;avanguardia e metodologie moderne per
            garantire efficienza energetica e prestazioni ottimali degli impianti.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Diego D\'Avino',
        role: 'Fondatore e Titolare',
        image: { src: imageLeslieAlexander },
      },
    ],
  },
  {
    title: 'Team Tecnico',
    people: [
      {
        name: 'Tecnico Specializzato',
        role: 'Impianti Termici',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Tecnico Specializzato',
        role: 'Impianti Industriali',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Tecnico Specializzato',
        role: 'Manutenzione Programmata',
        image: { src: imageDriesVincent },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'Chi Siamo',
  description:
    'DD Service: passione, competenza e innovazione nella manutenzione impianti. Scopri la nostra storia e il team guidato da Diego D\'Avino.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="Chi siamo" title="Passione e professionalità dal 2019">
        <p>
          DD Service nasce dalla visione di un giovane professionista che ha fatto
          della manutenzione impianti la sua missione: offrire servizi di qualità
          con un approccio moderno e orientato al cliente.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Fondata nel 2019, DD Service è guidata da Diego D&apos;Avino, classe 2000,
            un professionista giovane e dinamico che ha trasformato la sua passione
            per gli impianti in un&apos;azienda solida e affidabile. Con una formazione
            continua e un costante aggiornamento sulle ultime tecnologie del settore,
            Diego porta innovazione e freschezza in un campo tradizionale.
          </p>
          <p>
            Ogni giorno ci impegniamo a garantire efficienza, sicurezza e qualità
            in ogni intervento. La nostra esperienza spazia dagli impianti termici
            residenziali alle complesse installazioni industriali e ospedaliere,
            con un unico obiettivo: la totale soddisfazione del cliente.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="6+" label="Anni di esperienza" />
          <StatListItem value="100%" label="Clienti soddisfatti" />
          <StatListItem value="24/7" label="Assistenza disponibile" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="News e aggiornamenti"
        intro="Resta aggiornato sulle ultime novità del settore, normative e tecnologie per la manutenzione e l'efficienza energetica degli impianti."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
