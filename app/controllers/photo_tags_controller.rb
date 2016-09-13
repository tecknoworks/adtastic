class PhotoTagsController < ApplicationController
	protect_from_forgery with: :null_session, if: proc { |c| c.request.format == 'application/json' }

	api :GET, 'PhotoTags'
	description 'method description'
	def index
		@photo_tags = PhotoTag.all
	end

	api :POST, 'PhotoTags'
	description 'Create a new photo tag with the given params'
	param :photo_id, Integer, desc: 'ID of the photo', required: true
	param :tag_id, Integer, desc: 'ID of the tag', required: true
	def create
		@photo_tag = PhotoTag.new(tag_params)
		@photo_tag.save
	end

	def tag_params
		params.require(:photo_tag).permit(:id, :photo_id, :tag_id)
	end

	def new
		@photo_tag = PhotoTag.new(tag_params)
	end

	api :DELETE, 'PhotoTags'
	description 'Delete a photo tag with a given id'
	param :id, Integer, desc: 'Id of the photo tag you want to remove', required: true
	def destroy
		PhotoTag.find(params[:id]).destroy
	end

	api :PUT, 'PhotoTags'
	description 'Update a photo tag with a given id'
	param :id, Integer, desc: 'Id of the photo tag you want to update', required: true
	param :photo_id, Integer, desc: 'Photo id of the tag', required: false
	param :tag_id, Integer, desc: 'Tag id of the tag', required: false
	def update
		@photo_tag = PhotoTag.find(params[:id])
		@photo_tag.update_attributes(tag_params)
	end
end
