class CurseLevel < ApplicationRecord
    belongs_to :curse
    has_many :character_curse_abilities
    has_many :characters, through: :character_curse_abilities
end
