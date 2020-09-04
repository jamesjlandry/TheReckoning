class CreateCharacterArmors < ActiveRecord::Migration[6.0]
  def change
    create_table :character_armors do |t|
      t.integer :character_id
      t.integer :armor_id

      t.timestamps
    end
  end
end
