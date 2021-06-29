class Api::ProductsController < ApplicationController
  def index
    render json: Product.available
  end

  def all_categories
    category = params[:category]
    render json: Product.all_categories(category)
  end

end
