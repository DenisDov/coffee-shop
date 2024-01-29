const categories: string[] = [
  'Black',
  'Espresso',
  'Cappuccino',
  'Macchiato',
  'Latte',
  'Americano',
  'Ristretto',
  'Flat white',
  'Doppio',
];

const coffees = [
  {
    id: '1',
    title: 'Cappuccino',
    extras: 'Chocolate',
    description:
      'The cappuccino, a classic Italian coffee, embodies a harmonious blend of espresso, steamed milk, and a luscious layer of milk foam. Originating in Italy, this beloved beverage has become a global favorite. With its precise ratio of one-third espresso, one-third steamed milk, and one-third foam, the cappuccino delivers a balanced, rich flavor profile. The robust espresso forms the foundation, offering a bold and intense kick, harmonized by the velvety smoothness of the steamed milk. Topped with a frothy crown of foam, each sip of cappuccino presents a delightful contrast of flavors and textures, inviting coffee enthusiasts into a realm of pure indulgence and comfort.',
    price: 4.49,
    image: {
      source:
        'https://images.unsplash.com/photo-1472973681244-f5bcc808ad47?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: '1zgKDYJ2d5aviHdmerhXakX/BXya',
    },
    rating: 4.8,
    reviewsCount: 230,
  },
  {
    id: '2',
    title: 'Macchiato',
    extras: 'Oat Milk',
    description:
      'An espresso-based drink ingredients a small amount of frothed milk, offering a bolder coffee flavor ingredients a touch of creaminess.',
    price: 5.29,
    image: {
      source:
        'https://images.unsplash.com/photo-1473923377535-0002805f57e8?q=80&w=3108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: 'kBgOHIIIl3h5iHdziogId4KBCA',
    },
    rating: 4.9,
    reviewsCount: 230,
  },
  {
    id: '3',
    title: 'Latte',
    extras: 'Chocolate',
    description:
      'A creamy espresso-based drink ingredients steamed milk, known for its smooth texture.',
    price: 5.39,
    image: {
      source:
        'https://images.unsplash.com/photo-1598971948291-38c380f80f85?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: '5HoKFYJ/uHZ7iHdmeoV4ecVqL3v2',
    },
    rating: 4.8,
    reviewsCount: 230,
  },
  {
    id: '4',
    title: 'Americano',
    extras: 'hot water',
    description:
      'An Americano is made by diluting espresso ingredients hot water, resulting in a similar strength to regular coffee but ingredients a distinct espresso flavor profile.',
    price: 4.99,
    image: {
      source:
        'https://images.unsplash.com/photo-1582252852999-5ca546037481?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: '1zgKDYJ2d5aviHdmerhXakX/BXya',
    },
    rating: 4.9,
    reviewsCount: 230,
  },
  {
    id: '5',
    title: 'Cappuccino',
    extras: 'foamed milk',
    description:
      'An espresso-based drink ingredients equal parts of espresso, steamed milk, and foamed milk, offering a balance of flavors and textures.',
    price: 4.53,
    image: {
      source:
        'https://images.unsplash.com/photo-1472973681244-f5bcc808ad47?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: '1zgKDYJ2d5aviHdmerhXakX/BXya',
    },
    rating: 4.8,
    reviewsCount: 230,
  },
  {
    id: '6',
    title: 'Machiato',
    extras: 'Oat Milk',
    description:
      'An espresso-based drink ingredients a small amount of frothed milk, offering a bolder coffee flavor ingredients a touch of creaminess.',
    price: 4.53,
    image: {
      source:
        'https://images.unsplash.com/photo-1473923377535-0002805f57e8?q=80&w=3108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: 'kBgOHIIIl3h5iHdziogId4KBCA',
    },
    rating: 4.9,
    reviewsCount: 230,
  },
];

const cart = [
  {
    id: 1,
    items: [
      {
        item_id: 101,
        name: 'Espresso',
        quantity: 2,
        size: 'Regular',
      },
      {
        item_id: 102,
        name: 'Cappuccino',
        quantity: 1,
        size: 'Large',
      },
    ],
    total_price: 9.5,
  },
  {
    id: 2,
    items: [
      {
        item_id: 103,
        name: 'Latte',
        quantity: 1,
        size: 'Regular',
      },
    ],
    total_price: 3.75,
  },
  {
    id: 3,
    customer_name: 'Alice Johnson',
    items: [
      {
        item_id: 104,
        name: 'Mocha',
        quantity: 1,
        size: 'Large',
      },
      {
        item_id: 105,
        name: 'Croissant',
        quantity: 2,
        size: 'Small',
      },
    ],
    total_price: 14.8,
  },
];

const notifications = [
  {
    content: '3x Espresso',
    id: '3',
    read: true,
    timestamp: '2023-12-04T15:30:00Z',
    title: 'Order #1236',
  },
  {
    content: '2x Latte, 1x Croissant',
    id: '1',
    read: false,
    timestamp: '2023-12-05T08:00:00Z',
    title: 'Order #1234',
  },
  {
    content: '1x Cappuccino, 1x Blueberry Muffin',
    id: '2',
    read: true,
    timestamp: '2023-12-06T10:00:00Z',
    title: 'Order #1235',
  },
  {
    content: '2x Americano, 2x Chocolate Croissant',
    id: '4',
    read: false,
    timestamp: '2023-12-07T09:45:00Z',
    title: 'Order #1237',
  },
  {
    content: '1x Macchiato, 1x Scone',
    id: '5',
    read: false,
    timestamp: '2023-12-08T11:20:00Z',
    title: 'Order #1238',
  },
  {
    content: '4x Flat White',
    id: '6',
    read: false,
    timestamp: '2023-12-09T07:55:00Z',
    title: 'Order #1239',
  },
  {
    content: '2x Mocha',
    id: '7',
    read: true,
    timestamp: '2023-12-10T14:00:00Z',
    title: 'Order #1240',
  },
  {
    content: '1x Espresso, 1x Danish Pastry',
    id: '8',
    read: false,
    timestamp: '2023-12-11T10:30:00Z',
    title: 'Order #1241',
  },
  {
    content: '3x Iced Coffee',
    id: '9',
    read: false,
    timestamp: '2023-12-12T08:45:00Z',
    title: 'Order #1242',
  },
  {
    content: '1x Pumpkin Spice Latte',
    id: '10',
    read: true,
    timestamp: '2023-12-13T16:20:00Z',
    title: 'Order #1243',
  },
];

export { cart, categories, coffees, notifications };
