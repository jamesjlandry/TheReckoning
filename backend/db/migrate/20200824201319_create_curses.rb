class CreateCurses < ActiveRecord::Migration[6.0]
  def change
    create_table :curses do |t|
      t.string :name
      t.string :text
      t.integer :blessing_id
      t.timestamps
    end
  end
end
