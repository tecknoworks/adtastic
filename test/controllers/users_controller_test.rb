require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get users index" do
    get users_index_url
    assert_respon
   end
   
end
