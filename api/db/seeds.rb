# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Pokemon.create(name: 'Pikachu', powers: 'Electricity, Thunderbolt, Quick Attack', kind: 'Electric', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png')
Pokemon.create(name: 'Charmander', powers: 'Fire, Ember, Flamethrower', kind: 'Fire', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png')
Pokemon.create(name: 'Squirtle', powers: 'Water, Bubble, Water Gun', kind: 'Water', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png')
Pokemon.create(name: 'Bulbasaur', powers: 'Grass, Vine Whip, Razor Leaf', kind: 'Grass', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png')
Pokemon.create(name: 'Jigglypuff', powers: 'Normal, Sing, Pound', kind: 'Normal', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png')
Pokemon.create(name: 'Meowth', powers: 'Normal, Scratch, Pay Day', kind: 'Normal', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png')
# Pokemon.create(name: 'Psyduck', powers: 'Water, Water Gun, Confusion', kind: 'Water', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png')
# Pokemon.create(name: 'Machop', powers: 'Fighting, Karate Chop, Low Kick', kind: 'Fighting', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png')
# Pokemon.create(name: 'Geodude', powers: 'Rock, Tackle, Rock Throw', kind: 'Rock', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png')
# Pokemon.create(name: 'Gastly', powers: 'Ghost, Lick, Night Shade', kind: 'Ghost', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png')
# Pokemon.create(name: 'Magikarp', powers: 'Water, Splash, Tackle', kind: 'Water', image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png')
