Rails.application.routes.draw do
  get '/logged_in', to: 'sessions#logged_in'
  post '/login', to: 'sessions#login'
  delete '/log_out', to: 'sessions#log_out'
  resources :users
  resources :characters
  resources :stats
  resources :skills
  resources :blessings
  resources :curses
  resources :types
  resources :equipments
  resources :armors
  resources :weapons
  resources :artifacts
  resources :charms
  resources :races
  resources :starting_stats
  resources :character_weapons
  resources :character_equipments
  resources :character_armors
  resources :character_charms
  resources :character_artifacts
  resources :character_skills
  resources :character_blessing_abilities
  resources :character_curse_abilities
  resources :character_type_abilities
  resources :blessing_levels
  resources :curse_levels
  resources :type_levels
  resources :options
end
