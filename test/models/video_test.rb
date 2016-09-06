require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'video test' do
    v = Video.new(name: 'testvideo')
    v.save
    result = Video.find(v.id).name
    assert_equal(result, 'testvideo', "Name don't match")
  end
end
