require 'rails_helper'

RSpec.describe PhotosController, type: :controller do

  describe "GET #index" do
    it "should get photos index" do
      get :index
      expect(response).to have_http_status :ok
    end
  end

  describe "POST #create" do
    it "should increase photos count" do
      current = Photo.count
      post :create, params: { photo: { name: "Photo1", res_x: 1920, res_y: 1080 } }
      expect(response).to have_http_status :ok
      expect(Photo.count).to be_equal(current + 1)
    end
  end

  describe "DELETE #destroy" do
    it "should delete photo" do
      current = Photo.count
      u = Photo.new( name: "Photo1", res_x: 1920, res_y: 1080 )
      u.save
      idx = u.id
      delete :destroy, params: { id: idx }
      expect(response).to have_http_status :no_content
      expect(Photo.count).to be_equal(current)
    end
  end

  describe "PUT #update" do
    it "should update photo" do
      u = Photo.new( name: "Photo1", res_x: 1920, res_y: 1080 )
      e = u.name
      u.save
      idx = u.id
      put :update, params: { id: idx, photo: { name: 'OK' } }
      expect(response).to have_http_status :ok
      expect(Photo.find(idx).name).not_to eq(e)
    end
  end

end
