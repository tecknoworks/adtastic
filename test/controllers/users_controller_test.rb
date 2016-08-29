require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get user_index_url
    assert_response :success
  end

  test "should create post" do
  	post :create, password: "test", email: "test@test.com", user_type: true
  end

end
