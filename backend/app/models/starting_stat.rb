class StartingStat < ApplicationRecord
    belongs_to :type
    belongs_to :race
    has_many :stats
end
