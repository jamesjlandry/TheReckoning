class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :type_id
      t.integer :blessing_id
      t.integer :race_id
      t.integer :user_id
      t.integer :curse_id
      t.integer :level
      t.string :image
      t.integer :coins
      t.string :background
      t.string :notes

      t.timestamps
    end
  end
end
