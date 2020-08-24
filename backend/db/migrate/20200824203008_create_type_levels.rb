class CreateTypeLevels < ActiveRecord::Migration[6.0]
  def change
    create_table :type_levels do |t|
      t.string :name
      t.integer :type_id
      t.integer :level
      t.string :text

      t.timestamps
    end
  end
end
