###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.add_import_path "#{root}/bower_components/foundation/scss"
  config.output_style = :expanded
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
helpers do
  def p(path, locale=I18n.locale)
    localized_path = path[0] == '/' ? path : '/' + t(path, scope: :paths, locale: locale)
    prefix = locale != :hu ? "/#{locale}" : ''
    suffix = localized_path[-1] != '/' && localized_path.index('.').nil? ? '/' : ''
    "#{prefix}#{localized_path}#{suffix}"
  end

  def on_page?(path)
    current_page.url == p(path)
  end

  def menu_link(key, path, locale=I18n.locale)
    full_path = p(path, locale)
    return if current_page.url == full_path
    content_tag :li do
      link_to t(key, scope: :menu, locale: locale), full_path
    end
  end

  def current_page_id
    page_id = File.basename(current_page.source_file).split('.').first
    page_id == 'index' ? '/' : page_id
  end
end

###
# Extensions
###

# Enable internationalization, with Hungarian as default language
activate :i18n, mount_at_root: :hu, templates_dir: 'pages'

# Use pretty urls
activate :directory_indexes

# Reload the browser automatically whenever files change
activate :livereload, host: 'fjk.dev'

###
# Paths
###

set :css_dir,    'stylesheets'
set :js_dir,     'javascripts'
set :images_dir, 'images'

ready do
  %w[ modernizr jquery foundation/js jquery.stellar audiojs/audiojs momentjs ].each do |path|
    sprockets.append_path "#{root}/bower_components/#{path}"
  end
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
