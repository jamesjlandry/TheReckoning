class CreateStartingStats < ActiveRecord::Migration[6.0]
  def change
    create_table :starting_stats do |t|
      t.integer :type_id
      t.integer :race_id
      t.integer :strength
      t.integer :dexterity
      t.integer :charisma
      t.integer :wisdom
      t.integer :magic
      t.integer :remaining_stat_points
      t.integer :skill_slots

      t.timestamps
    end
  end
end
