class AddCategoryToLinks < ActiveRecord::Migration[5.0]
  def change
    add_reference :links, :category, null: false, index: true
  end
end
