require 'test_helper'

class TagsControllerTest < ActionDispatch::IntegrationTest
  test "should get tags index" do
    get tags_index_url
    assert_response :success
  end
  
end
