require 'rails_helper'

RSpec.describe TagsController, type: :controller do
  describe 'GET #index' do
    it 'should get tags index' do
      get :index, format: 'json'
      expect(response).to have_http_status :ok
    end
  end

  describe 'POST #create' do
    it 'should increase tag count' do
      current = Tag.count
      post :create, params: { tag: { name: 'Tag1' } }, format: 'json'
      expect(response).to have_http_status :ok
      expect(Tag.count).to be_equal(current + 1)
    end
  end

  describe 'DELETE #destroy' do
    it 'should delete tag' do
      current = Tag.count
      u = Tag.new(name: 'Tag1')
      u.save
      idx = u.id
      delete :destroy, params: { id: idx }, format: 'json'
      expect(response).to have_http_status :ok
      expect(Tag.count).to be_equal(current)
    end
  end

  describe 'PUT #update' do
    it 'should update tag' do
      u = Tag.new(name: 'Tag1')
      e = u.name
      u.save
      idx = u.id
      put :update, params: { id: idx, tag: { name: 'NewName' } }, format: 'json'
      expect(response).to have_http_status :ok
      expect(Tag.find(idx).name).not_to eq(e)
    end
  end
end
