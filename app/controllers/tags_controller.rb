class TagsController < ApplicationController

  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }


  
  api :GET, 'tags'
  description "method description"
  def index
    @tags = Tag.all
  end


  api :POST, 'tags'
  description "Create a new tag with the given params"
  param :Name, String, :desc => "Name of the tag", :required => true
  def create
    @tag = Tag.new(tag_params)
    @tag.save
  end

  def tag_params
    params.require(:tag).permit(:id, :name)
  end

  def new
    @tag = Tag.new(tag_params)
  end

  api :DELETE, 'tags'
  description "Delete a tag with a given id"
  param :id, Integer, :desc => "Id of the tag you want to remove", :required => true 
  def destroy
    Tag.find(params[:id]).destroy
  end

  api :PUT, 'tags'
  description "Update a tag with a given id"
  param :id, Integer, :desc => "Id of the tag you want to update", :required=> true 
   param :Name, String, :desc => "Name of the tag", :required => false
  def update
    @tag = Tag.find(params[:id])
    @tag.update_attributes(tag_params)
  end
end
