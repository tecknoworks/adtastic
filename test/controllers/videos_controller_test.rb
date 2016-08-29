require 'test_helper'

class VideosControllerTest < ActionDispatch::IntegrationTest
  test "should get videos index" do
    get videos_index_url
    assert_response :success
  end

  test "should get create" do
    get videos_create_url
    assert_response :success
  end

  test "should get new" do
    get videos_new_url
    assert_response :success
  end

  test "should get index" do
    get videos_index_url
    assert_response :success
  end

  test "should get remove" do
    get videos_remove_url
    assert_response :success
  end

  test "should get update" do
    get videos_update_url
    assert_response :success
  end

end
