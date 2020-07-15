class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.integer :quantity
      t.string :payment_method
      t.boolean :is_paid
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
