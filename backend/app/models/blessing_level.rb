class BlessingLevel < ApplicationRecord
    belongs_to :blessing
    has_many :character_blessing_abilities
    has_many :characters, through: :character_blessing_abilities
end
