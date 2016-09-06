Apipie.configure do |config|
  config.app_name                = 'Adtastic'
  config.api_base_url            = '/'
  config.doc_base_url            = '/apipie'
  # where is your API defined?
  config.api_controllers_matcher = "#{Rails.root}/app/controllers/**/*.rb"

  config.validate = false
end
