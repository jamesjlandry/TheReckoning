class CharacterEquipment < ApplicationRecord
    belongs_to :equipment 
    belongs_to :character
end
