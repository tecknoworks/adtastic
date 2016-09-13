require 'rails_helper'

RSpec.describe VideoTagsController, type: :controller do
	describe 'GET #index' do
		it 'should get video tags index' do
			get :index, format: 'json'
			expect(response).to have_http_status :ok
		end
	end

	describe 'POST #create' do
		it 'should increase video tag count' do
			current = VideoTag.count
			Video.new(name: 'test').save
			Tag.new(name: 'test').save

			post :create, params: { video_tag: { video_id: Video.last.id, tag_id: Tag.last.id } }, format: 'json'
			expect(response).to have_http_status :ok
			expect(VideoTag.count).to be_equal(current + 1)
		end
	end

	describe 'DELETE #destroy' do
		it 'should delete video tag' do
			Video.new(name: 'test').save
			Tag.new(name: 'test').save

			current = VideoTag.count
			u = VideoTag.new(video_id: Video.last.id, tag_id: Tag.last.id)
			u.save
			idx = u.id
			delete :destroy, params: { id: idx }, format: 'json'
			expect(response).to have_http_status :ok
			expect(VideoTag.count).to be_equal(current)
		end
	end

	describe 'PUT #update' do
		it 'should update video tag' do
			Video.new(name: 'test').save
			Tag.new(name: 'test').save

			u = VideoTag.new(video_id: Video.last.id, tag_id: Tag.last.id)
			e = u.video_id
			u.save
			idx = u.id
			put :update, params: { id: idx, video_tag: { video_id: Video.first.id } }, format: 'json'
			expect(response).to have_http_status :ok
			expect(VideoTag.find(idx).video_id).not_to eq(e)
		end
	end
end