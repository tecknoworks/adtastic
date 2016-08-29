require 'test_helper'

class PhotosControllerTest < ActionDispatch::IntegrationTest
  test "should get photos index" do
    get '/index'
    assert_response :success
  end

end
