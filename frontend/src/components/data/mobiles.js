// mobile.js
const mobiles = [
    {
      id: 1,
      brand: 'Samsung',
      model: 'Galaxy S21',
      price: 799.99,
      image: 'https://m.media-amazon.com/images/I/61qaUS3UgBL._AC_UF1000,1000_QL80_.jpg',
      link: 'http://localhost:3000/product/660c45758f5e02a69b2e625c',
    },
    {
      id: 2,
      brand: 'Apple',
      model: 'iPhone 12',
      price: 999.99,
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662425128/Croma%20Assets/Communication/Mobiles/Images/229921_thry6d.png?tr=w-600',
      link: 'http://localhost:3000/product/660c45758f5e02a69b2e625d',
    },
    {
      id: 3,
      brand: 'Google',
      model: 'Pixel 5',
      price: 699.99,
      image: 'https://s3b.cashify.in/gpro/uploads/2020/08/03072513/google-pixel-5-right-side.png',
      link: 'http://localhost:3000/product/660c45758f5e02a69b2e625e',
    },
    {
      id: 4,
      brand: 'OnePlus',
      model: '8 Pro',
      price: 899.99,
      image: 'https://d2xamzlzrdbdbn.cloudfront.net/products/b7391cea-65b1-4293-8aa6-107dc434c530.jpg',
      link: 'http://localhost:3000/product/660c45758f5e02a69b2e625f',
    },
    {
      id: 5,
      brand: 'Xiaomi',
      model: 'Mi 10',
      price: 649.99,
      image: 'https://www.gizmochina.com/wp-content/uploads/2020/01/Xiaomi-Mi-10-Pro-5G-1-500x500.jpg',
      link: 'http://localhost:3000/product/660c45758f5e02a69b2e6260',
    },
    // Add more mobile objects as needed
    {
      id: 6,
      category: 'keyboard',
      brand: 'Corsair',
      model: 'K95 RGB Platinum XT Mechanical Gaming Keyboard',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww',
      link: 'http://localhost:3000/product/660c45758f5e02a69b2e6263',
    },
    {
      id: 7,
      category: 'mouse',
      brand: 'Logitech',
      model: 'g-series gaming mouse',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdXNlfGVufDB8fDB8fHww',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e6258',
    },
    {
      id: 8,
      category: 'camera',
      brand: 'Sony',
      model: 'Alpha a7 III Mirrorless Camera',
      price: 1999.99,
      image: 'https://www.fotocircle.com/media/catalog/product/cache/1/thumbnail/500x500/9df78eab33525d08d6e5fb8d27136e95/1/5/1519828788000_img_950545.jpg',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e6264',
    },
    {
      id: 9,
      category: 'phone',
      brand: 'LG',
      model: 'V60 ThinQ',
      price: 899.99,
      image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-49227/LG-V60_ThinQ.jpg',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e6261',
    },
    // keyboard removed
    {
      id: 11,
      category: 'mouse',
      brand: 'Logitech',
      model: 'MX Master 3 Wireless Mouse',
      price: 99.99,
      image: 'https://m.media-amazon.com/images/I/613a-3jtieL.jpg',
      link:'',
    },
    {
      id: 12,
      category: 'camera',
      brand: 'Nikon',
      model: 'D7500 DSLR Camera',
      price: 1199.99,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/OK/RL/XN/42175339/nikon-d7500-dslr-camera-500x500.jpg',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e625b',
    },
    {
      id: 13,
      category: 'phone',
      brand: 'Motorola',
      model: 'Moto G Power',
      price: 249.99,
      image: 'https://m.media-amazon.com/images/I/71KdIQSeY+L.jpg',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e6265',
    },
    {
      id: 14,
      category: 'keyboard',
      brand: 'Ducky',
      model: 'One 2 Mini Mechanical Keyboard',
      price: 119.99,
      image: 'https://m.media-amazon.com/images/I/51ENJ0xHnOL._AC_UF1000,1000_QL80_.jpg',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e6266',
    },
    {
      id: 15,
      category: 'mouse',
      brand: 'Corsair',
      model: 'Dark Core RGB/SE Wired/Wireless Gaming Mouse',
      price: 89.99,
      image: 'https://m.media-amazon.com/images/I/61RdgVQ43TL._AC_UF1000,1000_QL80_.jpg',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e6268',
    },
    {
      id:16,
      category: 'phone',
      brand : 'apple', 
      model : 'iphone 13 pro',
      price : 900,
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009390/Croma%20Assets/Communication/Mobiles/Images/243537_0_parqxl.png?tr=w-600',
      link:'http://localhost:3000/product/660c45758f5e02a69b2e6262',
    },
  ];
  
  export default mobiles;
  