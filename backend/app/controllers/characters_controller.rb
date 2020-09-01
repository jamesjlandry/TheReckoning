class CharactersController < ApplicationController

    def index 
        user = User.find_by(id: params[:user_id])
        characters = user.characters
        render json: characters
    end

    def create
        
        character = Character.create({name: params[:name], user_id: params[:user_id], type_id: params[:type_id], blessing_id: params[:blessing_id], curse_id: params[:curse_id], race_id: params[:race_id], level: params[:level], image: params[:image], coins: params[:coins], background: params[:background], notes: params[:notes], strength: params[:strength], charisma: params[:charisma], wisdom: params[:wisdom], dexterity: params[:dexterity], magic: params[:magic], recovery: params[:recovery], starting_stat_id: params[:starting_stat_id], xp: params[:xp], status: params[:status], recovery_pool: params[:recovery_pool], strength_pool: params[:strength_pool], dexterity_pool: params[:dexterity_pool], wisdom_pool: params[:wisdom_pool], charisma_pool: params[:charisma_pool], magic_pool: params[:magic_pool], hp: params[:hp], armor_cost: params[:armor_cost], equipped_armor_id: params[:equipped_armor_id], armor_ids: params[:armor_ids], weapon_ids: params[:weapon_ids], equipment_ids: params[:equipment_ids], type_level_ids: params[:type_level_ids], blessing_level_ids: params[:blessing_level_ids], curse_level_ids: params[:curse_level_ids], skill_ids: params[:skill_ids]})

        render json: character

    end

    def update



    end


end