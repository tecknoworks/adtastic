require 'rails_helper'

RSpec.describe PhotoTagsController, type: :controller do
	describe 'GET #index' do
		it 'should get photo tags index' do
			get :index, format: 'json'
			expect(response).to have_http_status :ok
		end
	end

	describe 'POST #create' do
		it 'should increase photo tag count' do
			current = PhotoTag.count
			Photo.new(name: 'test').save
			Tag.new(name: 'test').save

			post :create, params: { photo_tag: { photo_id: Photo.last.id, tag_id: Tag.last.id } }, format: 'json'
			expect(response).to have_http_status :ok
			expect(PhotoTag.count).to be_equal(current + 1)
		end
	end

	describe 'DELETE #destroy' do
		it 'should delete photo tag' do
			Photo.new(name: 'test').save
			Tag.new(name: 'test').save

			current = PhotoTag.count
			u = PhotoTag.new(photo_id: Photo.last.id, tag_id: Tag.last.id)
			u.save
			idx = u.id
			delete :destroy, params: { id: idx }, format: 'json'
			expect(response).to have_http_status :ok
			expect(PhotoTag.count).to be_equal(current)
		end
	end

	describe 'PUT #update' do
		it 'should update photo tag' do
			Photo.new(name: 'test').save
			Tag.new(name: 'test').save

			u = PhotoTag.new(photo_id: Photo.last.id, tag_id: Tag.last.id)
			e = u.photo_id
			u.save
			idx = u.id
			put :update, params: { id: idx, photo_tag: { photo_id: Photo.first.id } }, format: 'json'
			expect(response).to have_http_status :ok
			expect(PhotoTag.find(idx).photo_id).not_to eq(e)
		end
	end
end
