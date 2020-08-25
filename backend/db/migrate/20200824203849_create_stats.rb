class CreateStats < ActiveRecord::Migration[6.0]
  def change
    create_table :stats do |t|
      t.integer :character_id
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
      t.integer :armor_id
      t.integer :armor_cost
      t.timestamps
    end
  end
end
