const catagorys = [
  {
    name: 'Electronics',
    list: ['Bluetooth Speaker', 'Headphones & Earphones', '3D Printers & Accessories', 'Video Games Accessories', 'Smart Watches', 'Laser cutter']
  },
  {
    name: 'Sports & Outdoors',
    list: ['E-Bikes', 'Scooters & Wheels', 'Fitness & Body Building', 'Drones']
  },
  {
    name: 'TV Boxes & Mini PCs',
    list: ['TV Boxes', 'Windows Mini PCs']
  },
  {
    name: 'Computers, Tablets & Accessories',
    list: ['Laptops', 'Gaming Laptops', 'Keyboard & Mouse', 'Computer Accessories']
  },
]

const Brands = [
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

const Home = {
  deal: [
    {
      "name": "ORICO 3.5inch USB3.0 to SATA III Hard Drive Enclosure for 2.inch 3.5inxh SSD Disk HDD Case for PC Support 16TB",
      "brand": "ORICO",
      "description": "<p>5Gbps USB 3.0 with UASP, Faster and More Efficient</p> <p>Creative soft LED light monitors working situation clearly.</p> <p>Suitable for most major systems in the market including Windows, Mac OS and Linux.</p> <p>A strong power supply can be easy to meet the needs of the hard drive power supply up to 24W.</p> <p>Aluminum alloy and ABS material to improve heat dissipation and prevent static.</p> <p>The creative vertical design makes the hard drive enclosure make the desk more clean and tidy.</p> <p>Installed with screws, much safer and stable</p> <p>Brand: ORICO<br/>\r\n            Type: 3.5-inch HDD Enclosure<br/>\r\n            Model: 7688U3-US-BK-BP</p>",
      "price": 3646.57,
      "rating": 1,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-24/ORICO-USB3-0-to-SATA-III-Hard-Drive-Enclosure-498304-4.jpg"
      ],
      "like": 0,
      "category": "Home",
      "qnty": 50,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 4245.57,
      "_id": "642640488111f81e8957189c",
      "createdAt": "2023-03-31T02:07:04.778Z",
      "__v": 0
    },
    {
      "name": "Sabbat G12 Elite TWS Wireless Bluetooth Headphones Gaming Music Dual Modes Noise Reduction Earphones With Mic - Blue",
      "brand": "Sabbat",
      "description": "<p><strong>10MM Dynamic Driver</strong></p> <p>Sabbat G12 Elite features a 10mm large-diameter moving coil driver to create a 6D surround sound. The moving coil microphone is better for capturing loud, strong sounds, so it’s perfect for gaming as it can better capture the loud firing sound of the weapon or grenade, making you immersive in the video games or console games playing.</p> <p><strong>Game Mode</strong></p> <p>Game mode with 40ms ultra-low latency has quicker response, helping you easily score in the game; dwarfs over Ordinary Bluetooth Earbuds’ 200ms+ latency as well as other Gaming Bluetooth Earbuds’ 65ms+ latency.</p> <p><strong>Music Mod</strong>e</p> <p>The 10mm large dynamic driver will deliver powerful bass, placing the sound all round you, let you enjoy grand audio feast.</p> <p><strong>HD Voice Call</strong></p> <p>Smart Noise Canceling blocks out background noise to let you clearly heard in a call.</p> <p><strong>Loseless Decoding Transmission</strong></p> <p>Sabbat G12 Elite is equipped with Bluetooth 5.0 chip for more stable connection, anti-interference and ultra-low latency; dwarfs over the master-slave ordinary earbuds which always lag, drop connections and have ultra-high data transmission latency.</p> <p><strong>Long Battery Life</strong></p> <p>3.7V/50mAh battery can provide 8hrs of music listening on a single charge; the charging case can provide 4 charging times for the 2 earbuds.</p> <p><span style=\"font-size:13px\">Brand: Sabbat<br/>\r\n            Type: Wireless Bluetooth Earphone<br/>\r\n            Model: </span>G12<br/>\n<span style=\"font-size:13px\">Color: </span>Blue</p> <p><span style=\"font-size:13px\">1 x Pair of Earphone</span><br/>\r\n            1 x Charging Case<br/>\r\n            1 x Data Line<br/>\r\n            6 x Pairs of Earphone Cups(S, M, L Size)<br/>\r\n            1 x Pouch<br/>\r\n            1 x User Manual</p>",
      "price": 5343.04,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-4.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-5.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-6.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-7.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-05/Sabbat-G12-Elite-TWS-Wireless-Bluetooth-Headphones-Blue-497351-8.jpg"
      ],
      "like": 0,
      "category": "Home",
      "qnty": 19,
      "shiping": [
        "China"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 5942.04,
      "_id": "642640488111f81e8957189d",
      "createdAt": "2023-03-31T02:07:04.792Z",
      "__v": 0
    },
    {
      "name": "Tronsmart T2 Plus 20W  Bluetooth 5.0 Speaker 24H Playtime NFC IPX7 Waterproof  Soundbar with TWS,Siri,Micro SD",
      "brand": "Tronsmart",
      "description": "<p><strong>Loud Sound, Deep Bass</strong></p> <p>A passive radiator works alongside two 10W full-range loudspeakers to bring deep bass and clear loud sound, despite the compact size. </p> <p><strong>IPX7 Waterproof </strong></p> <p>Engineered for water to withstand complete submersion, never stop music and fun.</p> <p><strong>A Whole Day Playtime </strong></p> <p>Keep your favorite playlist going on with up to 24 hours from a single charge.</p> <p><strong>Voice Assistant </strong></p> <p>Access your personal assistant for help with a simple button tap. </p> <p><strong>TWS</strong></p> <p>Pair two T2 Plus for a more stereo sound to bring your music to life. </p> <p><strong>Easy &amp; Stable Connecting</strong></p> <p>Featuring Bluetooth 5.0, it can provide more seamless and stable connectivity for non-stop music.  </p> <p>Brand: Tronsmart<br/>Model: T2 Plus<br/>Compatible: Compatible with all Bluetooth-enabled Devices</p> <p>Bluetooth: Bluetooth 5.0<br/>Bluetooth compatibility: A2DP / AVRCP / HFP<br/>Output (watt): 2 x 10W max. <br/>Transmission distance: Up to 30m/100ft (open area)<br/>Waterproof: IPX7<br/>Playtime: Up to 24 hours (50% volume level)<br/>Battery: 3600mAh<br/>Charge input: DC 5V/2.0A<br/>Charging time: 3 hours<br/>TF card music format: WAV / FLAC / APE / MP3</p> <p>1 x Tronsmart Element T2 Plus Bluetooth Speaker<br/>1 x USB charging cable<br/>1 x 3.5mm audio cable<br/>1 x Lanyard<br/>1 x Instruction manual<br/>1 x Warranty card</p>",
      "price": 2798.33,
      "rating": 4.98,
      "images": [
        "//img.gkbcdn.com/s3/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588391.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588678.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994589023.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994589357.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994589774.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994590112.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994590437.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994590779.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994591125.jpg",
        "//img.gkbcdn.com/s3/p/2019-08-28/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994591462.jpg",
        "//img.gkbcdn.com/s3/p/2020-03-25/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1585101485542.jpg"
      ],
      "like": 0,
      "category": "Home",
      "qnty": 36,
      "shiping": [
        "China"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 3646.57,
      "_id": "642640488111f81e8957189e",
      "createdAt": "2023-03-31T02:07:04.793Z",
      "__v": 0
    },
    // {
    //   "name": "Flytec V009 30KM High Speed RC Jet Boat With Self-righting Feature For Pool and Lakes - Black",
    //   "brand": "Flytec",
    //   "description": "<p>1. The boat hull is made of environmentally ABS plastic, firm and sturdy, with streamlined hull design and better waterproof performance</p> <p>2. Equipped with rubber anti-collision cover, have buffer protection to avoid damage when the boat hits .</p> <p>3. Adopt 390 motor, strong power,built in turbo jet power device. The boat is driving by water jet, which is unique and novel, bringing a different experience</p> <p>4. 2.4G remote control frequency, stable remote control signal, can support multiple players at the same time</p> <p>5. 150M ultra long remote control distance, wider range of remote control activities, double stimulation</p> <p>6. Three speed modes, can switch speed  freely with one button</p> <p>7. Over distance warning, if the boat drives exceed the remote control distance, the remote control will automatically alarm</p> <p>8. Signal loss warning, when the remote control signal becomes weak, the remote control will alarm</p> <p>9. Two-way signal return, when the boat or the remote control are in low battery, the remote control will automatically alarm</p> <p>10. The remote control has a steering trim function, one key can freely adjust, flexible turning</p> <p>11. Self-righting function, can be reset by remote control after filpped. You'll never have to worry about being stranded upside down.</p> <p>General</p> <p>Brand: Flytec<br/>\r\n            Type: RC Jet Boat<br/>\r\n            Model: V009<br/>\r\n            Color: Black</p> <p>Specification</p> <p>Material: ABS Plastic<br/>\r\n            Speed: 30km/h<br/>\r\n            Battery: 7.4V 1500mAh<br/>\r\n            Charge time:2-3h<br/>\r\n            Control time: 15mins<br/>\r\n            Control distance: 150m<br/>\r\n            Frequency: 2.4 GHZ<br/>\r\n            Controller Battery: 1.5V AA*4 battery(not included)<br/>\r\n            Function: Forward / Turn Left / Turn Right ,Self-Righting, Water jet driving, Three speed Mode, Steering Trim, Low Battery Warning, Over Distance Warning, Signal Warning</p> <p>Weight &amp; Dimensions</p> <p>Product weight: 722g<br/>\r\n            Package weight: 1340g<br/>\r\n            Product size (L x W x H): 33.3*12*9cm<br/>\r\n            Package size (L x W x H): 36.3*19.5*21cm</p> <p>Package Contents</p> <p>1 x  RC Jet boat<br/>\r\n            1 x remote control<br/>\r\n            1 x boat battery<br/>\r\n            1 x USB charging cable<br/>\r\n            6 x screws<br/>\r\n            1 x 1.5mm Allen wrench<br/>\r\n            1 x user manual</p>",
    //   "price": 5936.81,
    //   "rating": 5,
    //   "images": [
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-0.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-1.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-2.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-3.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-4.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-5.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-6.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-7.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-8.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-9.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-10.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-11.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-03-16/Flytec-V009-30KM-High-Speed-RC-Jet-Boat-Black-497800-12.jpg"
    //   ],
    //   "like": 0,
    //   "category": "Home",
    //   "qnty": 38,
    //   "shiping": [
    //     "China"
    //   ],
    //   "option": [],
    //   "ratingCount": 0,
    //   "strikedprice": 6700.22,
    //   "_id": "642640488111f81e895718a0",
    //   "createdAt": "2023-03-31T02:07:04.795Z",
    //   "__v": 0
    // },
    // {
    //   "name": "GREEN TIME T2 Dual USB Charging Alarm Clock Wireless Radio, LCD Screen Perpetual Calendar, Temperature Display - Black",
    //   "brand": "AllMain",
    //   "description": "<p><span style=\"font-family:arial,helvetica,sans-serif\"><strong>Dual USB Charging</strong><br/>\r\nWith dual USB output function, it can charge iPhone, iPad, and other devices through two USB ports at the same time.<br/>\n<strong>FM Radio</strong><br/>\r\nPLL electronic adjustment FM radio function: receiving frequency 87.5-108MHz.<br/>\n<strong>LCD Display</strong><br/>\r\nWith LCD clock display function, it has a bright white backlight (12/24 hours switchable). And the screen can directly display the set alarm time.<br/>\n<strong>Alarm Function</strong><br/>\r\nIt has dual alarm clock settings and SNOOZE snooze function. The alarm can choose built-in ringtones (built-in 5 music) and FM. You can adjust the ringtone volume in real time, and you can actively set your favorite radio channel as the alarm ringtone.<br/>\n<strong>Adjustable Backlight Brightness</strong><br/>\r\nThis wireless radio can adjust the brightness of the backlight (6 levels in total), and can also turn off the backlight.<br/>\n<strong>Temperature Display Function</strong><br/>\r\nThe built-in temperature sensing module can display the external ambient temperature in real time (Degree Celsius/Fahrenheit can be switched).</span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:13px\">General</span></span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:13px\">Brand: GREEN TIME<br/>\r\n            Type: Alarm Clock Radio<br/>\r\n            Model: T2<br/>\r\n            Color: Black</span></span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:13px\">Specification</span></span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\">Product Model: T2<br/>\r\n            Interface Type: USB<br/>\r\n            Plug: EU Plug<br/>\r\n            Power Type: External Power Supply<br/>\r\n            USB Output: 1.1A /2.1A<br/>\r\n            Receiving Frequency: 87.5-108MHz</span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:13px\">Weight &amp; Size</span></span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:13px\">Package Weight: 0.32kg<br/>\r\n            Package Size(L x W x H): 13x7.1x6.2cm</span></span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:13px\">Package Contents</span></span></p> <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:13px\">1 x Alarm Clock Radio<br/>\r\n            1 x Power Adapter<br/>\r\n            1 x User Manual</span></span></p>",
    //   "price": 2543.86,
    //   "rating": 3,
    //   "images": [
    //     "//img.gkbcdn.com/s3/p/2022-06-08/GREEN-TIME-T2-Alarm-Clock-Radio-Black-501645-0.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-06-08/GREEN-TIME-T2-Alarm-Clock-Radio-Black-501645-1.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-06-08/GREEN-TIME-T2-Alarm-Clock-Radio-Black-501645-2.jpg",
    //     "//img.gkbcdn.com/s3/p/2022-06-08/GREEN-TIME-T2-Alarm-Clock-Radio-Black-501645-3.jpg"
    //   ],
    //   "like": 0,
    //   "category": "Home",
    //   "qnty": 45,
    //   "shiping": [
    //     "China"
    //   ],
    //   "option": [],
    //   "ratingCount": 0,
    //   "strikedprice": 2798.33,
    //   "_id": "642640488111f81e895718a1",
    //   "createdAt": "2023-03-31T02:07:04.795Z",
    //   "__v": 0
    // },
    
  ],

  featured:[
    {
      "name": "Stmagic SPT33 Type-C To USB 3.1 SSD Enclosure 2T Capacity Support M.2 PCIe Solid State Drive - Silver",
      "brand": "Stmagic",
      "description": "<p>This Product support Sata protocol M.2 Nvme 2242/2260/2280 solid-state disk. Support 2TB capacity expansion.</p> <p>Less than 3 seconds quickly transmit a 1G Document Choose from Type -c port. Transmission Speeds reach as fast as 5Gbps, giving you a faster document reading experience.</p> <p>Same capacity with a smaller body. Easily place in your pocket, portable memory does not add an extra burden.</p> <p>High-speed transmission, stable performance, metal material, thin to 8.5mm shock absorption.</p> <p>Brand: Stmagic<br/>\r\n            Type: SSD Enclosure<br/>\r\n            Model: SPT33 <br/>\r\n            Color: Silver</p> <p>Material: Aluminium alloy<br/>\r\n            Cable Length:18-20cm<br/>\r\n            Interface: Type-C interface/titline USB3.1<br/>\r\n            Suitable: M.2 NVme interface SSD card<br/>\r\n            Transmission Speed: Type-C Gen1:5Gbps<br/>\r\n            Master Chip: JMS576<br/>\r\n            Support SSD Size Specification: M.2 Nvme 2230/2242/2260/2280</p> <p>1 x Stmagic SPT33 SSD Enclosure</p>",
      "price": 2119.74,
      "rating": 5,
      "images": [
        "//img.gkbcdn.com/s3/p/2020-05-18/Stmagic-SPT33-Type-C-To-USB-3-1-SSD-Enclosure-Silver-904365-.jpg",
        "//img.gkbcdn.com/s3/p/2020-05-18/Stmagic-SPT33-Type-C-To-USB-3-1-SSD-Enclosure-Silver-904366-.jpg",
        "//img.gkbcdn.com/s3/p/2020-05-18/Stmagic-SPT33-Type-C-To-USB-3-1-SSD-Enclosure-Silver-904367-.jpg",
        "//img.gkbcdn.com/s3/p/2020-05-18/Stmagic-SPT33-Type-C-To-USB-3-1-SSD-Enclosure-Silver-904368-.jpg",
        "//img.gkbcdn.com/s3/p/2020-05-18/Stmagic-SPT33-Type-C-To-USB-3-1-SSD-Enclosure-Silver-904369-.jpg",
        "//img.gkbcdn.com/s3/p/2020-05-18/Stmagic-SPT33-Type-C-To-USB-3-1-SSD-Enclosure-Silver-904370-.jpg"
      ],
      "like": 0,
      "category": "Home",
      "qnty": 23,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 2459.04,
      "_id": "642640488111f81e8957189f",
      "createdAt": "2023-03-31T02:07:04.794Z",
      "__v": 0
    },
    {
      "name": "LOKMAT APPLLP 6 Smart Watch 4G WiFi Tel Watch with Camera GPS Sports Watch with Touch Screen for Android iOS Black",
      "brand": "LOKMAT",
      "description": "<p>Features:</p> <p>4G Full Netcom Rotating camera Smart Watch, support SIM Card, support WiFi, 1.6-Inch TFT, 400 x 400 high definition resolution.</p> <p>LOKMAT- APPLLP 6 Android Smartwatch supports 4G/WIFI network connection. After inserting the SIM card (not included), you can make and receive calls, send text messages, or surf the internet any time and anywhere.</p> <p>Double precision positioning: the watch supports dual positioning of Beidou and Glonass to quickly and accurately locate the location of the watch.</p> <p>90 ° rotating camera, APPLLP 6 is equipped with a 500w high-performance camera, The 90° flip camera illuminates your beaut, meets the needs of taking photos or videos in more dark light environments in life.</p> <p>Built-in 830mAh battery, Long battery life, magnetic- charging, Various desktop settings demonstrate the charm of personality.</p> <p>GSM:900/1800<br/>\r\n            WCDMA:900/2100<br/>\r\n            FDDLTE:B1/B3/B5/B8<br/>\r\n            TDDLTE:B38/B39/B40/B41</p> <p>1 x Smartwatch<br/>\r\n            1 x Magnetic wire<br/>\r\n            1 x User Manual<br/>\r\n            1 x SIM Card PIN<br/>\r\n            1 x Operation Guide</p>",
      "price": 10178,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-4.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 20,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 13146.83,
      "_id": "642640488111f81e895718a2",
      "createdAt": "2023-03-31T02:07:04.796Z",
      "__v": 0
    },
    {
      "name": "X96 X4 Android 11 Amlogic S905X4 8K HDR 4GB/32GB TV BOX 2.5G+5G WIFI Bluetooth 4.1 1000M LAN with EU Adapter",
      "brand": "AllMain",
      "description": "<p>Powered by Amlogic S905X4 SoC, the X96 X4 is capable of natively playing video files encoded with AV1.<br/>\n<br/>\r\nThe X96 X4 tv box includes the AMlogic S905X4 SoC, a Quad Core manufactured in 12 nm with low-power ARM Cortex-A55 processors that theoretically reach 2 GHz speed and integrates a Mali-G31 MP2 GPU. The VPU includes 4K@60fps, HDR, HDR10 and HLG support.<br/>\n<br/>\r\nIn the field of wireless connectivity, all its versions have dual-band Wifi AC and Bluetooth 4.1. The connectors included in the plastic box are a USB 2.0 port, a USB 3.0 port, 3.5 mm AV connector, SPDIF digital audio output, Gigabit Ethernet and an HDMI 2.0 video output.</p> <p style=\"text-align:left\">General</p> <p style=\"text-align:left\">Media Supported</p> <p style=\"text-align:left\">Product Details</p> <p style=\"text-align:left\">Power Requirement</p> <p style=\"text-align:left\">Dimensions and Weight</p> <p style=\"text-align:left\">Package Contents</p>",
      "price": 4834.1,
      "rating": 4.77,
      "images": [
        "//img.gkbcdn.com/s3/p/2021-08-09/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-469792-0.jpg",
        "//img.gkbcdn.com/s3/p/2021-08-09/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-469792-1.jpg",
        "//img.gkbcdn.com/s3/p/2021-08-09/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-469792-2.jpg",
        "//img.gkbcdn.com/s3/p/2021-08-09/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-469792-3.jpg",
        "//img.gkbcdn.com/s3/p/2021-08-09/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-469792-4.jpg",
        "//img.gkbcdn.com/s3/p/2021-08-09/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-469792-5.jpg",
        "//img.gkbcdn.com/s3/p/2021-12-10/x96-x4-android-11-amlogic-s905x4-8k-hdr-4gb-32gb-tv-box-d745fa-1639105108764.jpg",
        "//img.gkbcdn.com/s3/p/2021-08-09/X96-X4-Android-11-Amlogic-S905X4-8K-HDR-4GB-32GB-TV-BOX-469792-7.jpg"
      ],
      "like": 0,
      "category": "Home",
      "qnty": 10,
      "shiping": [
        "Germany-3",
        "China"
      ],
      "option": [
        "4GB/32GB"
      ],
      "ratingCount": 0,
      "strikedprice": 5936.81,
      "_id": "642640488111f81e895718a3",
      "createdAt": "2023-03-31T02:07:04.796Z",
      "__v": 0
    }
  ],

  lokmatwatch: [
    {
      "_id": "642634bda1048778e3c03d31",
      "name": "LOKMAT ATTACK 5 Smartwatch 1.32 Inch Full Touch Screen Heart Rate Monitor Blood Pressure Blood Oxygen Detection - Black",
      "brand": "LOKMAT",
      "description": "<p><strong>Outdoor Enthusiasts Sport Smartwatch</strong></p> <p>LOKMAT ATTACK5 is designed with multiple functions to make your sports experience richer. Whether it is indoors or outdoors, running, biking, climbing, etc., you can view real-time fitness and exercise data and adjust your exercise plan in real-time.</p> <p><strong>Massive Dials</strong></p> <p>There're rich dials to meet the diversified aesthetics, and ATTACK5 supports App dial download.</p> <p><strong>Da Fit App</strong></p> <p>Comprehensively record your exercise/health information, smarter app solutions. Bluetooth 5.0 is compatible with Android Phones and iPhones.</p> <p><strong>Sleep Monitoring</strong></p> <p>Monitor the quality of sleep throughout the process, help you adjust the ratio of work to rest time, and get a healthier sleep state.</p> <p><strong>Information Reminder</strong></p> <p>Push mobile phone information to your watch, allowing you to quickly process your information (Facebook, WhatsApp, Twitter, Ins, etc.)</p> <p><strong>Ultra-long Battery Life</strong></p> <p>Equipped with 360mAh durable battery, LOKMAT ATTACK5 can be used for 5-7 days in normal use, and the standby time can last 15-20 days.</p> <p>Brand: LOKMAT<br/>\r\n            Model: ATTACK5<br/>\r\n            Color: Black</p> <p>Product Weight: 68g<br/>\r\n            Package Weight: 197g<br/>\r\n            Package Size: 105*105*79mm</p> <p>1 x watch<br/>\r\n            1 x magnetic charging cable<br/>\r\n            1 x user manual (nine languages)</p>",
      "price": 4240.34,
      "rating": 1,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-4.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-5.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-6.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-7.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-8.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-9.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-10.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-ATTACK-5-Smartwatch-1-32-Inch-Full-Touch-Screen-Black-498478-11.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 36,
      "shiping": [
        "China"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 4409.98,
      "createdAt": "2023-03-31T01:17:49.022Z",
      "__v": 0
    }, 
    {
      "_id": "6426329aab6732ab214408d0",
      "name": "LOKMAT APPLLP 6 Smart Watch 4G WiFi Tel Watch with Camera GPS Sports Watch with Touch Screen for Android iOS Black",
      "brand": "LOKMAT",
      "description": "<p>Features:</p> <p>4G Full Netcom Rotating camera Smart Watch, support SIM Card, support WiFi, 1.6-Inch TFT, 400 x 400 high definition resolution.</p> <p>LOKMAT- APPLLP 6 Android Smartwatch supports 4G/WIFI network connection. After inserting the SIM card (not included), you can make and receive calls, send text messages, or surf the internet any time and anywhere.</p> <p>Double precision positioning: the watch supports dual positioning of Beidou and Glonass to quickly and accurately locate the location of the watch.</p> <p>90 ° rotating camera, APPLLP 6 is equipped with a 500w high-performance camera, The 90° flip camera illuminates your beaut, meets the needs of taking photos or videos in more dark light environments in life.</p> <p>Built-in 830mAh battery, Long battery life, magnetic- charging, Various desktop settings demonstrate the charm of personality.</p> <p>GSM:900/1800<br/>\r\n            WCDMA:900/2100<br/>\r\n            FDDLTE:B1/B3/B5/B8<br/>\r\n            TDDLTE:B38/B39/B40/B41</p> <p>1 x Smartwatch<br/>\r\n            1 x Magnetic wire<br/>\r\n            1 x User Manual<br/>\r\n            1 x SIM Card PIN<br/>\r\n            1 x Operation Guide</p>",
      "price": 10178,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-4.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 20,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 13146.83,
      "createdAt": "2023-03-31T01:08:42.045Z",
      "__v": 0
    }, 
    {
      "_id": "6426329aab6732ab214408d6",
      "name": "LOKMAT APPLLP MAX Android Watch Phone 4+64GB 2.88'' TFT Screen Dual Cameras WiFi GPS 4G Smartwatch - Black",
      "brand": "LOKMAT",
      "description": "<p>Support Nano SIM Card: enjoy the ultimate freedom without taking your phone, whether you are traveling or going for outdoor activities, your watch keeps you connected.</p> <p>2 Working Modes: insert SIM card then it can work as a real smartphone, or download the \"HEBSWatch\" APP and connect this smartwatch to your smartphone via BT.</p> <p>Dual Camera &amp; Video Recording: 5MP front camera and 13MP side camera, clear and free shooting and video recording, and you can conveniently view photos and videos in the smartwatch.</p> <p>Call, Message &amp; Notification Reminder: check contacts, make calls, receive/ reject incoming calls, receive messages, and notifications of APP, this watch will never let you miss any important thing.</p> <p>Heart Rate Monitoring: monitors your real-time heart rate and records historical data. This smartwatch always cares for your health and lets you understand your physical condition and enjoy a healthier life.</p> <p>Sports Watch: built-in motion sensor to monitor your exercise status in real-time, supports multiple sports, accurately records all-day activities like active time, steps, distance, calories burned, and heart rate.</p> <p>Strong Battery Life: 2300mAh high-capacity battery to reduce the trouble of charging frequently. And with a magnetic USB charging cable, you can recharge your watch anytime and anywhere.</p> <p>Living Waterproof: suitable for daily life use such as washing face, washing hands, being caught in the rain, etc. Not for swimming and taking hot baths or hot sauna.</p> <p>Various Dials: diverse dials for option, supports static and dynamic dials, satisfies daily life, business, sports needs, applicable to various scenes.</p> <p>Brand: LOKMAT<br/>\r\n            Model: APPLLP MAX<br/>\r\n            Color: Black</p> <p>Case Material: Aluminum alloy<br/>\r\n            Strap Material: Silica gel<br/>\r\n            Strap Size: 32mm width, total length 288mm, adjustment range 190-270mm</p> <p>Product Weight: 132g<br/>\r\n            Package Weight: 255g<br/>\r\n            Package Size: 103*103*75mm</p> <p>1 x Smart watch<br/>\r\n            1 x strap<br/>\r\n            1 x magnetic charging cable<br/>\r\n            1 x screwdriver<br/>\r\n            1 x user manual</p>",
      "price": 16963.89,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-4.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-5.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-6.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-7.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-8.jpg",
        "//img.gkbcdn.com/s3/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-9.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 38,
      "shiping": [
        "China"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 18236.25,
      "createdAt": "2023-03-31T01:08:42.050Z",
      "__v": 0
    }, 
    {
      "_id": "642640488111f81e895718a2",
      "name": "LOKMAT APPLLP 6 Smart Watch 4G WiFi Tel Watch with Camera GPS Sports Watch with Touch Screen for Android iOS Black",
      "brand": "LOKMAT",
      "description": "<p>Features:</p> <p>4G Full Netcom Rotating camera Smart Watch, support SIM Card, support WiFi, 1.6-Inch TFT, 400 x 400 high definition resolution.</p> <p>LOKMAT- APPLLP 6 Android Smartwatch supports 4G/WIFI network connection. After inserting the SIM card (not included), you can make and receive calls, send text messages, or surf the internet any time and anywhere.</p> <p>Double precision positioning: the watch supports dual positioning of Beidou and Glonass to quickly and accurately locate the location of the watch.</p> <p>90 ° rotating camera, APPLLP 6 is equipped with a 500w high-performance camera, The 90° flip camera illuminates your beaut, meets the needs of taking photos or videos in more dark light environments in life.</p> <p>Built-in 830mAh battery, Long battery life, magnetic- charging, Various desktop settings demonstrate the charm of personality.</p> <p>GSM:900/1800<br/>\r\n            WCDMA:900/2100<br/>\r\n            FDDLTE:B1/B3/B5/B8<br/>\r\n            TDDLTE:B38/B39/B40/B41</p> <p>1 x Smartwatch<br/>\r\n            1 x Magnetic wire<br/>\r\n            1 x User Manual<br/>\r\n            1 x SIM Card PIN<br/>\r\n            1 x Operation Guide</p>",
      "price": 10178,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-APPLLP-6-4G-Smart-Watch-Black-496723-4.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 20,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 13146.83,
      "createdAt": "2023-03-31T02:07:04.796Z",
      "__v": 0
    }, 
    {
      "_id": "6426329aab6732ab214408da",
      "name": "LOKMAT Time 2 Smart Watch Blutooth Call Heart Rate Monitoring Sports Watch with Sleep Tracker for Android iOS Black",
      "brand": "LOKMAT",
      "description": "<p>Excellent Function:</p> <p>Bluetooth call, watch dialing, password lock function, female physical health management, heart rate monitoring, blood pressure detection, blood oxygen detection, sleep monitoring, synchronous address book, information push, music control, multi-sports mode, sedentary reminder, online massive dial, Anti-lost reminder, do not disturb mode, alarm clock, schedule reminder, remote camera, stopwatch, countdown, weather, bright screen switch</p> <p>Package Weight: 178g</p> <p>1 x Meter head<br/>\r\n            1 x Strap<br/>\r\n            1 x user manual (ten languages)<br/>\r\n            1 x magnetic charging cable</p>",
      "price": 3816.22,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-4.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 19,
      "shiping": [
        "China"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 4070.69,
      "createdAt": "2023-03-31T01:08:42.060Z",
      "__v": 0
    }],

  bestselling: [
    {
      "name": "JJRC H106 4K Adjustable Camera All-Round Obstacle Avoidance Foldable RC Drone Dual Camera Two Batteries - Green",
      "brand": "JJRC",
      "description": "<p>Folding arms, small size, easy to carry.</p> <p><strong>360 degree automatic detection</strong> of surrounding infrared obstacle avoidance, worry-free flight.</p> <p><strong>Built-in 4K HD dual wide angle camera</strong> gives a wide range high definition pictures and video.</p> <p>With WiFi function can be connected <strong>APP</strong>, APK system to take pictures, video, real-time transmission through the phone camera image.</p> <p>Optical flow fixed point hover provides stable flight.</p> <p>With a <strong>1800mAh</strong> large capacity battery, the flying time is up to 12mins.</p> <p>Draw a flight path on the screen, the drone will fly autonomously along the specified path.</p> <p><strong>Return to Home:</strong> It will always return automatically whenever Battery is low, Signal is lost or You press one key to return.</p> <p>Way-point Flight: Plan your flying route by drawing the dots on the built-in map on the App, and recording beautiful scenery along the route.</p> <p>Point of Interest: Select a building or location and click it on the map of the App. The drone could continue to fly clockwise around this specific building or location, presenting a comprehensive image.</p> <p>2.4GHz anti-interference technology.</p> <p><strong>6-axis gyroscope</strong>, smoother flight, and more convenient control.</p> <p>4 channels for ascent, descent, forward, backward, left flight, right flight and 360°roll.</p> <p>Brand: JJRC<br/>Type: RC Drone<br/>Model: H106<br/>Color: Black / Orange / Blue / Green</p>",
      "price": 3137.63,
      "rating": 3,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-4.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-5.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-6.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-7.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-8.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-9.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-10.jpg",
        "//img.gkbcdn.com/s3/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Green-508816-11.jpg"
      ],
      "like": 0,
      "category": "Drones",
      "qnty": 29,
      "shiping": [
        "Czech-4",
        "China-1"
      ],
      "option": [
        "Dual Camera - Two Batteries"
      ],
      "ratingCount": 0,
      "strikedprice": 5936.81,
      "_id": "642637c1a1048778e3c03d51",
      "createdAt": "2023-03-31T01:30:41.571Z",
      "__v": 0
    },
    {
      "_id": "642634bda1048778e3c03d32",
      "name": "Zeblaze Btalk 2 Bluetooth Voice Calling Smartwatch, 1.3'' Ultra HD AMOLED Display, Heart Rate Monitor, SpO2 - Brown",
      "brand": "Zeblaze",
      "description": "<p><strong>Bluetooth Voice Calling</strong><br/>\r\nVoice Calling, Dial Pad, Recent Call, Contact, Call Rejection<br/>\n<strong>Clock Features</strong><br/>\r\nTime/Date, Automatic Daylight Saving Time, Stopwatch, Timer, Alarm<br/>\n<strong>Health Monitoring</strong><br/>\r\nWrist-based Heart Rate (Constant, Every Minute), Daily Resting Heart Rate, Abnormal Heart Rate Alerts, SpO2 (Blood Oxygen) Level Measurement, Women's Health, Sleep Score and Insights, Calorie Burn Tracking<br/>\n<strong>Daily Smart Features</strong><br/>\r\nSmart Notifications (Call, Text, Gmail and Smartphone App Notifications), Weather Sync (Check the weather in the next four days), Controls Smartphone Music and Camera, Find My Phone and Watch, Do Not Disturb Modes, Sedentary alert, Calculator, Password, APP Download<br/>\n<strong>Activity Tracking Features</strong><br/>\r\nActivity Record, Step Counter, Standing, Move Bar (Displays on device after a period of inactivity, walk for a couple of minutes to reset it), Auto Goal (Learns your activity level and assigns a daily step goal), Calories Burned, Real-time Pace &amp; Distance<br/>\n<strong>Sport Modes</strong><br/>\r\nWalking, Running, Mountaineering, Cycling, Basketball, Swimming, Badminton, Football, Elliptical Machine, Yoga, Table Tennis, Rope Skipping, Tennis, Baseball, Football, Hula Hoop, Golf, Long Jump, Sit Ups, Volleyball</p>",
      "price": 3392.1,
      "rating": 1,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-4.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-5.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-6.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-7.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-8.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-9.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Brown-518308-10.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 29,
      "shiping": [
        "China"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 3731.39,
      "createdAt": "2023-03-31T01:17:49.022Z",
      "__v": 0
    },
    {
      "_id": "6426329aab6732ab214408db",
      "name": "Zeblaze Btalk 2 Bluetooth Voice Calling Smartwatch, 1.3'' Ultra HD AMOLED Display, Heart Rate Monitor, SpO2 - Golden",
      "brand": "Zeblaze",
      "description": "<p><strong>Bluetooth Voice Calling</strong><br/>\r\nVoice Calling, Dial Pad, Recent Call, Contact, Call Rejection<br/>\n<strong>Clock Features</strong><br/>\r\nTime/Date, Automatic Daylight Saving Time, Stopwatch, Timer, Alarm<br/>\n<strong>Health Monitoring</strong><br/>\r\nWrist-based Heart Rate (Constant, Every Minute), Daily Resting Heart Rate, Abnormal Heart Rate Alerts, SpO2 (Blood Oxygen) Level Measurement, Women's Health, Sleep Score and Insights, Calorie Burn Tracking<br/>\n<strong>Daily Smart Features</strong><br/>\r\nSmart Notifications (Call, Text, Gmail and Smartphone App Notifications), Weather Sync (Check the weather in the next four days), Controls Smartphone Music and Camera, Find My Phone and Watch, Do Not Disturb Modes, Sedentary alert, Calculator, Password, APP Download<br/>\n<strong>Activity Tracking Features</strong><br/>\r\nActivity Record, Step Counter, Standing, Move Bar (Displays on device after a period of inactivity, walk for a couple of minutes to reset it), Auto Goal (Learns your activity level and assigns a daily step goal), Calories Burned, Real-time Pace &amp; Distance<br/>\n<strong>Sport Modes</strong><br/>\r\nWalking, Running, Mountaineering, Cycling, Basketball, Swimming, Badminton, Football, Elliptical Machine, Yoga, Table Tennis, Rope Skipping, Tennis, Baseball, Football, Hula Hoop, Golf, Long Jump, Sit Ups, Volleyball</p>",
      "price": 3392.1,
      "rating": 3,
      "images": [
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-0.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-1.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-2.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-3.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-4.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-5.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-6.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-7.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-8.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-9.jpg",
        "//img.gkbcdn.com/s3/p/2022-11-18/Zeblaze-Btalk-2-Bluetooth-Voice-Calling-Smartwatch-Grey-518309-10.jpg"
      ],
      "like": 0,
      "category": "Smart Watches",
      "qnty": 44,
      "shiping": [
        "China"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 3731.39,
      "createdAt": "2023-03-31T01:08:42.060Z",
      "__v": 0
    },
    {
      "name": "HAKOPro Amlogic S905Y4 Quad Core 2GB RAM 16GB eMMC Google Certified Android 11 TV Box Netflix 4K AV1 5G WiFi Bluetooth 5.0 - EU Plug",
      "brand": "AllMain",
      "description": "<p>Support Google Assistant<br/>The latest Android 11 OS TV box supports multi-directional switching of channels without being stuck<br/>Support adding Dolby sound effects in the customized version<br/>With a large number of sources, absolute 4k quality is guaranteed<br/>DDR4 brings you an absolutely high-quality experience</p> <p>General</p> <p>Media Supported</p> <p>Product Details</p> <p>Power Requirement</p> <p>Other</p> <p>Dimensions and Weight</p> <p>Package Contents</p>",
      "price": 6021.63,
      "rating": 3,
      "images": [
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-0.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-1.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-2.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-3.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-4.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-5.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-6.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-7.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-8.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-9.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-10.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-11.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/HAKOPro-Amlogic-S905Y4-Quad-Core-2GB-RAM-16GB-EU-519864-12.jpg"
      ],
      "like": 0,
      "category": "bestselling",
      "qnty": 10,
      "shiping": [
        "China-1"
      ],
      "option": [
        "EU",
        "US"
      ],
      "ratingCount": 0,
      "strikedprice": 6620.63,
      "_id": "6426f0c64ecd13bb8c7fc8d5",
      "createdAt": "2023-03-31T14:40:06.544Z",
      "__v": 0
    },
    {
      "name": "ALLDOCUBE iPlay 40 Pro UNISOC Tiger T618 Octa-core Chip, LTE Tablet with Keyboard, 10.4 Inch 2000*1200, 8GB RAM 256GB ROM, Android 11, 5G WiFi, 5MP + 8MP Cameras, 6200mAh Battery",
      "brand": "ALLDOCUBE",
      "description": "<p><strong>10.4-inch 2K Best Viewing Experience with FullView Display</strong><br/>Alldocube iPlay 40 Pro uses a 10.4-inch 2000×1200 resolution FullView display. With only 7.8 mm slim bezel design, this large display provides you with a better viewing experience, whatever content you consume on broadcast TV, YouTube videos, live streams, or podcasts.<br/><strong>In-Cell Technology Immersive Entertainment Experience</strong><br/>Enhanced by high-end In-Cell full lamination technology it gives realistic images, sharper contrasts, dazzling brightness, and allows for more responsive touchscreen performance.<br/><strong>Powerful Mali G52 Gaming-level GPU</strong><br/>UNISOC Tiger T618 is equipped with Bifrost architecture Mali G52 3EE graphics chip, adopts multi-core design, has a clock speed of up to 850MHz and supports 4K video.<br/><strong>Capable and Efficient Tiger T618 Chip</strong><br/>iPlay 40 Pro is armed with a powerful octa-core fast processing chip from UNISOC. Tiger T618 adopts a 12nm process technology and has 2 x A75 cores and 6 x A55. The processor enables the tablet to carry out more advanced tasks such as handling high-resolution videos and graphic-heavy games without draining the battery, making it capable and efficient.<br/><strong>8GB RAM + 256GB ROM</strong><br/>Alldocube iPlay 40 Pro with a large 8GB large-capacity LPDDR4X and octa-core processor helps ensure games and video will play smoothly and quickly.<br/><strong>Plenty of Space for All Your Favorites</strong><br/>256 GB of internal storage, expandable up to 2TB with a MicroSD card, there's plenty of space for all your favorites.<br/><strong>Four Speakers, Smart PA For Theater Like Sound</strong><br/>To bring you a better listening experience, iPlay 40 Pro is equipped with a powerful BOX sound cavity 4 speakers, with Awinic SMART power amplifier chip, bringing you closer to the stories when watching your favorite movies, shows, and playing games.<br/><strong>Massive 6200mAh Delivers All-Day Battery Life</strong><br/>iPlay 40 Pro boasts a thin and light body, and features a powerful 6200mAh battery — so you can easily stream, work, and create without the pressure to find a nearby outlet.<br/><strong>UI based on Android 11 More Dynamic and Easier to Use</strong><br/>Enjoy Android 11 updates and new features on iPlay 40 Pro such as chat bubbles, new notification features, screen recording, smart device control, media control, new privacy settings, and a bunch of others.<br/><strong>8 MP Autofocus Clear Shots to Record Daily Life</strong><br/>Alldocube iPlay 40 Pro is equipped with a rare 8-megapixel camera with auto-focus, to catch every moment. And the front 5-megapixel camera for video calls and Zoom conferences.</p>",
      "price": 20611.31,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-0.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-1.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-2.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-3.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-4.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-5.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-6.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-7.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-519863-8.jpg"
      ],
      "like": 0,
      "category": "bestselling",
      "qnty": 28,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 21210.31,
      "_id": "6426f0c64ecd13bb8c7fc8d6",
      "createdAt": "2023-03-31T14:40:06.545Z",
      "__v": 0
    },
    {
      "name": "ENGWE M20 Electric Bike Lithium-ion Battery 48V 13Ah",
      "brand": "ENGWE",
      "description": "<p><strong>Powerful Battery</strong><br/>The 48V 13Ah reliable high-density removable lithium battery ensures the safety of the electric system.</p> <p><strong>Charging Time And Cruising Range</strong><br/>About 5 hours. The single-charge power can provide up to 50 miles of auxiliary driving.</p> <p><strong>Convenient And Safe</strong><br/>The battery hidden in the frame can be locked, taken out and charged at home and the office.</p> <p><strong>Notice</strong><br/>The electric bicycle battery only matches ENGWE M20.<br/>The e-bike battery should be promptly charged, the suggested charging voltage of 54.6V, charging is finished when the red light is off and the green light is on.<br/>Do not over-discharge the battery, over-discharge will harm the battery badly, discharge voltage should not be lower than 39V.<br/>In case of the wastage of electric quantity during storage and transportation, the battery should be recharged before use.</p> <p>1*Battery<br/>2*keys</p> <p>Battery Capacity</p> <p>13Ah</p> <p>Power</p> <p>624Wh</p> <p>Input</p> <p>54.6V</p> <p>Standard Voltage</p> <p>48V</p> <p>Output cut-off voltage</p> <p>39V</p> <p>Battery Type</p> <p>Lithium battery</p> <p>Item Size</p> <p>44*10*4.5cm</p> <p>Package Size</p> <p>50*20*10cm</p>",
      "price": 33526.23,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-0.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-1.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-2.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-3.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-4.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-5.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-6.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-7.jpg",
        "//img.gkbcdn.com/s3/p/2023-03-16/ENGWE-M20-Electric-Bike-Lithium-ion-Battery-48V-13Ah-519862-8.jpg"
      ],
      "like": 0,
      "category": "bestselling",
      "qnty": 40,
      "shiping": [
        "Europe-4"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 38933.23,
      "_id": "6426f0c64ecd13bb8c7fc8d7",
      "createdAt": "2023-03-31T14:40:06.545Z",
      "__v": 0
    },
    {
      "name": "AX95 DB Android 9.0 S905X3-B 4GB/64GB TV BOX 8K HDR 10+ YouTube 4K BDMV ISO DOLBY 2.4G+5G Dual Band WIFI 100M LAN",
      "brand": "AllMain",
      "description": "<p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>General</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Model: </small></span></span><span style=\"font-family: Arial; font-size: medium;\">AX95 </span><span style=\"font-family: Arial; font-size: medium;\">DB</span><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small><br/>\r\n            Type: TV Box</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Hardware</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>OS: Android 9.0<br/>\r\n            CPU: Amlogic S905X3-B  Quad-core Cortex-A53<br/>\r\n            GPU: ARM G31 MP2 GPU<br/>\r\n            RAM: 4GB DDR3<br/>\r\n            ROM: 64GB eMMC </small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Communication</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>WiFi: 2.4G/5G WiFi.IEEE802.11 a/b/g/n/ac<br/>\r\n            Bluetooth: V4.2<br/>\r\n            LAN: 100M</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Media </small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Image: HD JPEG, BMP, GIF, PNG, TIF</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Video</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small><span style=\"color: rgb(0, 0, 0);\">Amlogic Video Engine (AVE) with dedicated hardware decoders and encoders</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Support multi-video decoder up to 4Kx2K@60fps 1x1080P@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Supports multiple “secured” video decoding sessions and simultaneous decoding and encoding</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Video/Picture Decoding</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">VP9 Profile-2 up to 4Kx2K@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">H.265 HEVC MP-10@L5.1 up to 4Kx2K@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">AVS2-P2 Profile up to 4Kx2K@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">H.264 AVC HP@L5.1 up to 4Kx2K@30fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">H.264 MVC up to 1080P@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">MPEG-4 ASP@L5 up to 1080P@60fps (ISO-14496)</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">WMV/VC-1 SP/MP/AP up to 1080P@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">AVS-P16(AVS ) /AVS-P2 JiZhun Profile up to 1080P@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">MPEG-2 MP/HL up to 1080P@60fps (ISO-13818)</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">MPEG-1 MP/HL up to 1080P@60fps (ISO-11172)</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">RealVideo 8/9/10 up to 1080P@60fps</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Multiple languages and multiple format sub-title video support</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">MJPEG and JPEG unlimited pixel resolution decoding (ISO/IEC-10918)</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Supports JPEG thumbnail, scaling, rotation and transition effects</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Supports *.mkv,*.wmv,*.mpg, *.mpeg, *.dat, *.avi, *.mov, *.iso, *.mp4, *.rm and *.jpg file formats</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Video/Picture Encoding</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Independent JPEG and H.265/H.264 encoder with configurable performance/bit-rate</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">JPEG image encoding</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">H.265/H.264 video encoding up to 1080P@60fps with latency</span></small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Audio</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Supports MP3, AAC, WMA, RM, FLAC, Ogg and programmable with 7.1/5.1 down-mixing<br/>\r\n            Built-in serial digital audio SPDIF/IEC958 input/output and PCM input/output<br/>\r\n            built-in TDM/PCM/I2S ports with TDM/PCM mode up to 384kHz x32bits x 8ch or 96kHz x 32bits x 32ch and I2S mode up to 384kHz x 32bits x 8ch<br/>\r\n            Digital microphone PDM input with programmable CIC, LPF &amp; HPF, support up to 8 DMICs<br/>\r\n            Built-in stereo audio DAC<br/>\r\n            Supports concurrent dual audio stereo channel output with a combination of analog PCM or I2S PCM</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Interface</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small><span style=\"color: rgb(0, 0, 0);\">Supports MP3, AAC, WMA, RM, FLAC, Ogg and programmable with 7.1/5.1 down-mixing</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Built-in serial digital audio SPDIF/IEC958 input/output and PCM input/output</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">built-in TDM/PCM/I2S ports with TDM/PCM mode up to 384kHz x32bits x 8ch or 96kHz x 32bits x 32ch and I2S mode up to 384kHz x 32bits x 8ch</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Digital microphone PDM input with programmable CIC, LPF &amp; HPF, support up to 8 DMICs</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Built-in stereo audio DAC</span><br/>\n<span style=\"color: rgb(0, 0, 0);\">Supports concurrent dual audio stereo channel output with a combination of analog PCM or I2S PCM</span></small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Other Features</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Language: Support Multi-languages</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Dimensions&amp;Weight</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Product weight: 0.1600 kg <br/>\r\n            Package weight: 0.3750 kg <br/>\r\n            Product size (L x W x H): 13.00 x 13.00 x 4.50 cm <br/>\r\n            Package size (L x W x H): 20.00 x 12.50 x 5.50 cm </small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>Package Contents</small></span></span></p> <p><span style=\"font-size: medium;\"><span style=\"font-family: Arial;\"><small>1x TV Box<br/>\r\n            1x Remote control<br/>\r\n            1x HDMI cable<br/>\r\n            1x Power adapter<br/>\r\n            1x User manual</small></span></span></p>",
      "price": 5343.04,
      "rating": 3,
      "images": [
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-0.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-1.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-2.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-3.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-4.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-5.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-6.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-7.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-8.jpg",
        "//img.gkbcdn.com/s3/p/2020-09-05/A95X-DB-Android-9-0-S905X3-B-4GB-64GB-TV-BOX-426145-9.jpg"
      ],
      "like": 0,
      "category": "bestselling",
      "qnty": 16,
      "shiping": [
        "China"
      ],
      "option": [
        "4GB/32GB",
        "4GB/64GB",
        "4GB/128GB"
      ],
      "ratingCount": 0,
      "strikedprice": 5942.04,
      "_id": "64270b1002db608dd9b6928a",
      "createdAt": "2023-03-31T16:32:16.193Z",
      "__v": 0
    },
    {
      "name": "Running Fitness Mask 6 Inhaling Resistance Levels 6 Gears Adjustable For Exercise Training Oxygen High Altitude -Black",
      "brand": "AllMain",
      "description": "<p>Adopting premium materials such as medical silicone and resilient breathable fabric. Anatomical cuts that fit perfectly during your training with a non-slip sleeve.</p> <p>The Sports Mask allows you to control the inhaling resistance level by limiting your air supply. There are 6 levels-From Beginner, Advanced and Professional to Extreme, which can be easily adjusted and switched during your training, without taking off the mask.</p> <p>Increasing the resistance will force your body to work harder to get air into your lungs, which will train your breathing muscles and helps you to get stronger, fitter and faster in various types of sports.</p> <p><strong>Note:</strong></p> <p>1. Please allow 1-3cm error due to manual measurement. Please make sure you do not mind before you bid.</p> <p>2. The colors may have different as the difference display, please understand.</p> <p>Type: Fitness Mask <br/>\r\n            Color: Black</p>",
      "price": 1867.82,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2020-04-22/running-fitness-mask-6-inhaling-resistance-levels-black-1587537993811.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901816-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901817-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901809-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901810-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901811-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901812-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901813-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901814-.jpg",
        "//img.gkbcdn.com/s3/p/2020-04-14/Running-Fitness-Mask-6-Inhaling-Resistance-Levels-Black-901815-.jpg"
      ],
      "like": 0,
      "category": "bestselling",
      "qnty": 29,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 2466.8199999999997,
      "_id": "64270b1002db608dd9b6928b",
      "createdAt": "2023-03-31T16:32:16.203Z",
      "__v": 0
    },
    {
      "name": "5pcs Xiaomi Aqara Smart Window Door Sensor Home Security Equipment Works with Apple Homekit Need to Work together with Aqara Gateway - White",
      "brand": "Aqara",
      "description": "<p>Original Aqara smart door and windows sensor for daily security.</p> <p>Zigbee wireless connection</p> <p>Trigger and alarm: it will light and ring when someone opens the door, the light will automatically turn on when someone push the door.</p> <p>Away from home mode: If someone broke into, the bell will ring and the IP camera (not included) will take video.</p> <p>Intelligent sensors: open the window let fresh air into the room.</p> <p>Brand: Xiaomi Aqara<br/>\r\n            Type: Zigbee Smart Gateway(Homekit Version)<br/>\r\n            Model: ZHWG11LM<br/>\r\n            Color: White</p> <p>Max. Sensing distance: 22mm<br/>\r\n            Working temperature: -10 - 50°C<br/>\r\n            Working humidity: 0 - 95pct RH<br/>\r\n            Built-in 1pc CR1632 cell battery<br/>\r\n            Material: Plastic</p> <p>5 x Aqara Smart Window Door Sensors<br/>\r\n            1 x User Manual</p>",
      "price": 5936.81,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132327836.jpg",
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132328169.jpg",
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132328450.jpg",
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132329004.jpg",
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132329325.jpg",
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132329625.jpg",
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132330298.jpg",
        "//img.gkbcdn.com/s3/p/2018-10-25/5pcs-xiaomi-aqara-smart-window-door-sensor-white-1574132330580.jpg"
      ],
      "like": 0,
      "category": "bestselling",
      "qnty": 24,
      "shiping": [
        "China"
      ],
      "option": [
        "Window Door Sensor",
        "Body Sensor",
        "Water Sensor",
        "Temperature Humidity Sensor",
        "Window Door Sensor x 5",
        "Body Sensor x 5",
        "Water Sensor x 5",
        "Temperature Humidity Sensor x 5",
        "Body Sensor x 10",
        "Water Sensors x 10",
        "Window Door Sensor x 10",
        "Temperature Humidity Sensors x 10",
        "Temperature Humidity Sensor x 2",
        "Window Door Sensor x 2",
        "Body Sensor x 2"
      ],
      "ratingCount": 0,
      "strikedprice": 6535.81,
      "_id": "64270b1002db608dd9b6928c",
      "createdAt": "2023-03-31T16:32:16.204Z",
      "__v": 0
    },
    {
      "name": "J2 Ultra-Portable Wireless Bluetooth Speaker Wood Texture - Brown",
      "brand": "AllMain",
      "description": "<p>Fast and easy to pair with any device with a transmission distance up to 30 feet.</p> <p>Compatible with all Bluetooth-enabled devices.</p> <p>Easy to pair and use. Just one button for controlling, volume, track selection, and playback.</p> <p>Built-in rechargeable battery offers 6 hours of playtime.</p>",
      "price": 1186.68,
      "rating": 2,
      "images": [
        "//img.gkbcdn.com/s3/p/2019-03-05/j2-portable-bluetooth-speaker-brown-1571979093070.jpg",
        "//img.gkbcdn.com/s3/p/2019-03-05/j2-portable-bluetooth-speaker-brown-1571979093406.jpg",
        "//img.gkbcdn.com/s3/p/2019-03-05/j2-portable-bluetooth-speaker-brown-1571979093692.jpg",
        "//img.gkbcdn.com/s3/p/2019-03-05/j2-portable-bluetooth-speaker-brown-1571979094001.jpg",
        "//img.gkbcdn.com/s3/p/2019-03-05/j2-portable-bluetooth-speaker-brown-1571979094374.jpg",
        "//img.gkbcdn.com/s3/p/2019-03-05/j2-portable-bluetooth-speaker-brown-1571979094655.jpg",
        "//img.gkbcdn.com/s3/p/2019-03-05/j2-portable-bluetooth-speaker-brown-1571979094937.jpg"
      ],
      "like": 0,
      "category": "bestselling",
      "qnty": 30,
      "shiping": [
        "China-1"
      ],
      "option": [],
      "ratingCount": 0,
      "strikedprice": 1785.68,
      "_id": "64270b1002db608dd9b6928d",
      "createdAt": "2023-03-31T16:32:16.205Z",
      "__v": 0
    }
  ]
}


export { catagorys, Brands, Home }