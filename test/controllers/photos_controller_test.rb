require 'test_helper'

class PhotosControllerTest < ActionDispatch::IntegrationTest
  test 'should get photos index' do
    get '/photos.json'
    assert_response :success
  end
end
