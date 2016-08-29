require 'test_helper'

class PhotosControllerTest < ActionDispatch::IntegrationTest
  test "should get photos index" do
    get photos_index_url
    assert_response :success
  end

  test "should get create" do
    get photos_create_url
    assert_response :success
  end

  test "should get new" do
    get photos_new_url
    assert_response :success
  end

  test "should get index" do
    get photos_index_url
    assert_response :success
  end

  test "should get remove" do
    get photos_remove_url
    assert_response :success
  end

  test "should get update" do
    get photos_update_url
    assert_response :success
  end

end
