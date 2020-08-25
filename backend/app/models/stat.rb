class Stat < ApplicationRecord
    belongs_to :character
    belongs_to :starting_stat_id
    belongs_to :armor
end
