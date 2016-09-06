require 'test_helper'

class DevicesControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test 'should get devices index' do
    get '/devices.json'
    assert_response :success
  end
end
