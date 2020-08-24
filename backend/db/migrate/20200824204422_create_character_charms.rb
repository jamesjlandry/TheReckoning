class CreateCharacterCharms < ActiveRecord::Migration[6.0]
  def change
    create_table :character_charms do |t|
      t.integer :character_id
      t.integer :charm_id

      t.timestamps
    end
  end
end
