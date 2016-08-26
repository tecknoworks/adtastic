require 'test_helper'

class UserControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get user_controller_index_url
    assert_response :success
  end

end
