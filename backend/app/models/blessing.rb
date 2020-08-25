class Blessing < ApplicationRecord
    has_many :characters
    has_many :blessing_levels
end
