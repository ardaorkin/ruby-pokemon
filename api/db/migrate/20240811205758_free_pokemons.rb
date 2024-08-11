class FreePokemons < ActiveRecord::Migration[7.1]
  def change
    change_column_null :pokemons, :user_id, true
  end
end
