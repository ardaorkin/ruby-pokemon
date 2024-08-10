class CreatePokemons < ActiveRecord::Migration[7.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :powers
      t.string :kind

      t.timestamps
    end
  end
end
