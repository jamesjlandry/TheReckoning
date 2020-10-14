class Armor < ApplicationRecord
    
    has_many :character_armors
    has_many :characters, through: :character_armors
end
