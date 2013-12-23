require 'i18n'

I18n.enforce_available_locales = true
I18n.load_path += Dir['_i18n/*.yml']
I18n.default_locale = :hu

module JekyllI18n
  module TranslateFilter
    def translate(input, context=nil)
      return unless input

      text = input.strip

      I18n.locale = (context || @context).registers[:page]['lang'].to_sym
      I18n.t text, default: text
    end

    alias_method :t, :translate
  end

  class TranslateTag < Liquid::Tag
    include TranslateFilter

    def initialize(tag, text, tokens)
      super
      @text = text
    end

    def render(context)
      translate(@text, context)
    end
  end

  module UrlLangifier
    def url
      super
      lang = data['lang']
      return @url if lang.nil? or lang == I18n.default_locale.to_s or @url =~ %r{^/#{lang}/}
      @url = "/#{lang}" + @url.sub(/\.#{lang}(\.[^.]*)$/, '\1')
    end
  end
end

module Jekyll
  module Convertible

    alias_method :read_yaml_without_lang, :read_yaml
    def read_yaml(base, name, opts = {})
      read_yaml_without_lang(base, name, opts)

      lang = name.split('.')[-2]
      lang = I18n.default_locale.to_s unless I18n.locale_available?(lang)

      data['lang'] = lang
      data['tags'] ||= []
      data['tags'] << lang
      data
    end

    alias_method :render_liquid_without_lang, :render_liquid
    def render_liquid(content, payload, info, path = nil)
      info[:registers][:page]['lang'] = data['lang']
      render_liquid_without_lang(content, payload, info, path)
    end
  end

  class Page
    prepend JekyllI18n::UrlLangifier
  end

  class Post
    prepend JekyllI18n::UrlLangifier
  end
end

Liquid::Template.register_tag 't', JekyllI18n::TranslateTag
Liquid::Template.register_filter JekyllI18n::TranslateFilter
