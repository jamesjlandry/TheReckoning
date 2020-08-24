class CreateCharacterTypeAbilities < ActiveRecord::Migration[6.0]
  def change
    create_table :character_type_abilities do |t|
      t.integer :character_id
      t.integer :type_level_id

      t.timestamps
    end
  end
end
