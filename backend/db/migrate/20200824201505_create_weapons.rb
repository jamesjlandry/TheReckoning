class CreateWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :weapons do |t|
      t.string :name
      t.string :type
      t.string :damage
      t.string :text
      t.integer :cost

      t.timestamps
    end
  end
end
