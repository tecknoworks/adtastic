require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should have a name' do
  	u = User.new(email: 'foo')
  	u.save

  	result = User.find(u.id).email
  	expect(result).to eq u.email
  end
end
