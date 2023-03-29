const catagorys=[
    {
      name:'Electronics',
      list:['Bluetooth Speaker', 'Headphones & Earphones', '3D Printers & Accessories', 'Video Games Accessories']
    },
    {
      name:'Sports & Outdoors',
      list:['E-Bikes', 'Scooters & Wheels', 'Fitness & Body Building']
    },
    {
      name:'TV Boxes & Mini PCs',
      list:['TV Boxes', 'Windows Mini PCs']
    },
    {
      name:'Computers, Tablets & Accessories',
      list:['Laptops', 'Gaming Laptops', 'Keyboard & Mouse']
    },
  ]

  const Brands=[
    {
      "brand": "QIDI",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "One Netbook",
      "category": "Gaming Laptops"
    },
    {
      "brand": "Shengmilo",
      "category": "E-Bikes"
    },
    {
      "brand": "ENGWE",
      "category": "E-Bikes"
    },
    {
      "brand": "GPD",
      "category": "Laptops"
    },
    {
      "brand": "FIIDO",
      "category": "E-Bikes"
    },
    {
      "brand": "Mijia",
      "category": "apponly"
    },
    {
      "brand": "Eleglide",
      "category": "E-Bikes"
    },
    {
      "brand": "KugooKirin",
      "category": "Scooters & Wheels"
    },
    {
      "brand": "FAFREES",
      "category": "E-Bikes"
    },
    {
      "brand": "AllMain",
      "category": "newarrival"
    },
    {
      "brand": "ALLDOCUBE",
      "category": "Laptops"
    },
    {
      "brand": "SAMEBIKE",
      "category": "Coupon"
    },
    {
      "brand": "FLASHFORGE",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "DYU",
      "category": "E-Bikes"
    },
    {
      "brand": "MINISFORUM",
      "category": "Windows Mini PCs"
    },
    {
      "brand": "Creality",
      "category": "newarrival"
    },
    {
      "brand": "Mingda",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "WalkingPad",
      "category": "Coupon"
    },
    {
      "brand": "SYL",
      "category": "Scooters & Wheels"
    },
    {
      "brand": "Merax",
      "category": "Fitness & Body Building"
    },
    {
      "brand": "GMK",
      "category": "Windows Mini PCs"
    },
    {
      "brand": "Flsun",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "KUU",
      "category": "Windows Mini PCs"
    },
    {
      "brand": "HAPPYRUN",
      "category": "Coupon"
    },
    {
      "brand": "ZLL",
      "category": "deals"
    },
    {
      "brand": "BMAX",
      "category": "Windows Mini PCs"
    },
    {
      "brand": "SJRC",
      "category": "Coupon"
    },
    {
      "brand": "JOYOR",
      "category": "Scooters & Wheels"
    },
    {
      "brand": "Longer",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "Artillery",
      "category": "apponly"
    },
    {
      "brand": "KTC",
      "category": "Video Games Accessories"
    },
    {
      "brand": "ACGAM",
      "category": "Video Games Accessories"
    },
    {
      "brand": "JJRC",
      "category": "deals"
    },
    {
      "brand": "KINGROON",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "Wltoys",
      "category": "deals"
    },
    {
      "brand": "TRONXY",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "AOSIMAN",
      "category": "newarrival"
    },
    {
      "brand": "ANBERNIC",
      "category": "Video Games Accessories"
    },
    {
      "brand": "Mifo",
      "category": "Headphones & Earphones"
    },
    {
      "brand": "Logitech",
      "category": "apponly"
    },
    {
      "brand": "ORTUR",
      "category": "special_clearance_sale"
    },
    {
      "brand": "JIMMY",
      "category": "special_clearance_sale"
    },
    {
      "brand": "Tronsmart",
      "category": "special_clearance_sale"
    },
    {
      "brand": "Flytec",
      "category": "deals"
    },
    {
      "brand": "Gamesir",
      "category": "Keyboard & Mouse"
    },
    {
      "brand": "Mecool",
      "category": "TV Boxes"
    },
    {
      "brand": "Xiaomi",
      "category": "Headphones & Earphones"
    },
    {
      "brand": "Proscenic",
      "category": "Coupon"
    },
    {
      "brand": "LABISTS",
      "category": "3D Printers & Accessories"
    },
    {
      "brand": "Sabbat",
      "category": "Headphones & Earphones"
    },
    {
      "brand": "Netac",
      "category": "apponly"
    },
    {
      "brand": "Seagate",
      "category": "apponly"
    },
    {
      "brand": "Stmagic",
      "category": "apponly"
    },
    {
      "brand": "MINIX",
      "category": "newarrival"
    },
    {
      "brand": "eMeet",
      "category": "special_clearance_sale"
    },
    {
      "brand": "H96",
      "category": "TV Boxes"
    },
    {
      "brand": "ONEBOT",
      "category": "deals"
    },
    {
      "brand": "SCULPFUN",
      "category": "special_clearance_sale"
    },
    {
      "brand": "Tanix",
      "category": "TV Boxes"
    },
    {
      "brand": "SUNUO",
      "category": "special_clearance_sale"
    },
    {
      "brand": "Ugreen",
      "category": "newarrival"
    },
    {
      "brand": "Magicsee",
      "category": "apponly"
    },
    {
      "brand": "Baseus",
      "category": "Laptops"
    },
    {
      "brand": "Haylou",
      "category": "Headphones & Earphones"
    },
    {
      "brand": "Powkiddy",
      "category": "apponly"
    },
    {
      "brand": "Ajazz",
      "category": "apponly"
    },
    {
      "brand": "NexTool",
      "category": "Coupon"
    },
    {
      "brand": "Ipega",
      "category": "apponly"
    },
    {
      "brand": "Youpin",
      "category": "Coupon"
    },
    {
      "brand": "Zeblaze",
      "category": "newarrival"
    },
    {
      "brand": "HINOVO",
      "category": "special_clearance_sale"
    },
    {
      "brand": "Lenovo",
      "category": "Headphones & Earphones"
    },
    {
      "brand": "Aqara",
      "category": "bestselling"
    },
    {
      "brand": "Jvmac",
      "category": "bestselling"
    },
    {
      "brand": "TWO TREES",
      "category": "newarrival"
    },
    {
      "brand": "KZ",
      "category": "Headphones & Earphones"
    }
  ]


export {catagorys, Brands}