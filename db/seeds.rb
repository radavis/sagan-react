categories = [
  "HTML and CSS",
  "JavaScript",
  "Work",
  "Finance",
  "Retro Gaming",
  "3D Printing"
]

categories.each do |name|
  Category.find_or_create_by(name: name)
  puts "Adding Category: #{name}"
end
