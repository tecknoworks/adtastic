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
  post 'tags/multiple' => 'tags#create_multiple'

  get 'contents' => 'contents#index'
  post 'contents' => 'contents#create'
  delete 'contents' => 'contents#destroy'
  put 'contents' => 'contents#update'
  patch 'contents' => 'contents#update'

  get 'content_tags' => 'content_tags#index'
  post 'content_tags' => 'content_tags#create'
  delete 'content_tags' => 'content_tags#destroy'
  put 'content_tags' => 'content_tags#update'
  patch 'content_tags' => 'content_tags#update'
  post 'content_tags/multiple' => 'content_tags#create_multiple'

  get 'playlists' => 'playlists#index'
  post 'playlists' => 'playlists#create'
  delete 'playlists' => 'playlists#destroy'
  put 'playlists' => 'playlists#update'
  patch 'playlists' => 'playlists#update'
  get 'playlist/play' => 'playlist#playlistForDevice'

  get 'playlist_items' => 'playlist_items#index'
  post 'playlist_items' => 'playlist_items#create'
  delete 'playlist_items' => 'playlist_items#destroy'
  put 'playlist_items' => 'playlist_items#update'
  patch 'playlist_items/multiple' => 'playlist_items#create_multiple'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
