class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :zip
      t.string :city
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
