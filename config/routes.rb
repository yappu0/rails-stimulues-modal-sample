Rails.application.routes.draw do
  get 'homes/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "homes#index"
end
