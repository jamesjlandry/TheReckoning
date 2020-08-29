class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :type_id
      t.integer :blessing_id
      t.integer :race_id
      t.integer :user_id
      t.integer :level
      t.string :image
      t.integer :coins
      t.string :background
      t.string :notes
      t.integer :strength
      t.integer :charisma
      t.integer :wisdom
      t.integer :magic
      t.integer :recovery
      t.integer :strength_pool
      t.integer :dexterity_pool
      t.integer :charisma_pool
      t.integer :wisdom_pool
      t.integer :magic_pool
      t.integer :starting_stat_id
      t.integer :xp
      t.integer :hp
      t.string  :status
      t.integer :recovery_pool
      t.integer :armor_cost
      t.integer :equipped_armor_id
      t.timestamps
    end
  end
end
