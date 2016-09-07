Rails.application.routes.draw do
  apipie
  # get 'user/index', to: "users#index"

  # post 'user/new', to: "users#new"
  # #post 'user/create', to "users#create"
  # resources :users, only: [:create]
  # resources :users, only: [:destroy]

  # GET /users
  # GET /users/:id
  # PATCH /users/:id
  # POST /users
  # DELETE /users/:id

  get 'users' => 'users#index'
  post 'users' => 'users#create'
  delete 'users/:id' => 'users#destroy'
  put 'users' => 'users#update'
  patch 'users/:id' => 'users#update'
  post 'users/signin' => 'users#validate_sign_in'

  get 'devices' => 'devices#index'
  post 'devices' => 'devices#create'
  delete 'devices/:id' => 'devices#destroy'
  put 'devices' => 'devices#update'
  patch 'devices/:id' => 'devices#update'

  get 'tags' => 'tags#index'
  post 'tags' => 'tags#create'
  delete 'tags/:id' => 'tags#destroy'
  put 'tags' => 'tags#update'
  patch 'tags/:id' => 'tags#update'

  get 'photos' => 'photos#index'
  post 'photos' => 'photos#create'
  delete 'photos/:id' => 'photos#destroy'
  put 'photos' => 'photos#update'
  patch 'photos/:id' => 'photos#update'

  get 'videos' => 'videos#index'
  post 'videos' => 'videos#create'
  delete 'videos/:id' => 'videos#destroy'
  put 'videos' => 'videos#update'
  patch 'videos/:id' => 'videos#update'
  # delete 'user/remove', to: "users#remove"
  # #put 'user/update', to: "users#update"
  # resources :users, only: [:index]
  resources :photos, only: [:index]
  resources :videos, only: [:index]
  resources :devices, only: [:index]
  resources :tags, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
