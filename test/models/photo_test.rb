require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'Find_The_Name' do
    p = Photo.new(name: 'testPhoto')
    p.save
    result = Photo.find(p.id).name
    assert_equal(result, 'testPhoto', 'Names do not match')
  end
end
