require 'rails_helper'

RSpec.describe VideosController, type: :controller do
  describe 'GET #index' do
    it 'should get videos index' do
      get :index, format: 'json'
      expect(response).to have_http_status :ok
    end
  end

  describe 'POST #create' do
    it 'should increase videos count' do
      current = Video.count
      post :create, params: { video: { name: 'Video1', url: 'test.com/test' } }, format: 'json'
      expect(response).to have_http_status :ok
      expect(Video.count).to be_equal(current + 1)
    end
  end

  describe 'DELETE #destroy' do
    it 'should delete video' do
      current = Video.count
      u = Video.new(name: 'Video1', url: 'test.com/test')
      u.save
      idx = u.id
      delete :destroy, params: { id: idx }, format: 'json'
      expect(response).to have_http_status :ok
      expect(Video.count).to be_equal(current)
    end
  end

  describe 'PUT #update' do
    it 'should update video' do
      u = Video.new(name: 'Video1', url: 'test.com/test')
      e = u.name
      u.save
      idx = u.id
      put :update, params: { id: idx, video: { name: 'OK' } }, format: 'json'
      expect(response).to have_http_status :ok
      expect(Video.find(idx).name).not_to eq(e)
    end
  end
end
