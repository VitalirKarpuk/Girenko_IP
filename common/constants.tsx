export const menuList = [
  {
    id: '1',
    title: 'Розы',
    url: 'roses',
  },
  {
    id: '2',
    title: 'Букеты',
    url: 'linens',
    open: false,
    submenu: {
      id: '2',
      title: ['Букеты с гвоздиками', 'ЗимБукеты с гортензией', 'Букеты с гладиолусами'],
      url: ['all', 'winter', 'demi-season'],
    },
  },
  {
    id: '3',
    title: 'Композиция',
    url: 'pillow',
  },
  {
    id: '4',
    title: 'Авторские букеты',
    url: 'mattress_covers',
  },
  {
    id: '5',
    title: 'Тюльпаны',
    url: 'plaid',
  },
  {
    id: '6',
    title: 'Цветы единично',
    url: 'towel',
  },
  // {
  //     id: '7',
  //     title: 'Постельные пренодлежности',
  //     open: false,
  //     submenu: {
  //         id: '7',
  //         title: ['Все', '200 X 250', 'Двучспальное'],
  //         url: ['all', 'size', 'double'],
  //     },
  // },
];
