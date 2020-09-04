class CharacterTypeAbility < ApplicationRecord
    belongs_to :type_level
    belongs_to :character
end
