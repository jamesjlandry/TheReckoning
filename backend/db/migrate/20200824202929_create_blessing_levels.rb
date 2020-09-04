class CreateBlessingLevels < ActiveRecord::Migration[6.0]
  def change
    create_table :blessing_levels do |t|
      t.string :name
      t.integer :blessing_id
      t.integer :level
      t.string :text

      t.timestamps
    end
  end
end
