Rails.application.routes.draw do
  apipie

  get 'users' => 'users#index'
  post 'users' => 'users#create'
  delete 'users' => 'users#destroy'
  put 'users' => 'users#update'
  patch 'users' => 'users#update'
  post 'users/signin' => 'users#validate_sign_in'

  get 'devices' => 'devices#index'
  post 'devices' => 'devices#create'
  delete 'devices' => 'devices#destroy'
  put 'devices' => 'devices#update'
  patch 'devices' => 'devices#update'

  get 'tags' => 'tags#index'
  post 'tags' => 'tags#create'
  delete 'tags' => 'tags#destroy'
  put 'tags' => 'tags#update'
  patch 'tags' => 'tags#update'

  get 'photos' => 'photos#index'
  post 'photos' => 'photos#create'
  delete 'photos' => 'photos#destroy'
  put 'photos' => 'photos#update'
  patch 'photos' => 'photos#update'

  get 'videos' => 'videos#index'
  post 'videos' => 'videos#create'
  delete 'videos' => 'videos#destroy'
  put 'videos' => 'videos#update'
  patch 'videos' => 'videos#update'

  get 'photo_tags' => 'photo_tags#index'
  post 'photo_tags' => 'photo_tags#create'
  delete 'photo_tags' => 'photo_tags#destroy'
  put 'photo_tags' => 'photo_tags#update'
  patch 'photo_tags' => 'photo_tags#update'

  get 'video_tags' => 'video_tags#index'
  post 'video_tags' => 'video_tags#create'
  delete 'video_tags' => 'video_tags#destroy'
  put 'video_tags' => 'video_tags#update'
  patch 'video_tags' => 'video_tags#update'

  resources :photos, only: [:index]
  resources :videos, only: [:index]
  resources :devices, only: [:index]
  resources :tags, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
