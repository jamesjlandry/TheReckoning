class Curse < ApplicationRecord
    has_many :characters
    has_many :curse_levels
end
