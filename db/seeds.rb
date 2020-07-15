# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@john = User.create(
  [
    {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jdoe@outlook.com',
      password: '1234',
      is_a_seller: true
    },
    {
      first_name: 'Will',
      last_name: 'Smith',
      email: 'wsmith@email.com',
      password: '1234',
      is_a_seller: true
    },
    {
      first_name: 'Jada',
      last_name: 'Pinkett',
      email: 'jpinkett@yahoo.com',
      password: '1234',
      is_a_seller: false
    },
    {
      first_name: 'Okekwe',
      last_name: 'Mtoube',
      email: 'jsmith@gmail.com',
      password: '1234',
      is_a_seller: false
    }
    ])

    # User.create(
    #   first_name: 'John',
    #   last_name: 'Smith',
    #   email: 'jsmith@gmail.com',
    #   password: '1234',
    #   is_a_seller: true
    # )

    @create_product1 = Product.create(
      [
        # {
        #   name: 'SIGNORE THE OXFORD',
        #   description: 'Prices include all VAT, GST, Sales Taxes and Customs Duties and Taxes where applicable., Color:, Cinnamon Brown, Leather, Luxury Calfskin Leather',
        #   store_id: 2,
        #   images: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sognarefashion.com%2Fshop%2Fmens-shoes%2Fsignore-the-oxford%2F&psig=AOvVaw2q6SzPK9Uldky6TDNOsD1g&ust=1594853963267000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDNx5HszeoCFQAAAAAdAAAAABAL',
        #   price: '$1989',
        #   quantity: 10
        # },
        # {
        #   name: 'Phenkang',
        #   description: 'Mens Formal Shoes Genuine Leather Oxford Shoes For Men Italian 2020 Dress Shoes Wedding Laces Leather Business Shoes',
        #   store_id: 2,
        #   images: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jomashop.com%2Femporio-armani-watch-ar2458.html&psig=AOvVaw3f4Y8g0KLG3-vQRMDFRaYC&ust=1594852347661000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDjno_mzeoCFQAAAAAdAAAAABAL',
        #   price: '$57.71',
        #   quantity: 20
        # },
        # {
        #   name: 'DA\'VINCI 4104',
        #   description: 'Women\'s Davinci Italian Dressy/Casual Leather Shoes 4104, with snake toe, Italian leather shoes, dressy as well as casual you will love wearing those',
        #   store_id: 2,
        #   images: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FDAVINCI-Womens-Italian-leather-shoes%2Fdp%2FB00LQMF04W&psig=AOvVaw30E8uDQD7Oh-ltU_j2yQYv&ust=1594854465758000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCarYHuzeoCFQAAAAAdAAAAABAE',
        #   price: '$129',
        #   quantity: 24
        # },
        # {
        #   name: 'Vobaga toilet paper',
        #   description: 'VOBAGA customized familia soft hemp toilet tissue paper, US $ 0.25 - 0.59 / Roll, Toilet Tissue, Virgin Wood Pulp, Core.Source from Shenzhen Tonish',
        #   store_id: 3,
        #   images: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftonish.en.alibaba.com%2Fproduct%2F62049465703-810379715%2FVOBAGA_customized_familia_soft_hemp_toilet_tissue_paper.html&psig=AOvVaw3smkTsJAKH-FOBZHpLBc26&ust=1594854742925000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi6pYXvzeoCFQAAAAAdAAAAABAK',
        #   price: '$0.59',
        #   quantity: 10
        # },
        # {
        #   name: 'Ajax Multi-Purpose Cleaner Powder Cleanser NWT',
        #   description: 'Pack of 3 Ajax Multi-Purpose Cleaner Powder Cleanser with Bleach, 28 oz',
        #   store_id: 3,
        #   images: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fposhmark.com%2Flisting%2FAjax-MultiPurpose-Cleaner-Powder-Cleanser-5d459531bbf07673b9a7926a&psig=AOvVaw0Mq9UInMYEO7V-nSy7fP5y&ust=1594854937066000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiF9eHvzeoCFQAAAAAdAAAAABAE',
        #   price: '$10.71',
        #   quantity: 120
        # },
        {
          name: 'Purell Hand Sanitizer',
          description: 'Pack of 3 hand sanitizdr bottle',
          store_id: 3,
          images: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inlander.com%2Fspokane%2Fyou-might-be-buying-a-hand-sanitizer-that-wont-work-for-coronavirus%2FContent%3Foid%3D19237361&psig=AOvVaw02uauedzjzE6q5lqts7oOR&ust=1594855087631000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjo0K3wzeoCFQAAAAAdAAAAABAD',
          price: '$12',
          quantity: 224
        }
  
        ])