Rails.application.routes.draw do

  apipie
  #get 'user/index', to: "users#index"
  
  #post 'user/new', to: "users#new"
  #post 'user/create', to "users#create"
  resources :users, only: [:create]
  #resources :users, only: [:destroy]
  delete 'users' => 'users#destroy'
  put 'users' => 'users#update'
  patch 'users' => 'users#update'

  #delete 'user/remove', to: "users#remove"
  #put 'user/update', to: "users#update"
  resources :users, only: [:index]
  resources :photos, only: [:index]
  resources :videos, only: [:index]
  resources :devices, only: [:index] 
  resources :tags, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
