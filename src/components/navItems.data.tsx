export default interface NavItem {
  id: number
  label: string
  subLabel?: string
  children?: Array<NavItem>
  path?: any
  href?: string
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    id: 1,
    label: "Inicio",
    path: "/#home",
  },
  {
    id: 2,
    label: "Sobre",
    path: "/#sobre",
  },
  {
    id: 3,
    label: "Serviços",
    path: "/#servicos",
  },
  {
    id: 4,
    label: "Portfólio",
    path: "/#portfolio",
  },
  {
    id: 5,
    label: "Contato",
    path: "/#contato",
  },
]
