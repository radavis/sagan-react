class AddLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :links do |t|
      t.string :title
      t.string :url, null: false
      t.string :description
      t.timestamps null: false
    end
  end
end
