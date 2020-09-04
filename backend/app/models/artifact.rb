class Artifact < ApplicationRecord
    has_many :character_artifacts
    has_many :characters, through: :character_artifacts
end
