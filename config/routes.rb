Rails.application.routes.draw do
  get 'users/index'

  get 'user/index'

  get 'user_controller/index', to: "user_controller#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
