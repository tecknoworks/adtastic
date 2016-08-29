require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get users index" do
    get '/users.json'
    assert_response :success
   end

end
