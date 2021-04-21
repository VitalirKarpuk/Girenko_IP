export const menuList = [
  {
    id: '1',
    title: 'Постельное белье',
  },
  {
    id: '2',
    title: 'Одеяло',
    url: 'linens',
    open: false,
    submenu: {
      id: '2',
      title: ['Все', 'Зимнее', 'Демисезонное'],
      url: ['all', 'winter', 'demi-season'],
    },
  },
  {
    id: '3',
    title: 'Подушки',
    url: 'pillow',
  },
  {
    id: '4',
    title: 'Наматрасники',
    url: 'mattress_covers',
  },
  {
    id: '5',
    title: 'Плед',
    url: 'plaid',
  },
  {
    id: '6',
    title: 'Полотенце',
    url: 'towel',
  },
  {
    id: '7',
    title: 'Постельные пренодлежности',
    open: false,
    submenu: {
      id: '7',
      title: ['Все', '200 X 250', 'Двучспальное'],
      url: ['all', 'size', 'double'],
    },
  },
];
