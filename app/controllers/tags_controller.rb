class TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

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

  def remove
    Tag.find(params[:id]).destroy
  end

  def update
    @tag = Tag.find(params[:id])
    @tag.update_attributes(tag_params)
  end
end
