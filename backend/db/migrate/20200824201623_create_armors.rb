class CreateArmors < ActiveRecord::Migration[6.0]
  def change
    create_table :armors do |t|
      t.string :name
      t.string :style
      t.integer :defense
      t.string :text
      t.integer :cost
      t.timestamps
    end
  end
end
