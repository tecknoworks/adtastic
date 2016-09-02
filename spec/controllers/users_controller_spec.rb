require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #index" do
    it "should get users index" do
      get :index, :format => 'json'
      expect(response).to have_http_status :ok
    end
  end

  describe "POST #create" do
    it "should increase post count" do
      current = User.count
      post :create, params: { user: { password: "pwd", email: "t@t.t", user_type: true } }, :format => 'json'
      expect(response).to have_http_status :ok
      expect(User.count).to be_equal(current + 1)
    end
  end

  describe "DELETE #destroy" do
    it "should delete post" do
      current = User.count
      u = User.new(password: 'pwd', email: 't#t.v', user_type: true)
      u.save
      idx = u.id
      delete :destroy, params: { id: idx }, :format => 'json'
      expect(response).to have_http_status :ok
      expect(User.count).to be_equal(current)
    end
  end

  describe "PUT #update" do
    it "should update user" do
      u = User.new(password: 'pwd', email: 't#t.v', user_type: true)
      e = u.email
      u.save
      idx = u.id
      put :update, params: { id: idx, user: { email: 'OK' } }, :format => 'json'
      expect(response).to have_http_status :ok
      expect(User.find(idx).email).not_to eq(e)
    end
  end

end
