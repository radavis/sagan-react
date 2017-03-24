require "sinatra"
require "sinatra/activerecord"

require "./models/application_record"
require "./models/category"
require "./models/link"

set :database_file, "./config/database.yml"

get "/api/v1/categories" do
  Category.all.to_json
end

post "/api/v1/links" do
  data = JSON.parse(request.body.read)
  puts data
  category = Category.find(data["category_id"])
  link = category.links.build(data)

  if link.save
    status 201
  else
    status 422
  end
end

get "/api/v1/categories/:category_id/links" do |category_id|
  category = Category.find(category_id)
  category.links.to_json
end
