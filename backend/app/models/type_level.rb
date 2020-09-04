class TypeLevel < ApplicationRecord
    belongs_to :type 
    has_many :character_type_abilities
    has_many :characters, through: :character_type_abilities
end
