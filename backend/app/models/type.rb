class Type < ApplicationRecord
    has_many :starting_stats
    has_many :characters
    has_many :type_tiers
end
