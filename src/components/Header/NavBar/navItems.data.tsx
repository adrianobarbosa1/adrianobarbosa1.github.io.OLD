export default interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  path?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    path: "home",
  },
  {
    label: "Sobre",
    path: "sobre",
  },
  {
    label: "Serviços",
    path: "servicos",
  },
  {
    label: "Portfólio",
    path: "portfolio",
  },
  {
    label: "Contato",
    path: "contato",
  },
  // {
  //   label: 'Inspiration',
  //   children: [
  //     {
  //       label: 'Explore Design Work',
  //       subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'New & Noteworthy',
  //       subLabel: 'Up-and-coming Designers',
  //       href: '#',
  //     },
  //   ],
  // },
];