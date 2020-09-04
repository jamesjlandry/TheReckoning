class CreateCharacterBlessingAbilities < ActiveRecord::Migration[6.0]
  def change
    create_table :character_blessing_abilities do |t|
      t.integer :character_id
      t.integer :blessing_level_id

      t.timestamps
    end
  end
end
