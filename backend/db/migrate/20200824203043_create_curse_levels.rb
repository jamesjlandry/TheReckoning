class CreateCurseLevels < ActiveRecord::Migration[6.0]
  def change
    create_table :curse_levels do |t|
      t.string :name
      t.integer :curse_id
      t.integer :level
      t.string :text

      t.timestamps
    end
  end
end