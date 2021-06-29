class CategoriesController < ApplicationController
  def index
    render json: Product.categories
  end
end
