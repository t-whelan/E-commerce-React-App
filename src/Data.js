const products = [
    { id: 1, name: 'Apple Watch', price: 529.99, image: 'Apple-watch.png', make: 'Series 5 se', quantity: 1,
    description:
    ['The Apple Watch Series 5 and Apple Watch Series 3 have a',
    'water resistance rating of 50 meters under ISO standard 22810:2010.', 
    'Apple Watch Series 5 (GPS + Cellular) can use a cellular connection for Emergency SOS.',
    'Apple Watch All-Day Battery Life testing was conducted by Apple.The battery life vary according to usage.',],
 specifications:
    ['GPS/GNSS,Compass           ',

    'Barometric altimeter        ',

    'Water resistant,50 meters1     ',

    'Electrical heart sensor,Second-generation optical heart sensor    ',

    'International emergency calling3,Emergency SOS2     ',

    'Accelerometer up to 32 g-forces with fall detection     ',

    'Gyroscope,Ambient light sensor        ',

    'Speaker,Microphone      ',

    'Apple Pay,GymKit,Capacity 32GB     ',

    'Ceramic and sapphire crystal back     ',]},
    { id: 2, name: 'Sony ZX33OBT', price: 39.99, image: 'headphones.png', make: 'Light Grey', quantity: 1,
    description:
    ['Giving you up to 30 hours of playback and talk time, the black ZX330BT',
     'Bluetooth Stereo Headset from Sony boasts NFC compatibility for simplified,',
     'touch pairing. An integrated omnidirectional microphone allows for taking calls hands-free,',
     'while its pressure-relieving ear pads help assure a comfortable fit during the extended',],
    specifications:['30mm Drivers     ',

     'NFC Pairing Compatible   ',

     'Integrated Microphone for Taking Calls   ',

     'Built-In Rechargeable Batteries   ',

     'Up to 30 Hours of Playback   ',

     'Swiveling On-Ear Design  ',
   ] },
    { id: 3, name: 'Iphone 11', price: 619.99, image: 'iphone11-pin.jpg', make: 'Serious Black',  quantity: 1,
    description:
    ['iPhone 11 is designed with the following features to reduce its environmental impact,',
    'with language support for many countries,Apple iPhone 11 is powered by the Apple A13 Bionic processor.',
   'The smartphone comes with a 6.1 inches Liquid Retina IPS LCD capacitive touchscreen and 828 x 1792 pixels resolution.',
   ' The screen of the device is protected by Scratch-resistant glass and oleophobic coating.',],
    specifications:[
     'The rear camera consists of a 12 MP (wide) + 12 MP (ultrawide) lenses.  ',

      'The front camera has a 12 MP + TOF 3D camera sensor. The phone’s sensors include Face ID,  ',

      ' accelerometer, gyro, proximity, compass, and barometer.  ',

      'The smartphone is fueled by a Non-removable Li-Ion 3110 mAh battery  ',

      ' + Fast battery charging 18W: 50% in 30 min + USB Power Delivery 2.0 + Qi wireless charging.  ',

      'The phone runs on iOS 13.',
     ] },
    { id: 4, name: 'Iphone 11', price: 619.99, image: 'iphone11green.jpg', make: 'Subway Blue',  quantity: 1,
    description:
    ['iPhone 11 is designed with the following features to reduce its environmental impact,',
    'with language support for many countries,Apple iPhone 11 is powered by the Apple A13 Bionic processor.',
   'The smartphone comes with a 6.1 inches Liquid Retina IPS LCD capacitive touchscreen and 828 x 1792 pixels resolution.',
   ' The screen of the device is protected by Scratch-resistant glass and oleophobic coating.',],
    specifications:[
     'The rear camera consists of a 12 MP (wide) + 12 MP (ultrawide) lenses. ',
    
      'The front camera has a 12 MP + TOF 3D camera sensor. The phone’s sensors include Face ID,  ', 

      ' accelerometer, gyro, proximity, compass, and barometer.  ',

      'The smartphone is fueled by a Non-removable Li-Ion 3110 mAh battery ',

      ' + Fast battery charging 18W: 50% in 30 min + USB Power Delivery 2.0 + Qi wireless charging. ',

      'The phone runs on iOS 13. ',
     ] },
    { id: 5, name: 'Iphone 11', price: 619.99, image: 'iphone11red.jpg', make: 'Product RED',  quantity: 1,
    description:
    ['iPhone 11 is designed with the following features to reduce its environmental impact,',
    'with language support for many countries,Apple iPhone 11 is powered by the Apple A13 Bionic processor.',
   'The smartphone comes with a 6.1 inches Liquid Retina IPS LCD capacitive touchscreen and 828 x 1792 pixels resolution.',
   ' The screen of the device is protected by Scratch-resistant glass and oleophobic coating.',],
    specifications:[
     'The rear camera consists of a 12 MP (wide) + 12 MP (ultrawide) lenses. ',

      'The front camera has a 12 MP + TOF 3D camera sensor. The phone’s sensors include Face ID., ',

      ' accelerometer, gyro, proximity, compass, and barometer. ',

      'The smartphone is fueled by a Non-removable Li-Ion 3110 mAh battery.',

      ' + Fast battery charging 18W: 50% in 30 min + USB Power Delivery 2.0 + Qi wireless charging. ',
      'The phone runs on iOS 13. ',
     ] },
    { id: 6, name: 'Iphone 11', price: 619.99, image: 'iphone11white.jpg', make: 'Milky White',  quantity: 1,
    description:
    ['iPhone 11 is designed with the following features to reduce its environmental impact,',
    'with language support for many countries,Apple iPhone 11 is powered by the Apple A13 Bionic processor.',
   'The smartphone comes with a 6.1 inches Liquid Retina IPS LCD capacitive touchscreen and 828 x 1792 pixels resolution.',
   ' The screen of the device is protected by Scratch-resistant glass and oleophobic coating.',],
    specifications:[
     'The rear camera consists of a 12 MP (wide) + 12 MP (ultrawide) lenses. ',

      'The front camera has a 12 MP + TOF 3D camera sensor. The phone’s sensors include Face ID, ',

      ' accelerometer, gyro, proximity, compass, and barometer. ',

      'The smartphone is fueled by a Non-removable Li-Ion 3110 mAh battery',

      ' + Fast battery charging 18W: 50% in 30 min + USB Power Delivery 2.0 + Qi wireless charging. ',

      'The phone runs on iOS 13.',
     ] },
    { id: 7, name: 'Iphone 13', price: 619.99, image: 'iphone13red2.jpg', make: 'Product RED',  quantity: 1,
    description:
    ['The iPhone 13 display has rounded corners that follow a beautiful curved design',
   'iOS is the world’s most personal and secure mobile operating system,',
   'packed with powerful features and designed to protect your privacy.',
   'Built-in accessibility features supporting vision, mobility, hearing and',
   'cognitive disabilities help you get the most out of your iPhone.',],
 specifications:[
   'Screen size:6.1 inches  ',

     'Processor:A15 Bionic ',

     'Water resistance:IP68 ',

     'Battery life (video playback):10:33 ',

     'Size:5.8 x 2.8 x 0.3 inches ',

     'Operating System:iOS 16 ',

     'Sensors:Face ID,Barometer,Three‑axis gyro,Accelerometer,Proximity sensor,Ambient light sensor ',
   ] },
    { id: 8, name: 'Iphone 14', price: 619.99, image: 'iphone13red2.jpg', make: 'Product RED',  quantity: 1,
    description:
    ['iPhone 14 and iPhone 14 Plus are designed with the following features to reduce',
    'their environmental impact. The iPhone 14 Plus comes with 6.1-inch OLED display with ',
    '120Hz refresh rate and Apple improved Bionic A16 processor. On the back there is a Triple camera',
    'setup with 48MP main camera.'],
    specifications:[
     'Screen size:6.1-inch super retina XDR display ',

      'Network:Super fast 5G cellular ',
      
      'Vital safety technology,crash technology ',

      'Processor:A15 bionic chip ',

      'Durability:Industry-leading durability features ',

      'Battery life:All-day battery life ',

      'Warranty:1 year warranty ',
     ] },
  
  

  // Add more products
];

export default products
