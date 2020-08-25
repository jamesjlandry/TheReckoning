class CharacterArtifact < ApplicationRecord
    belongs_to :artifact 
    belongs_to :character 
end
