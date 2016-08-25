class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :password
      t.string :email
      t.boolean :user_type

      t.timestamps
    end
  end
end
