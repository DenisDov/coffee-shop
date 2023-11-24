import { faker } from '@faker-js/faker';

export const SECTIONS = [
  {
    title: 'Burgers',
    data: Array(5)
      .fill(0)
      .map(_ => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      })),
  },
  {
    title: 'Pizza',
    data: Array(5)
      .fill(0)
      .map(_ => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      })),
  },
  {
    title: 'Sushi and rolls',
    data: Array(10)
      .fill(0)
      .map(_ => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      })),
  },
  {
    title: 'Salads',
    data: Array(10)
      .fill(0)
      .map(_ => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      })),
  },
  {
    title: 'Dessert',
    data: Array(10)
      .fill(0)
      .map(_ => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      })),
  },
];

export const COFFEES = [
  faker.commerce.department(),
  {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  },
  {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  },
  faker.commerce.department(),
  {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  },
  {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  },
];

export const coffee = () => [
  {
    name: 'Capuccino',
    list: [
      {
        name: 'cap1',
        desc: ' desc1',
        price: 4.53,
      },
      {
        name: 'cap2',
        desc: ' desc2',
        price: 3.9,
      },
    ],
  },
  {
    name: 'Machiato',
    list: [
      {
        name: 'cap1',
        desc: ' desc1',
        price: 4.53,
      },
      {
        name: 'cap2',
        desc: ' desc2',
        price: 3.9,
      },
    ],
  },
];
