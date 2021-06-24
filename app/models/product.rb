class Product < ApplicationRecord
  belongs_to :seller
  has_one :address
end
