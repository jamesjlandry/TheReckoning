class CreateBlessings < ActiveRecord::Migration[6.0]
  def change
    create_table :blessings do |t|
      t.string :name
      t.string :text
      t.string :curse_name
      t.string :curse_text
      t.timestamps
    end
  end
end
