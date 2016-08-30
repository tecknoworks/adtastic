class TagsController < ApplicationController
  api :GET, 'tags'
  description "method description"
  def index
    @tags = Tag.all
  end


  api :POST, 'tags'
  description "Create a new tag with the given params"
  param :Name, String, :desc => "Name of the tag", :require => true
  def create
    @tag = Tag.new(tag_params)
    @tag.save
  end

  def tag_params
    params.require(:tags).permit(:id, :name)
  end

  def new
    @tag = Tag.new(tag_params)
  end

  api :DELETE, 'tags'
  description "Delete a tag with a given id"
  def remove
    Tag.find(params[:id]).destroy
  end

  api :PUT, 'tags'
  description "Update a photo with a given id"
  def update
    @tag = Tag.find(params[:id])
    @tag.update_attributes(tag_params)
  end
end
