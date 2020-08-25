class CharactersController < ApplicationController

    def index 
        user = User.find_by(id: params[:user_id])
        characters = user.characters
        render json: characters
    end

    def create
        
        character = Character.create({name: params[:name], user_id: params[:user_id], type_id: params[:type_id], blessing_id: params[:blessing_id], curse_id: params[:curse_id], race_id: params[:race_id], level: params[:level], image: params[:image], coins: params[:coins], background: params[:background], notes: params[:notes]})

        render json: character

    end

    def update



    end


end