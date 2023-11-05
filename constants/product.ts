const PRODUCT_PRICE_SORT = [
  { value: 'alphabetical', label: 'Alphabetical' },
  { value: 'highToLow', label: 'Price - High to low' },
  { value: 'lowToHigh', label: 'Price - Low to high' },
];

const PRODUCT_TYPE_FILTER = [
  { key: '1', label: 'Typescript' },
  { key: '2', label: 'Redis' },
  { key: '3', label: 'NetCore' },
  { key: '4', label: 'React' },
  { key: '5', label: 'Vs Code' },
  { key: '6', label: 'Angular' },
];

const PRODUCT_SIZE = [
  { key: 'sm', label: 'Sm' },
  { key: 'm', label: 'M' },
  { key: 'l', label: 'L' },
  { key: 'xl', label: 'XL' },
];

const PRODUCT_COLOR = [
  { key: 'white', label: 'White' },
  { key: 'black', label: 'Black' },
];

const HIGHLIGHTS_PRODUCT = [
  {
    key: '1',
    imageSrc: '/images/latest/banner1.webp',
    productName: 'T-Shirt North America',
    productPrice: '350',
  },
  {
    key: '2',
    imageSrc: '/images/latest/banner2.webp',
    productName: 'Hoodie Black',
    productPrice: '500',
  },
  {
    key: '3',
    imageSrc: '/images/latest/banner3.jpg',
    productName: 'Handy Bag',
    productPrice: '799',
  },
  {
    key: '4',
    imageSrc: '/images/latest/banner3.jpg',
    productName: 'Handy Bag',
    productPrice: '799',
  },
  {
    key: '5',
    imageSrc: '/images/latest/banner3.jpg',
    productName: 'Handy Bag',
    productPrice: '799',
  },
];

export {
  PRODUCT_PRICE_SORT,
  PRODUCT_TYPE_FILTER,
  HIGHLIGHTS_PRODUCT,
  PRODUCT_SIZE,
  PRODUCT_COLOR,
};
