require 'rails_helper'

RSpec.describe DevicesController, type: :controller do

  describe "GET #index" do
    it "should get devices index" do
      get :index, :format => 'json'
      expect(response).to have_http_status :ok
    end
  end

  describe "POST #create" do
    it "should increase device count" do
      current = Device.count
      post :create, params: { device: { name: "device1", res_x: 1920, res_y: 1080 } }, :format => 'json'
      expect(response).to have_http_status :ok
      expect(Device.count).to be_equal(current + 1)
    end
  end

  describe "DELETE #destroy" do
    it "should delete device" do
      current = Device.count
      u = Device.new(name: "device1", res_x: 1920, res_y: 1080)
      u.save
      idx = u.id
      delete :destroy, params: { id: idx }, :format => 'json'
      expect(response).to have_http_status :ok
      expect(Device.count).to be_equal(current)
    end
  end

  describe "PUT #update" do
    it "should update device" do
      u = Device.new(name: "device1", res_x: 1920, res_y: 1080)
      e = u.name
      u.save
      idx = u.id
      put :update, params: { id: idx, device: { name: 'NewName' } }, :format => 'json'
      expect(response).to have_http_status :ok
      expect(Device.find(idx).name).not_to eq(e)
    end
  end

end
