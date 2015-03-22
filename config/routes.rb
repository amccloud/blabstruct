Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]

  resources :blabs, only: [:index, :create, :show]

  match '*all', to: 'application#index', via: [:get]
end
