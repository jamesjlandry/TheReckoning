class CreateCharacterArtifacts < ActiveRecord::Migration[6.0]
  def change
    create_table :character_artifacts do |t|
      t.integer :character_id
      t.integer :artifact_id

      t.timestamps
    end
  end
end
