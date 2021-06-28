class Api::ProductsController < ApplicationController
  
  def all_categories
    render json: Product.all_categories
  end

end
