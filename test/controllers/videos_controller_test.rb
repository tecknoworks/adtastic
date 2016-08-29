require 'test_helper'

class VideosControllerTest < ActionDispatch::IntegrationTest
  test "should get videos index" do
    get videos_index_url
    assert_response :success
  end
end
