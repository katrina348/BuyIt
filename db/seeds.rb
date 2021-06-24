# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

categories = [
  'Wood Working',
  'Knitting/Crochet',
  "Kid's Crafts",
  'Acrylic Pouring',
  'Leatherworking',
  'Resin Crafts',
  'Bead Art',
  'Miniatures',
  'Gardening'
  ]
    100.times do
    s = Seller.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    phone: Faker::PhoneNumber.cell_phone
    )
      50.times do
      num_categories = rand(0..categories.length - 1);
      Buyer.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email,
      phone: Faker::PhoneNumber.cell_phone,
      max_price: rand(5..25),
      categories: categories.sample(num_categories),
      seller_id: s.id
      )
      end
        50.times do
        sold = Faker::Boolean.boolean(true_ratio: 0.3)
        price = rand(1..15)
        p = Product.create(
        name: Faker::Food.ingredient,
        price: price,
        category: categories.sample,
        sold: sold,
        seller_id: s.id
        )
    p.create_address(
    zip: Faker::Address.zip_code,
    city: Faker::Address.city,
    )
    end
  end
  puts "seeded"