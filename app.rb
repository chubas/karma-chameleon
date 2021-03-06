require 'rubygems'
require 'rack-flash'
require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/redirect_with_flash'
require 'sinatra/reloader' if development?
require 'sass'
require 'erb'

Tilt.register "html.erb", Tilt[:erb]

get '/' do
  erb :index
end

get '/styles/*' do
  content_type 'text/css'
  scss '../styles/'.concat(params[:splat].join.chomp('.css')).to_sym
end