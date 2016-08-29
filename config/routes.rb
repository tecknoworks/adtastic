Rails.application.routes.draw do

  #get 'user/index', to: "users#index"
  
  #post 'user/new', to: "users#new"
  #post 'user/create', to "users#create"
  #delete 'user/remove', to: "users#remove"
  #put 'user/update', to: "users#update"
  resources :users, only: [:index]
  resources :photos, only: [:index]
  resources :videos, only: [:index]
  resources :devices, only: [:index] 
  resources :tags, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
