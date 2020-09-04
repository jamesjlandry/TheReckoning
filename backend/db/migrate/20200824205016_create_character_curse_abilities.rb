class CreateCharacterCurseAbilities < ActiveRecord::Migration[6.0]
  def change
    create_table :character_curse_abilities do |t|
      t.integer :character_id
      t.integer :curse_level_id

      t.timestamps
    end
  end
end
