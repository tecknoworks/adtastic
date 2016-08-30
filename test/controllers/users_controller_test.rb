require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get users index" do
    get '/users.json'
    assert_response :success
  end

  test "should increase post count" do
  	current = User.count
  	post "/users.json", params: { user: { password: "pwd", email: "t@t.t", user_type: true } }
  	assert_response :success
  	assert User.count == current + 1
  end

  test "should delete post" do
  	current = User.count
  	u = User.new(password: 'pwd', email: 't#t.v', user_type: true)
  	u.save
  	idx = u.id
  	delete "/user.json", params: { id: idx }
  	assert_response :success
  	assert User.count == current
  end

  test "should update thingy Mc'Bobber" do
  	u = User.new(password: 'pwd', email: 't#t.v', user_type: true)
  	e = u.email
  	u.save
  	idx = u.id
  	put "/users.json", params: { id: idx, user: { email: 'OK' } }
  	assert_response :success
  	assert_not_equal(User.find(idx).email, e, "EMAIL NOT MODIFIED")
  end

end
