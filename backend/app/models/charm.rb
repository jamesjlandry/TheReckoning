class Charm < ApplicationRecord
    has_many :character_charms
    has_many :characters, through: :character_charms
end
