class ContentTagsController < ApplicationController
	protect_from_forgery with: :null_session, if: proc { |c| c.request.format == 'application/json' }

	api :GET, 'ContentTags'
	description 'method description'
	def index
		@content_tags = ContentTag.all
	end

	api :POST, 'ContentTags'
	description 'Create a new content tag with the given params'
	param :content_id, Integer, desc: 'ID of the content', required: true
	param :tag_id, Integer, desc: 'ID of the tag', required: true
	def create
		@content_tag = ContentTag.new(tag_params)
		@content_tag.save
	end

	def create_multiple
		nr = params[:nr_of_tags]
		@last_tags = Tag.last(nr)
		@last_content = Content.last
		for @tag in @last_tags
			ContentTag.new(content_id: @last_content.id, tag_id: @tag.id).save
		end
	end

	def tag_params
		params.require(:content_tag).permit(:id, :content_id, :tag_id)
	end

	def new
		@content_tag = ContentTag.new(tag_params)
	end

	api :DELETE, 'ContentTags'
	description 'Delete a content tag with a given id'
	param :id, Integer, desc: 'Id of the content tag you want to remove', required: true
	def destroy
		ContentTag.find(params[:id]).destroy
	end

	api :PUT, 'ContentTags'
	description 'Update a content tag with a given id'
	param :id, Integer, desc: 'Id of the content tag you want to update', required: true
	param :content_id, Integer, desc: 'Content id of the tag', required: false
	param :tag_id, Integer, desc: 'Tag id of the tag', required: false
	def update
		@content_tag = ContentTag.find(params[:id])
		@content_tag.update_attributes(tag_params)
	end
end