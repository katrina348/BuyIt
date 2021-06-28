
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/products', to:'products#index'
    get '/all_categories', to:'products#all_categories'
  end
end
