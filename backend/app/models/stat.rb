class Stat < ApplicationRecord
    belongs_to :character
    belongs_to :starting_stat
    belongs_to :armor
end
