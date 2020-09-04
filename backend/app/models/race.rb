class Race < ApplicationRecord
    has_many :characters
    has_many :starting_stats
end
