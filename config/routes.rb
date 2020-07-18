Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # resources :users , only: :create

    resources :users    
       resources :stores do
         resources :products
       
   end
   resources :carts

   



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
