links = [
  {
    title: "My Blog",
    url: "https://radavis.github.io/",
    category_name: "Programming"
  },
  {
    title: "Horizon",
    url: "https://learn.launchacademy.com/",
    description: "Launch Academy's online learning platform.",
    category_name: "Work"
  },
  {
    url: "http://cssreference.io/",
    category_name: "HTML and CSS"
  },
  {
    url: "https://javascript30.com/",
    category_name: "JavaScript"
  },
  {
    url: "http://www.nomnoml.com/",
    category_name: "Programming"
  },
  {
    title: "Developer Roadmap 2017",
    url: "https://github.com/kamranahmedse/developer-roadmap",
    category_name: "Programming"
  },
  {
    title: "Rosetta Code",
    url: "http://rosettacode.org/wiki/Category:Programming_Languages",
    category_name: "Programming"
  },
]

links.each do |link|
  category = Category.find_or_create_by(name: link[:category_name])
  link = Link.find_or_initialize_by({
    title: link[:title],
    url: link[:url],
    description: link[:description],
    category: category
  })
  link.save!
  puts "Created link: #{link.url}"
end
