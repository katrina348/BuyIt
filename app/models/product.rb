class Product < ApplicationRecord
  belongs_to :seller
  has_one :address

  # select s.first_name, s.last_name, sold, s.email, s.id AS seller_id, p.name, p.price, p.category, p.id AS product_id, city, zip
  # FROM sellers AS s
  # INNER JOIN products AS p ON p.seller_id = s.id
  # INNER JOIN addresses AS a ON a.product_id = p.id
  # WHERE p.sold <> TRUE
  # ORDER BY s.id
  
  def self.available
    select('s.first_name, 
      s.last_name, 
      sold, 
      s.email, 
      s.id AS seller_id, 
      p.name, 
      p.price, 
      p.category, 
      p.id AS product_id, 
      city, 
      zip')
      .from('sellers AS s')
      .joins('INNER JOIN products AS p ON p.seller_id = s.id
              INNER JOIN addresses AS a ON a.product_id = p.id')
      .where('p.sold <> TRUE')
      .order('s.id')
  end
end

