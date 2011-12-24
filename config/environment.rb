
RAILS_GEM_VERSION = '2.3.8' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|

  config.gem "curb", :lib => "curl"
  config.gem "jammit"
  config.gem "nokogiri"
  config.gem "delayed_job", :version => '~>2.0.5'
  config.gem "fastercsv"
  config.time_zone = 'Eastern Time (US & Canada)'

end
PIXEL_CONFIG = JSON.parse(File.read("#{Rails.root}/config/pixel-ping.#{Rails.env}.json")).symbolize_keys
PIXEL_SECRET = PIXEL_CONFIG[:secret]
