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

  const Home={
    deal:[
      {
        "brand": "ORICO",
        "category": "apponly",
        "description": "<p>5Gbps USB 3.0 with UASP, Faster and More Efficient</p> <p>Creative soft LED light monitors working situation clearly.</p> <p>Suitable for most major systems in the market including Windows, Mac OS and Linux.</p> <p>A strong power supply can be easy to meet the needs of the hard drive power supply up to 24W.</p> <p>Aluminum alloy and ABS material to improve heat dissipation and prevent static.</p> <p>The creative vertical design makes the hard drive enclosure make the desk more clean and tidy.</p> <p>Installed with screws, much safer and stable</p> <p>Brand: ORICO<br/>\r\n            Type: 3.5-inch HDD Enclosure<br/>\r\n            Model: 7688U3-US-BK-BP</p>",
        "images": [
          "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-0.jpg",
          "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-1.jpg",
          "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-2.jpg",
          "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-3.jpg",
          "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-4.jpg"
        ],
        "shiping": [
          "China-1"
        ],
        "option": [],
        "name": "ORICO 3.5inch USB3.0 to SATA III Hard Drive Enclosure for 2.inch 3.5inxh SSD Disk HDD Case for PC Support 16TB",
        "price": 3646.57,
        "strikedprice": 4245.57,
        "qnty": 50,
        "rating": 1
      },
    ]
  }


export {catagorys, Brands}