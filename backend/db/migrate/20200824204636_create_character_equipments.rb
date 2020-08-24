class CreateCharacterEquipments < ActiveRecord::Migration[6.0]
  def change
    create_table :character_equipments do |t|
      t.integer :character_id
      t.integer :equipment_id

      t.timestamps
    end
  end
end
