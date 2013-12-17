require "jekyll-assets"
require "jekyll-assets/compass"
require "sprockets"

bower_components = File.expand_path("../bower_components", __dir__)

%w[ foundation/scss foundation/js jquery modernizr jquery.stellar ].each do |path|
  Sprockets.append_path File.join(bower_components, path)
end
