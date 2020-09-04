class CreateWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :weapons do |t|
      t.string :name
      t.string :style
      t.integer :damage
      t.string :text
      t.integer :cost

      t.timestamps
    end
  end
end
