const categories: string[] = [
  'Black',
  'Espresso',
  'Cappucino',
  'Macchiato',
  'Latte',
  'Americano',
  'Ristretto',
  'Flat white',
  'Doppio',
];

const coffees = [
  {
    id: 1,
    title: 'Cappucino',
    ingredients: 'Chocolate',
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
    id: 2,
    title: 'Macchiato',
    ingredients: 'Oat Milk',
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
  {
    id: 3,
    title: 'Latte',
    ingredients: 'Chocolate',
    description:
      'A creamy espresso-based drink ingredients steamed milk, known for its smooth texture.',
    price: 4.53,
    image: {
      source:
        'https://images.unsplash.com/photo-1598971948291-38c380f80f85?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: '5HoKFYJ/uHZ7iHdmeoV4ecVqL3v2',
    },
    rating: 4.8,
    reviewsCount: 230,
  },
  {
    id: 4,
    title: 'Americano',
    ingredients: 'hot water',
    description:
      'An Americano is made by diluting espresso ingredients hot water, resulting in a similar strength to regular coffee but ingredients a distinct espresso flavor profile.',
    price: 4.53,
    image: {
      source:
        'https://images.unsplash.com/photo-1582252852999-5ca546037481?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbhash: '1zgKDYJ2d5aviHdmerhXakX/BXya',
    },
    rating: 4.9,
    reviewsCount: 230,
  },
  {
    id: 5,
    title: 'Cappucino',
    ingredients: 'foamed milk',
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
    id: 6,
    title: 'Machiato',
    ingredients: 'Oat Milk',
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

export { categories, coffees };
