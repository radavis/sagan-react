require "sinatra"
require "sinatra/activerecord"

require "./models/application_record"
require "./models/category"
require "./models/link"

set :database_file, "./config/database.yml"

get "/api/v1/categories" do
  Category.all.to_json
end

get "/api/v1/links" do
  Links.all.to_json
end
