class ContentsController < ApplicationController
	protect_from_forgery with: :null_session, if: proc { |c| c.request.format == 'application/json' }
	skip_before_filter  :verify_authenticity_token

	api :GET, 'contents'
	description 'method description'
	def index
		@contents = Content.all
	end

	api :POST, 'contents'
	description 'Create a new content with the given params'
	param :Name, String, desc: 'Name of the content', required: true
	param :Url, String, desc: 'Url from where the content was taken', require: true
	param :Content_type, String, desc: 'Type of the content', required: false

	def create
		@content = Content.new(content_params)
		@content.save
	end

	def content_params
		params.require(:content).permit(:id, :name, :url, :content_type)
	end

	def new
		@content = Content.new(Content_params)
	end

	api :DELETE, 'contents'
	description 'Delete a content with a given id'
	param :id, Integer, desc: 'Id of the content you want to remove', required: true
	def destroy
		Content.find(params[:id]).destroy
	end

	api :PUT, 'contents'
	description 'Update a content with a given id'
	param :id, Integer, desc: 'Id of the content you want to update', required: true
	param :Name, String, desc: 'Name of the content', required: false
	param :Url, String, desc: 'Url from where the content was taken', require: false
	param :Content_type, String, desc: 'Type of the content', required: false
	def update
		@content = Content.find(params[:id])
		@content.update_attributes(content_params)
	end
end
