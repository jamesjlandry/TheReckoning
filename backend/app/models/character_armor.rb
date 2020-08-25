class CharacterArmor < ApplicationRecord
    belongs_to :character 
    belongs_to :armor
end
