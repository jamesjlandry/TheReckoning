class Character < ApplicationRecord
    belongs_to :user
    belongs_to :type
    belongs_to :blessing
    belongs_to :race
    belongs_to :curse
    belongs_to :starting_stat
    has_many :stats
    has_many :character_skills
    has_many :skills, through: :character_skills
    has_many :character_artifacts
    has_many :artifacts, through: :character_artifacts
    has_many :character_equipments
    has_many :equipments, through: :character_equipments
    has_many :character_armors
    has_many :armors, through: :character_armors
    has_many :character_charms
    has_many :charms, through: :character_charms
    has_many :character_type_abilities
    has_many :type_levels, through: :character_type_abilities
    has_many :character_weapons
    has_many :weapons, through: :character_weapons
    has_many :character_blessing_abilities
    has_many :blessing_levels, through: :character_blessing_abilities
    has_many :character_curse_abilities
    has_many :curse_levels, through: :character_curse_abilities
    belongs_to :equipped_armor, class_name: 'Armor'
end
