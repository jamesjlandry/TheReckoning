class CharacterBlessingAbility < ApplicationRecord
    belongs_to :blessing_level
    belongs_to :character
end
