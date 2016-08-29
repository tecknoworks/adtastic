require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get user_index_url
    assert_response :success
  end

  test "should create post" do
#  	assert_difference('User.count') do
#  		post :'user/new', :post => {:password => 'password', :email => 't@t.t', :user_type => true}
#  	end
#
#  	assert_redirected_to post_path(assigns(:post))
  end

end
