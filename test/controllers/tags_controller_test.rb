require 'test_helper'

class TagsControllerTest < ActionDispatch::IntegrationTest
  
  test "should get tags index" do
    get '/tags.json'
    assert_response :success
  end

end
