require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get users index" do
    get '/users.json'
    assert_response :success
  end

  test "should increase post count" do
  	current = User.count
  	post "/users.json", params: { users: { password: "pwd", email: "t@t.t", user_type: true } }
  	assert_response :success
  	assert User.count == current + 1
  end

end
