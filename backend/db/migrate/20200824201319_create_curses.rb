class CreateCurses < ActiveRecord::Migration[6.0]
  def change
    create_table :curses do |t|
      t.string :name
      t.string :text

      t.timestamps
    end
  end
end
