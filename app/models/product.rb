class Product < ApplicationRecord
  belongs_to :seller
  has_many :categories
  
  def self.available
    select('s.first_name, s.last_name, s.email, s.id AS seller_id, p.name, p.price, p.category,  sold,  p.id AS product_id,  city,  zip')
      .from('sellers AS s')
      .joins('INNER JOIN products AS p ON p.seller_id = s.id')
      .where("LOWER(p.category) = ? AND p.sold <> ? TRUE")
      .order('s.id')
  end

  def self.all_categories(category)
    select('DISTINCT category' )
    .from('products AS p').to_json(except: :id)
  end

end
