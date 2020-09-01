class Blessing < ApplicationRecord
    has_many :characters
    has_many :blessing_levels
    has_many :curse_levels
end
