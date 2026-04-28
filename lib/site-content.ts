export type NewsEntry = {
  date: string;
  title: string;
  content: string;
  link: string;
  cta: string;
};

export type EventEntry = {
  title: string;
  description: string;
  link: string;
  cta: string;
  iconClass: string;
  featured?: boolean;
  badge?: string;
};

export type EventPageContent = {
  slug: 'dw' | 'szpilka' | 'sniadanie-na-wydziale' | 'kapuczino-z-alpaczino';
  pageTitle: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    previousEditions?: Array<{
      year: string;
      title?: string;
      excerpt?: string;
      link: string;
      images?: string[];
    }>;
  }>;
};
export const newsEntries: NewsEntry[] = [
  {
    date: '13.05.2026, 09:00',
    title: 'Dzień Wydziału 2026',
    content: 'Już wkrótce największe wydarzenie naszego wydziału. Zapisz datę i bądź z nami.',
    link: '/dw',
    cta: 'Przejdź do wydarzenia',
  },
  {
    date: 'Wydarzenie cykliczne',
    title: 'Szpilka',
    content: 'Wyjątkowe wydarzenie pełne atrakcji, dobrej energii i integracji studentów.',
    link: '/szpilka',
    cta: 'Zobacz wydarzenie',
  },
  {
    date: 'Wydarzenie studenckie',
    title: 'Śniadanie na Wydziale',
    content: 'Poranne spotkanie przy kawie i jedzeniu - idealne na integrację i dobry start dnia.',
    link: '/sniadanie-na-wydziale',
    cta: 'Sprawdź szczegóły',
  },
  {
    date: 'Wydarzenie chillout',
    title: 'Kapuczino z Alpaczino',
    content: 'Luźna atmosfera, rozmowy i kawa - odpoczynek między zajęciami ze studentami.',
    link: '/kapuczino-z-alpaczino',
    cta: 'Poznaj wydarzenie',
  },
];

export const eventEntries: EventEntry[] = [
  {
    title: 'Dzień Wydziału OIZ',
    description: 'Największe coroczne wydarzenie wydziału łączące naukę, zabawę i networking.',
    link: '/dw',
    cta: 'Zobacz szczegóły',
    iconClass: 'fas fa-calendar-day',
    featured: true,
    badge: 'Najpopularniejsze',
  },
  {
    title: 'Śniadanie na Wydziale',
    description: 'Poranne spotkania przy kawie i pysznych przekąskach. Idealny sposób na rozpoczęcie dnia i poznanie nowych osób.',
    link: '/sniadanie-na-wydziale',
    cta: 'Zobacz szczegóły',
    iconClass: 'fas fa-coffee',
  },
  {
    title: 'Kapuczino z Alpaczino',
    description: 'Relaksujące spotkania ze studentami przy doskonałej kawie i inspirujących rozmowach.',
    link: '/kapuczino-z-alpaczino',
    cta: 'Odkryj więcej',
    iconClass: 'fas fa-mug-hot',
  },
  {
    title: 'Szpilka',
    description: 'Wyjątkowe wydarzenie pełne niespodzianek i atrakcji dla wszystkich studentów.',
    link: '/szpilka',
    cta: 'Dowiedz się więcej',
    iconClass: 'fas fa-star',
  },
];

export const eventPages: EventPageContent[] = [
  {
    slug: 'dw',
    pageTitle: 'Dzień Wydziału',
    intro: 'Największe coroczne wydarzenie wydziału łączące naukę, zabawę i networking.',

    sections: [
      {
        heading: 'O wydarzeniu',
        paragraphs: [
          'Dzień Wydziału to dzień pełen atrakcji, konkursów, występów i integracji. To wyjątkowa okazja, aby spotkać się z przedstawicielami firm, poznać inicjatywy studenckie, znaleźć oferty praktyk i staży oraz wziąć udział w licznych aktywnościach. Sparktakiada, strefa chillout, konkursy z nagrodami, występy artystyczne i wiele innych atrakcji czeka na Ciebie podczas tego wyjątkowego dnia. To także świetna okazja, aby poznać nowych ludzi, dobrze się bawić i stworzyć niezapomniane wspomnienia związane z życiem studenckim.',
        ],
      },

      {
        heading: 'Spartakiada',
        paragraphs: ['Spartakiada to sportowo-integracyjne wydarzenie, podczas którego kilkuosobowe drużyny rywalizują w różnych konkurencjach i wyzwaniach. Łączy elementy zabawy, współpracy i zdrowej rywalizacji.Uczestnicy zdobywają punkty za wykonane zadania, a najlepsze zespoły są nagradzane. Głównym celem Spartakiady jest integracja, aktywność fizyczna oraz wspólne spędzenie czasu w luźnej, przyjaznej atmosferze.'],


      },

      {
        heading: 'Poprzednie edycje',
        paragraphs: ['Poniżej znajdziesz wybrane zdjęcia z poprzednich edycji.'],
        previousEditions: [
          {
            year: '2025',
            title: 'Dzień Wydziału 2025',
            excerpt: 'Zbiór zdjęć - wspomnienia z kolejnej edycji.',
            link: '/dw/2025',
            images: [
              '/images/dw/2025/dw2024_9.jpeg',
              '/images/dw/2025/dw2024_10.jpeg',
            ],
          },
          {
            year: '2024',
            title: 'Dzień Wydziału 2024',
            excerpt: 'Galeria - luźne migawki z wydarzenia.',
            link: '/dw/2024',
            images: [
                '/images/dw/2024/dw_1.jpg',
                '/images/dw/2024/dw_2.jpg',
                '/images/dw/2024/dw_3.jpg',
                '/images/dw/2024/dw_4.jpg',
                '/images/dw/2024/dw_5.jpg',
                '/images/dw/2024/dw_6.jpg',
                '/images/dw/2024/dw_7.jpg',
                '/images/dw/2024/dw_8.jpg',
              ],
          },
         
 {
            year: '2023',
            title: 'Dzień Wydziału 2023',
            excerpt: 'Kilka luźnych zdjęć z Dnia Wydziału.',
            link: '/dw/2023',
            images: [
              '/images/dw/2023/474511727_588121090857749_2369821250899371400_n.jpg',
              '/images/dw/2023/474541070_588121250857733_7408037255911260225_n.jpg',
              '/images/dw/2023/474738450_588122157524309_8364148051495670020_n.jpg',
              '/images/dw/2023/474749532_588122184190973_4103577009106052484_n.jpg',
              '/images/dw/2023/474929062_588122387524286_1353919832920014125_n.jpg',
              '/images/dw/2023/474955494_588122280857630_276942340735546303_n.jpg',
              '/images/dw/2023/475008972_588122307524294_1027551620569682457_n.jpg',
              '/images/dw/2023/475104615_588122254190966_1287159854546405712_n.jpg',
              '/images/dw/2023/475164776_588122044190987_1554643396302242346_n.jpg',
            ],
          },

        ],
      },
    ]
  },
  {
    slug: 'szpilka',
    pageTitle: 'Szpilka',
    intro: 'Szpilka to jedyne takie wydarzenie integracyjne na naszym wydziale, które łączy w sobie dobrą zabawę, konkursy i szkolenia. To świetna okazja, aby poznać nowych ludzi, zdobyć ciekawe nagrody i spędzić czas w wyjątkowej atmosferze.',
    sections: [
      {
        heading: 'O wydarzeniu',
        paragraphs: [
          'Szpilka to wyjazd integracyjny idealny dla studentów pierwszego roku - okazja, by poznać osoby, z którymi będziesz studiować, złapać klimat życia studenckiego i dobrze się bawić.',
          'Podczas wyjazdu czekają na uczestników: mnóstwo nowych znajomości, luźna atmosfera bez stresu, praktyczne wskazówki ułatwiające start w pierwszym semestrze oraz szkolenia przydatne w życiu uczelnianym. Najważniejsze jest dobre towarzystwo i dużo wspólnej zabawy.',
          'Dodatkowo przygotowaliśmy atrakcje w formie drużynowych wyzwań - elementy detektywistycznej rozgrywki oraz przygodę w klimacie Forest Escape, które integrują zespoły i dostarczają emocji. Wieczorami odbywają się gry i spotkania, które zbliżają uczestników i tworzą niezapomniane wspomnienia.',
        ],
      },
      {
        heading: 'Galeria',
        paragraphs: [],
        previousEditions: [
          {
            year: '2025',
            title: 'Szpilka 2025',
            excerpt: 'Najlepsze momenty z Szpilki 2025.',
            link: '/szpilka/2025',
            images: [
              '/images/Szpilka/IMG_7999.JPG',
              '/images/Szpilka/IMG_8054.JPG',
              '/images/Szpilka/IMG_8142.JPG',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'sniadanie-na-wydziale',
    pageTitle: 'Śniadanie na Wydziale',
    intro: 'Śniadanie na Wydziale to jedno z naszych ulubionych wydarzeń integracyjnych.',
    sections: [
      {
        heading: 'O wydarzeniu',
        paragraphs: [
          'To doskonała okazja, aby zacząć dzień pełen energii w towarzystwie kolegów i koleżanek z wydziału. Zadbamy o pyszne śniadanie i miłą atmosferę.',
        ],
      },
      {
        heading: 'Dlaczego warto przyjść?',
        bullets: [
          'Pyszne jedzenie i dobra kawa',
          'Spotkanie z innymi studentami',
          'Dobra zabawa i rozmowy',
          'Miły początek dnia',
        ],
        
        previousEditions: [
          {
            year: '2023',
            title: 'Śniadanie na Wydziale 2023',
            excerpt: 'Wydarzenie integracyjne z pysznym śniadaniem i kawą.',
            link: '/sniadanie-na-wydziale/2023',
            images: [
              '/images/snw/2023/472224700_575286872141171_7784142077633419231_n.jpg',
              '/images/snw/2023/472356869_575287215474470_977607680491858157_n.jpg',
              '/images/snw/2023/472374901_575287105474481_9107689488316216752_n.jpg',
              '/images/snw/2023/472392779_575286885474503_7888877027595838914_n.jpg',
              '/images/snw/2023/472760449_575287245474467_8047277912992516170_n.jpg',
            ],
          },
          {
            year: '2025',
            title: 'Śniadanie na Wydziale 2025',
            excerpt: 'Kolejna edycja spotkań przy wspólnym stole i dobrej atmosferze.',
            link: '/sniadanie-na-wydziale/2025',
            images: [
              '/images/snw/2025/20250416_100114.jpg',
              '/images/snw/2025/20250416_100128.jpg',
              '/images/snw/2025/20250416_100205.jpg',
              '/images/snw/2025/20250416_100220.jpg',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'kapuczino-z-alpaczino',
    pageTitle: 'Kapuczino z Alpaczino',
    intro: 'Kapuczino z Alpaczino to wyjątkowe wydarzenie, które łączy dobrą kawę i luźną atmosferę.',
    sections: [
      {
        heading: 'O wydarzeniu',
        paragraphs: ['To unikatowe doświadczenie, które co roku wygląda inaczej. Kawa, herbata, słodkości i inspirujące rozmowy - to wszystko i nie tylko to czeka na Ciebie podczas Kapuczino z Alpaczino.'],
      },
      {
        heading: 'Jak to wyglądało wcześniej?',
        previousEditions: [
          {
            year: '2024',
            title: 'Kapuczino z Alpaczino 2024',
            excerpt: 'Galeria z edycji 2024 - zobacz zdjęcia z wydarzenia.',
            link: '/kapuczino-z-alpaczino/2024',
            images: [
              '/images/kza/2024/DSC_1512_DxO.jpg',
              '/images/kza/2024/DSC_1538_DxO.jpg',
              '/images/kza/2024/DSC_1562_DxO.jpg',
              '/images/kza/2024/DSC_1585_DxO.jpg',
              '/images/kza/2024/DSC_1642_DxO.jpg',
              '/images/kza/2024/DSC_1697_DxO.jpg',
            ],
          },
          {
            year: '2025',
            title: 'Kapuczino z Alpaczino 2025',
            excerpt: 'Kolejna seria wydarzeń z pyszną kawą i dobrą atmosferą.',
            link: '/kapuczino-z-alpaczino/2025',
            images: [
              '/images/kza/2025/IMG_4058.jpg',
              '/images/kza/2025/IMG_4060.jpg',
              '/images/kza/2025/IMG_4065.jpg',
              '/images/kza/2025/IMG_4071.jpg',
              '/images/kza/2025/IMG_4249.JPG',
              '/images/kza/2025/P1062637.jpg',
            ],
          },
        ],
      },
    ],
  },
];

export function getEventPageContent(slug: EventPageContent['slug']): EventPageContent {
  const item = eventPages.find((entry) => entry.slug === slug);
  if (!item) {
    throw new Error(`Missing event content for slug: ${slug}`);
  }
  return item;
}
export function getEditionImages(slug: EventPageContent['slug'], year: string): string[] {
  const page = eventPages.find((p) => p.slug === slug);
  if (!page) return [];
  for (const sec of page.sections) {
    if (!sec.previousEditions) continue;
    const found = sec.previousEditions.find((e) => e.year === year);
    if (found?.images && found.images.length) return found.images;
  }
  return [];
}
export function getLatestEditionLink(slug: EventPageContent['slug']): string {
  const page = eventPages.find((p) => p.slug === slug);
  if (!page) return `/${slug}`;
  let latest: { year: string; link: string } | null = null;
  for (const sec of page.sections) {
    if (!sec.previousEditions) continue;
    for (const ed of sec.previousEditions) {
      if (!latest || Number(ed.year) > Number(latest.year)) latest = { year: ed.year, link: ed.link };
    }
  }
  return latest?.link ?? `/${slug}`;
}
