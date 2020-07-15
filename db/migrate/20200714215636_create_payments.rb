class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.string :card_info
      t.string :paypal_info
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
