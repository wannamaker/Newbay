# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Product.destroy_all
Store.destroy_all
User.destroy_all


   user1 = User.create(
      first_name: 'Johnatan',
      last_name: 'Smith',
      email: 'jsmith@g.com',
      password: '1234',
      is_a_seller: true
    )
    user2 = User.create(
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jdoe@outlook.com',
      password: '1234',
      is_a_seller: true
    )

    user3 = User.create(
      first_name: 'Will',
      last_name: 'Smith',
      email: 'wsmith@email.com',
      password: '1234',
      is_a_seller: true
    )

    user4 = User.create(
      first_name: 'Jada',
      last_name: 'August',
      email: 'jaugust@yahoo.com',
      password: '1234',
      is_a_seller: true
    )

    user5 = User.create(
      first_name: 'Okekwe',
      last_name: 'Mtoube',
      email: 'jsmith@gmail.com',
      password: '1234',
      is_a_seller: true
    )

    user6 = User.create(
      first_name: 'Veriane',
      last_name: 'Delice',
      email: 'vdelice@asd.com',
      password: '1234',
      is_a_seller: true
    )

    user7 = User.create(
      first_name: 'Mary',
      last_name: 'Tarnell',
      email: 'mtarnell@asd.com',
      password: '1234',
      is_a_seller: true
    )

    user8 = User.create(
      first_name: 'Peleg',
      last_name: 'Charles',
      email: 'pcharles@asd.com',
      password: '1234',
      is_a_seller: true
    )





store1= Store.create(name: 'Electronics co', description: 'Selling electronics', user_id: user1.id)
store2= Store.create(name: 'Computer inc', description: 'We sell computers for all', user_id: user1.id)
store3= Store.create(name: 'Pret-a-porter', description: 'A clothing store', user_id: user2.id)
store4= Store.create(name: 'Payless Shoes', description: 'Men\' and women\'s shoes', user_id: user3.id)
store5= Store.create(name: 'Appliance limited', description: 'All type of appliances', user_id: user4.id)
store6= Store.create(name: 'Books for all', description: 'Adults and kids books ', user_id: user5.id)
store7= Store.create(name: 'Vitamin blocks', description: 'Suplement for all', user_id: user6.id)
store8= Store.create(name: 'Pantry reserve', description: 'Your everyday food supplyer', user_id: user7.id)
store9= Store.create(name: 'Luxury Shoes', description: 'High quality shoes', user_id: user8.id)
store10= Store.create(name: 'Cleaning supply', description: 'Selling cleaning products', user_id: user3.id)
store11= Store.create(name: 'Apple Devices shop', description: 'Sell apple devices', user_id: user5.id)
store12= Store.create(name: 'Cheap cloths', description: 'Inexpensive Cloths for all', user_id: user3.id)

product1 = Product.create(
  name: 'LG 8k OLED TV',
  description: 'Advanced 8k OLED tv 60 in',
  store_id: store1.id,
  images: 'https://advanced-television.com/wp-content/uploads/2019/09/LG8K.jpg',
  price: '1989',
  quantity: 10
 )

 product2 = Product.create(
  name: 'LG B9 4k OLED TV',
  description: '55" Class 8k OLED tv',
  store_id: store1.id,
  images: 'https://content.abt.com/image.php/5-OLED55B9.jpg?image=/images/products/BDP_Images/5-OLED55B9.jpg&canvas=1&quality=80&min_w=600&min_h=400',
  price: '999',
  quantity: 12
 )

 product3 = Product.create(
  name: 'Samsung 4k OLED TV',
  description: '55" Class 4k LED tv',
  store_id: store1.id,
  images: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331760_sd.jpg',
  price: '899',
  quantity: 2
 )

 product4 = Product.create(
  name: 'Samsung UHD 4k Curved Smart TV',
  description: '55" Class 4k LED tv',
  store_id: store1.id,
  images: 'https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$',
  price: '799',
  quantity: 1
 )

 product5 = Product.create(
  name: 'Sony Playstation PS4 Pro',
  description: 'Product Benefits Dimensions: 14"W x 4"D x 16"H Color: Black Includes wireless controller and HDMI cord 1TB Faster frame rates to deliver super sharp',
  store_id: store1.id,
  images: 'https://www.badcock.com/images/thumbs/0022202_sony-playstation-4-ps4-pro.jpeg',
  price: '479',
  quantity: 1
 )

 product6 = Product.create(
  name: 'Microsoft Xbox One X',
  description: 'The Xbox One X is a pricey package but is by far and away the most capable 4K games console currently available.',
  store_id: store1.id,
  images: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/141329-games-review-xbox-one-x-review-image2-28fwsqx4oi-jpg.webp',
  price: '379',
  quantity: 12
 )

 product7 = Product.create(
  name: 'Amazon Fire TV Stick',
  description: 'Basic edition',
  store_id: store1.id,
  images: 'https://images-na.ssl-images-amazon.com/images/I/51WXfP1xDoL._AC_SX425_.jpg',
  price: '39',
  quantity: 25
 )

 product8 = Product.create(
  name: 'Amazon Fire TV Cube',
  description: 'Amazon - Fire TV Cube 4K Streaming Media Player with Alexa and All-New Alexa Voice Remote - Black',
  store_id: store1.id,
  images: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6301/6301669_sd.jpg',
  price: '89',
  quantity: 35
 )

 product9 = Product.create(
  name: 'Lenovo ThinkPad T590',
  description: 'Lenovo ThinkPad T590 15.6" Core i5-8365U 8GB RAM 256GB SSD Windows 10 Pro',
  store_id: store2.id,
  images: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6301/6301669_sd.jpg',
  price: '1389',
  quantity: 15
 )

 product10 = Product.create(
  name: 'Dell - Inspiron 13.3"',
  description: 'Dell - Inspiron 13.3" 7000 2-in-1 Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 512GB SSD + 32GB Optane - Silver',
  store_id: store2.id,
  images: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373036_sd.jpg',
  price: '589',
  quantity: 15
 )

 product11 = Product.create(
  name: 'Dell UltraSharp 49 Curved Monitor - U4919DW',
  description: 'A revolutionary 49-inch dual QHD curved monitor with ultra wide views, multitasking features and seamless connectivity for an immersive work',
  store_id: store2.id,
  images: 'https://i.dell.com/sites/csimages/Video_Imagery/all/2019-u4919dw-product-walkthrough.jpg',
  price: '489',
  quantity: 15
 )

 product12 = Product.create(
  name: 'HP 6000 Pro Desktop Computer Tower PC Intel C2D 3.0G',
  description: 'Operating System: Genuine Windows 10 Home Premium is Installed and Ready to Use! CPU: Intel Core 2 Duo Processor Memory: 4 GB Hard Drive: 250 GB Hard',
  store_id: store2.id,
  images: 'https://cdn11.bigcommerce.com/s-w5trgcbv/images/stencil/1280x1280/products/3865/50898/60001__83320.1548963429.jpg?c=2?imbypass=on',
  price: '459',
  quantity: 15
 )

 product13 = Product.create(
  name: 'Logitech C920 PRO HD Webcam, 1080p Video with Stereo Audio',
  description: 'Logitech Hi res camera',
  store_id: store2.id,
  images: 'https://assets.logitech.com/assets/54515/hd-webcam-pro-c920-gallery.png',
  price: '139',
  quantity: 45
 )

 product14 = Product.create(
  name: 'Logitech - MK570 Comfort Wave Wireless Keyboard and Optical Mouse - Black',
  description: 'Compatible with PC 2.4GHz wireless technology Buttons function: multimedia, programmable, calculator Optical mouse',
  store_id: store2.id,
  images: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5106/5106406_sd.jpg',
  price: '119',
  quantity: 45
 )

 product15 = Product.create(
  name: 'Logitech MK270 Full-Size Wireless Keyboard and Mouse',
  description: 'Logitech Full-Size Wireless Keyboard and Mouse, Full-Size wireless combo, Long-Lasting battery',
  store_id: store2.id,
  images: 'https://lh3.googleusercontent.com/proxy/p9e21RIr_sBTr4GRvj5R6GFVgV3sk-I5OC67lQmp8h5BD-8D8WazJrMWEldhm-AuCubqRA7K26xKNm-IKx4QLT_SkoNklAAcK6c7fsC6lYW0sHi9Qo8xLGN1ow',
  price: '29',
  quantity: 65
 )

 product16 = Product.create(
  name: 'Men\'s Autumn Winter Casual Zipper T-shirt',
  description: 'Item specifics Material:Acrylic,Cotton,Polyester Style:Casual Sleeve Length in cm:Full Limited Stock! Sold Fast!',
  store_id: store3.id,
  images: 'https://lh3.googleusercontent.com/proxy/p9e21RIr_sBTr4GRvj5R6GFVgV3sk-I5OC67lQmp8h5BD-8D8WazJrMWEldhm-AuCubqRA7K26xKNm-IKx4QLT_SkoNklAAcK6c7fsC6lYW0sHi9Qo8xLGN1ow',
  price: '39',
  quantity: 65
 )

 product17 = Product.create(
  name: 'Men Dress cotton Shirt',
  description: 'Material: Linen / Cotton Gender: Men Model: Slim Collar Style: Stand Collar Style: Formal Sleeve Style: Long Sleeve',
  store_id: store3.id,
  images: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg',
  price: '9',
  quantity: 65
 )

 product18 = Product.create(
  name: 'Coodrony T-Shirt Men 100% cotton',
  description: 'Straight T-shirt with a round neckline and long sleeves. Featuring a patch chest pocket with stripped detail',
  store_id: store3.id,
  images: 'https://capthatt.com/wp-content/uploads/Mens-O-neck-t-shirt.jpg',
  price: '28.99',
  quantity: 25
 )

 product19 = Product.create(
  name: 'Summer Short Sleeve Crop Top',
  description: 'Fashion Suit Women Clothing 2 Piece Set Tops+Pants',
  store_id: store3.id,
  images: 'https://ae01.alicdn.com/kf/HTB1Vd57KxWYBuNjy1zkq6xGGpXa3/2018-Summer-Short-Sleeve-Crop-Top-Fashion-Suit-Women-Clothing-2-Piece-Set-Tops-Pants-Printed.jpg',
  price: '11.29',
  quantity: 25
 )

 product20 = Product.create(
  name: 'Women\'s Fashion Women Long Pants',
  description: 'Skinny Trousers Sli m Fit Draped Pants Zipper Women Clothing',
  store_id: store3.id,
  images: 'https://contestimg.wish.com/api/webimage/59e0a6c79fc573062eeacfdc-large.jpg?cache_buster=beec247b92edca973c10bfd51c1e3828',
  price: '21.99',
  quantity: 15
 )

 product21 = Product.create(
  name: 'Long Evening Gown For Women Crystal Taffeta Women Clothing Long Party Dress Prom Gown For Women',
  description: '2017 New Sexy Long Evening Gown Women Dress for Evening Crystal Taffeta Women Clothing Long Party Dress Cheap China Grey Gowns',
  store_id: store3.id,
  images: 'https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/n/e/new-sexy-long-evening-gown-for-women-crystal-taffeta-women-clothing-long-party-dress-prom-gown-for-women-0-extra.jpg',
  price: '121.99',
  quantity: 15
 )

 product22 = Product.create(
  name: 'Moroccan Traditional Women Clothing Amazing Moroccan Caftan 2018',
  description: 'Moroccan caftans 2018 have some really amazing designs and embroideries that sets them different from other women clothing styles.',
  store_id: store3.id,
  images: 'https://cdn.shopify.com/s/files/1/0044/8449/7472/products/IMG_1985_800x.jpg?v=1553816718',
  price: '199.99',
  quantity: 15
 )

 product23 = Product.create(
  name: '2017 Hot Women High Waist Elastic Harem Pants Chiffon Office Lady Solid Pencil Trouser',
  description: 'Brand: TakoFashion',
  store_id: store3.id,
  images: 'https://cdn.shopify.com/s/files/1/0044/8449/7472/products/IMG_1985_800x.jpg?v=1553816718',
  price: '19.99',
  quantity: 5
 )

 product24 = Product.create(
  name: 'F20461A women dresses',
  description: 'New fashion fat women dresses deep v neck slim black dress irregular dress with zipper plus size women clothing',
  store_id: store3.id,
  images: 'https://sc01.alicdn.com/kf/HTB1NNoNKFXXXXc1XpXXq6xXFXXXW.jpg_350x350.jpg',
  price: '9.99',
  quantity: 15
 )

 product25 = Product.create(
  name: 'Smiling Face | Cute, Positive, Happy Smile Fun Teacher T-Shirt for Men or Women ',
  description: 'A unisex t-shirt with a simple print across the front of the universal symbol of happiness and optimism',
  store_id: store3.id,
  images: 'https://images-na.ssl-images-amazon.com/images/I/71RzcIl2QEL._AC_UX342_.jpg',
  price: '7.99',
  quantity: 15
 )

 product26 = Product.create(
  name: 'Protokolo 2700',
  description: 'Women Sports Clothing Gym Activewear Fitness',
  store_id: store3.id,
  images: 'https://i.pinimg.com/originals/8d/57/e1/8d57e1c02b4a4fc40ab861e921bf5b72.jpg',
  price: '27.99',
  quantity: 15
 )

 product27 = Product.create(
  name: 'Women Active Skirts',
  description: 'Women Sports Clothing Gym Activewear Fitness',
  store_id: store3.id,
  images: 'https://i.pinimg.com/originals/70/28/39/702839085f480de4414942275c0915da.jpg',
  price: '27.99',
  quantity: 15
 )

 product28 = Product.create(
  name: 'Women Shoes Pointed Toe',
  description: 'Fashion top quality Pointed Toe Brand designer Women Shoes sexy Thin High Heels Office Lady Party Shoes Woman',
  store_id: store4.id,
  images: 'https://i.pinimg.com/originals/70/28/39/702839085f480de4414942275c0915da.jpg',
  price: '7.99',
  quantity: 15
 )

 product29 = Product.create(
  name: 'Comfortable High Heel Lady Dress Formal Shoes',
  description: 'FModel NO.: VA07 Type: High Heels Heel: Stiletto Heel Upper: PU OutSole: Rubber Color: Black, Red, or as Per Client′s Request',
  store_id: store4.id,
  images: 'https://image.made-in-china.com/2f0j00GgrUNzAhJVcY/2019-Comfortable-High-Heel-Lady-Dress-Formal-Shoes-for-Women.jpg',
  price: '7.49',
  quantity: 15
 )

 product30 = Product.create(
  name: 'Women Shoes Sandals',
  description: 'Comfort Sandals Summer',
  store_id: store4.id,
  images: 'https://tradewindsvacationkits.com/wp-content/uploads/2019/11/Women-Shoes-Sandals-Comfort-Sandals-Summer-Sandalias-Mujer-Fashion-Ladies-Sandals-Ankle-High-Heels-Block-Party.jpg_640x640.jpg',
  price: '21.99',
  quantity: 15
 )

 product31 = Product.create(
  name: 'Nike Women Shoes',
  description: 'Sport shoes for women',
  store_id: store4.id,
  images: 'https://tamybeauty.com/wp-content/uploads/2019/05/IMG_E3369-Copy-Copy.jpg',
  price: '64.99',
  quantity: 5
 )

 product32 = Product.create(
  name: 'Men Shoes Breathable',
  description: ' Men\'s Casual Shoes Sneakers Fashion Low Lace up Canvas Shoes Male Flats',
  store_id: store4.id,
  images: 'https://ae01.alicdn.com/kf/HTB1Xj5jQXXXXXXIaXXXq6xXFXXXh/Men-Shoes-Breathable-Men-s-Casual-Shoes-Sneakers-Fashion-Low-Lace-up-Canvas-Shoes-Male-Flats.jpg',
  price: '31.99',
  quantity: 21
 )

 product33 = Product.create(
  name: 'Fashion Italian Men Shoes Genuine Leather Mens Dress Shoes Sales Carved Designer Wedding Male Oxford Shoes ',
  description: '100%Genuine Leather, office and business men dress shoes for all season.for wedding shoes,party,lace up sneakers or male shoes',
  store_id: store4.id,
  images: 'https://www.dhresource.com/0x0/f2/albu/g5/M01/B5/04/rBVaI1nFyjaAUTCoAA5fY1DrMSk421.jpg',
  price: '131.99',
  quantity: 11
 )

 product34 = Product.create(
  name: 'Boots - Men\'s Hi-Top Dress Shoe - Leather',
  description: 'Every Victorian or Old West Gentleman needs a good looking pair of shoes.With fine Kidskin Leather for the uppers and the lining, and Leather soles',
  store_id: store4.id,
  images: 'https://www.riverjunction.com/assets/images/productimages/mens/bootsandshoes/hi-top-dress-shoe/blackhitopdressshoe3.jpg',
  price: '131.99',
  quantity: 10
 )

 product35 = Product.create(
  name: 'Instant Pot',
  description: 'Instant pot',
  store_id: store5.id,
  images: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kitchen-appliances-on-amazon-1560446818.jpg?crop=0.492xw:0.984xh;0.269xw,0&resize=640:*',
  price: '31.99',
  quantity: 20
 )

 product36 = Product.create(
  name: 'The Intelligent Investor',
  description: 'Financial and motivation book',
  store_id: store6.id,
  images: 'https://www.thebalance.com/thmb/w4syTJBkKMI7QDfXQPee3boybtU=/683x512/smart/filters:no_upscale()/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png',
  price: '46.99',
  quantity: 8
 )

 product37 = Product.create(
  name: 'Atomic Habits',
  description: 'Personal development and motivation book',
  store_id: store6.id,
  images: 'https://jamesclear.com/wp-content/uploads/2020/01/Flat-PREFER-transparent.png',
  price: '56.99',
  quantity: 8
 )

 product38 = Product.create(
  name: 'Ghost River',
  description: 'Fiction book',
  store_id: store6.id,
  images: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/2549849263001/d034ae08-57f5-4334-ad85-26d7ee18bb83/dc7247da-e8cb-4f89-ad4c-9e6017aea97b/1280x720/match/image.jpg',
  price: '20.99',
  quantity: 18
 )

 product39 = Product.create(
  name: 'Ghost River',
  description: 'kids\' book',
  store_id: store6.id,
  images: 'https://cdn.shopify.com/s/files/1/2081/8163/files/001-HIDE-AND-SEEK-free-childrens-books-1.jpg?v=1589846879',
  price: '12.99',
  quantity: 18
 )

 product40 = Product.create(
  name: 'Royal Basmati Rice bag',
  description: 'Rice bag category food',
  store_id: store8.id,
  images: 'https://di2ponv0v5otw.cloudfront.net/posts/2018/05/17/5afdc8fc00450f1a4705632b/s_5afdc917739d48c531235974.jpg',
  price: '22.99',
  quantity: 19
 )

 product41 = Product.create(
  name: 'Riced Veggies',
  description: 'Rice bag category food',
  store_id: store8.id,
  images: 'https://i5.walmartimages.com/asr/032a1c00-cfcb-4149-b016-e5c74146609a.809b426e1dad40c38a47df2aaebf252c.jpeg',
  price: '12.99',
  quantity: 19
 )

 product42 = Product.create(
  name: 'Classic Vegetables Sweet Green pees',
  description: 'Pees category food',
  store_id: store8.id,
  images: 'https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=7666&recipeName=680',
  price: '4.99',
  quantity: 99
 )

 product43 = Product.create(
  name: 'Grandma\'s Peanut butter',
  description: 'GRANDMA\'S cookies offer a delicious variety of homemade memories. With flavors like chocolate and peanut butter, every GRANDMA\'S treat is baked with care',
  store_id: store8.id,
  images: 'https://www.dollargeneral.com/media/catalog/product/cache/6e5ff7de2a46bb5e4325e62839d28016/0/0/00028400043205_0.jpg',
  price: '0.99',
  quantity: 99
 )

 product44 = Product.create(
  name: 'NATURELO Vitamin C with Organic Acerola Cherry and Natural Citrus Bioflavonoids - Whole Food Vegan Suppleme',
  description: 'About this item FRUIT DERIVED: Acerola Cherries are one of the richest sources of Vitamin C found in nature. ENHANCED ABSORPTION: We\'ve added Citrus',
  store_id: store7.id,
  images: 'https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=7666&recipeName=680',
  price: '24.99',
  quantity: 99
 )

 product45 = Product.create(
  name: 'Nature Made Vitamin D3 1000 IU 25 mcg Softgels, 300 Count for Bone Health† Packaging May Vary',
  description: 'Nature Made Vitamin D3 1000IU 25 mcg softgels are made of vitamin D3, the body\'s preferred form of vitamin D. Nature Made Vitamin D3 supports bone',
  store_id: store7.id,
  images: 'https://images-na.ssl-images-amazon.com/images/I/71oXmvph46L._AC_SX425_.jpg',
  price: '34.99',
  quantity: 99
 )

 product46 = Product.create(
  name: 'Centrum Silver Adult 150 Count Complete Multivitamin / Multimineral Supplement Tablet, Vitamin D3, B Vitamins, ',
  description: 'Brand: Centrum Silver Adult 150 Count Complete Multivitamin / Multimineral Supplement Tablet, Vitamin D3, B Vitamins, Zinc, Age 50+
  Centrum Silver Adult Multivitamin and Multimineral Supplement is the most complete multivitamin to help support the health of adults age 50+',
  store_id: store7.id,
  images: 'https://www.meijer.com/content/dam/meijer/product/0030/00/5417/75/0030005417758_2_A1C1_0600.png',
  price: '14.99',
  quantity: 99
 )

 product47 = Product.create(
  name: 'Dogen "Vitello” Brown Cap Toe Italian Shoes With Contrast Perforation i700/978',
  description: 'Since 1959, Dogen Shoes are handmade in Italy from the finest leathers and the highest quality materials. Dogen shoes are made using the traditional',
  store_id: store9.id,
  images: 'https://upscalemenswear.com/images/magictoolbox_cache/feabb61ae2a71c1844359f7cbe8b5d82/1/3/13640/original/2551345593/dogen-vitello-brown-cap-toe-italian-shoes-with-contrast-perforation-i700-978-13640.jpg',
  price: '299.99',
  quantity: 29
 )

 product48 = Product.create(
  name: 'Men Italian Leather Dress Shoes',
  description: 'Italian Leather Dress Shoes',
  store_id: store9.id,
  images: 'https://cdn.acemarks.com/media/catalog/product/cache/1/small_image/600x450/170ec19af00183b5e0368529fc2daa2f/m/o/monkstrap-brandy-antique-3_2_1.jpg',
  price: '499.99',
  quantity: 9
 )

 product49 = Product.create(
  name: 'Mens Belvedere Italy Navy Teju',
  description: 'Lizard Skin Italian Shoes Karmelo 1497',
  store_id: store9.id,
  images: 'https://cdn11.bigcommerce.com/s-jnyf33ru86/images/stencil/1200x1200/products/147/413/belvedere-karmelo__10648.1498846081.jpg?c=2&imbypass=on',
  price: '439.99',
  quantity: 9
 )

 product50 = Product.create(
  name: 'CLeaning bleach gel',
  description: 'Cleaning products professional house cleaners',
  store_id: store10.id,
  images: 'https://www.rd.com/wp-content/uploads/2018/11/Cleaning-4.jpg',
  price: '19.99',
  quantity: 9
 )

 product51 = Product.create(
  name: 'Windex CLeaning Liquid',
  description: 'Cleaning products professional house cleaners',
  store_id: store10.id,
  images: 'https://target.scene7.com/is/image/Target/glasscleaners-QUIVER-190619-1560944489034?wid=328&hei=328&qlt=80&fmt=pjpeg',
  price: '9.99',
  quantity: 99
 )

 product52 = Product.create(
  name: 'TerraCycle Cleaning Supplies & Accessories Zero Waste Box',
  description: 'Check out the what you can recycle with the TerraCycle Cleaning Supplies & Accessories Zero Waste Box from TerraCycle. Go zero waste ',
  store_id: store10.id,
  images: 'https://d13wriz42ny3t5.cloudfront.net/production/2018/05/25105015/terracycle-cleaning-supplies-zero-waste-box-2.jpg',
  price: '224.99',
  quantity: 39
 )

 product53 = Product.create(
  name: 'Custom Built iPod Classic 7th Generation Digital Media Players / 160GB - 2TB SDXC or SSD / Tarkan Boards',
  description: 'A Professionally Built and Upgraded iPod Classic 7th Gen, This upgraded 7th Generation iPod Classic is a beauty. This unit has New Front and Rear',
  store_id: store11.id,
  images: 'https://i.etsystatic.com/19007236/r/il/dd3a32/2133570822/il_570xN.2133570822_qkhj.jpg',
  price: '264.99',
  quantity: 9
 )

 product54 = Product.create(
  name: 'Apple iPod Nano 4th Generation A1285 16 GB used',
  description: 'Red Apple iPod Nano 4th Gen. in good condition',
  store_id: store11.id,
  images: 'https://buy-sellelectronics.com/shop/wp-content/uploads/2018/06/20180625_161629-e1529962404552.jpg',
  price: '44.99',
  quantity: 1
 )

 product55 = Product.create(
  name: 'iPhone 11 64 GB white',
  description: 'White Apple iPhone 11 64 GB',
  store_id: store11.id,
  images: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956148115',
  price: '699.99',
  quantity: 19
 )

 product56 = Product.create(
  name: 'iPhone 8 Plus 64 GB white',
  description: 'White Apple iPhone 8 64 GB',
  store_id: store11.id,
  images: 'https://images-na.ssl-images-amazon.com/images/I/61yX3VKY7GL._AC_SL1500_.jpg',
  price: '299.99',
  quantity: 19
 )

 product57 = Product.create(
  name: 'MacBook Air 13-inch',
  description: 'Space Gray MacBook Air',
  store_id: store11.id,
  images: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541713862468',
  price: '899.99',
  quantity: 19
 )

 product58 = Product.create(
  name: 'MacBook Pro 16-inch',
  description: 'Space Gray MacBook Pro',
  store_id: store11.id,
  images: 'https://www.apple.com/v/macbook-pro-16/b/images/meta/og__csakh451i0eq_large.png',
  price: '2899.99',
  quantity: 19
 )

 product59 = Product.create(
  name: 'Mac Mini',
  description: 'Space Gray MacBook Pro',
  store_id: store11.id,
  images: 'https://icdn2.digitaltrends.com/image/digitaltrends/applemacmini_review_2.jpg',
  price: '599.99',
  quantity: 19
 )

 product60 = Product.create(
  name: 'Mac Pro',
  description: 'Space Gray Mac Pro',
  store_id: store11.id,
  images: 'https://www.thestatesman.com/wp-content/uploads/2019/12/macpro.jpg',
  price: '5999.99',
  quantity: 4
 )

 product61 = Product.create(
  name: 'T-Shirt',
  description: 'Navy Blue T-Shirt',
  store_id: store12.id,
  images: 'https://mms-images-prod.imgix.net/mms/images/catalog/35d4c8a8965a79d495a3c24a3148c382/colors/4620/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format',
  price: '9.99',
  quantity: 99
 )

 product62 = Product.create(
  name: 'Black Washed Prince Purple Rain Graphic T Shirt',
  description: 'This washed black band tee features a prince purple rain print, short sleeves and relaxed fit',
  store_id: store12.id,
  images: 'https://media.missguided.com/i/missguided/TJF11568_02?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$',
  price: '17.99',
  quantity: 99
 )

 product63 = Product.create(
  name: 'Long Sleeve Heavyweight Crew Neck T-Shirt',
  description: 'Heavyweight Crew Neck T-Shirt',
  store_id: store12.id,
  images: 'https://www.dickies.com/dw/image/v2/AAYI_PRD/on/demandware.static/-/Sites-master-catalog-dickies/default/dw45b9e7cd/images/main/WL450_AG_FR.jpg?sw=583&sh=746&sm=fit',
  price: '17.99',
  quantity: 99
 )

 product64 = Product.create(
  name: 'Long Sleeve Heavyweight Crew Neck T-Shirt',
  description: 'Heavyweight Crew Neck T-Shirt',
  store_id: store12.id,
  images: 'https://www.dickies.com/dw/image/v2/AAYI_PRD/on/demandware.static/-/Sites-master-catalog-dickies/default/dw45b9e7cd/images/main/WL450_AG_FR.jpg?sw=583&sh=746&sm=fit',
  price: '17.99',
  quantity: 99
 )

 product65 = Product.create(
  name: 'Logo Lounge Pants',
  description: 'Logo Lounge Pants by Assembly Label online at THE ICONIC',
  store_id: store12.id,
  images: 'https://www.dickies.com/dw/image/v2/AAYI_PRD/on/demandware.static/-/Sites-master-catalog-dickies/default/dw45b9e7cd/images/main/WL450_AG_FR.jpg?sw=583&sh=746&sm=fit',
  price: '57.99',
  quantity: 99
 )