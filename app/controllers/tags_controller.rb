class TagsController < ApplicationController
 def index
    @tags = tag.all
  end

  def create
    @tag = tag.new(tag_params)
    @tag.save
  end

  def tag_params
    params.require(:tags).permit(:id, :name)
  end

  def new
    @tag = tag.new(tag_params)
  end

  def remove
    tag.find(params[:id]).destroy
  end

  def update
    @tag = tag.find(params[:id])
    @tag.update_attributes(tag_params)
  end
end
