class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :images
      t.string :description
      t.string :price
      t.integer :quantity
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
