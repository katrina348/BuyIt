class Product < ApplicationRecord
  belongs_to :seller
  
  def self.available
    select('s.first_name, s.last_name, s.email, s.id AS seller_id, p.name, p.price, p.category,  sold,  p.id AS product_id,  city,  zip')
      .from('sellers AS s')
      .joins('INNER JOIN products AS p ON p.seller_id = s.id')
      .where('p.sold <> TRUE')
      .order('s.id')
  end

  def self.all_categories
    select('DISTINCT category' )
    .from('products').to_json(except: :id)
  end

end
