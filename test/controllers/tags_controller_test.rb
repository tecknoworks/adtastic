require 'test_helper'

class TagsControllerTest < ActionDispatch::IntegrationTest
  test "should get tags index" do
    get tags_index_url
    assert_response :success
  end

  test "should get create" do
    get tags_create_url
    assert_response :success
  end

  test "should get new" do
    get tags_new_url
    assert_response :success
  end

  test "should get remove" do
    get tags_remove_url
    assert_response :success
  end

  test "should get update" do
    get tags_update_url
    assert_response :success
  end

  test "should get tag_params" do
    get tags_tag_params_url
    assert_response :success
  end

end
