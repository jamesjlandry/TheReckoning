class CharacterCurseAbility < ApplicationRecord
    belongs_to :curse_level
    belongs_to :character
end
