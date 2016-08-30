class TagsController < ApplicationController
  def index
    @tags = Tag.all
    render nothing: true
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.save
    render nothing: true
  end

  def tag_params
    params.require(:tag).permit(:id, :name)
  end

  def new
    @tag = Tag.new(tag_params)
  end

  def destroy
    Tag.find(params[:id]).destroy
  end

  def update
    @tag = Tag.find(params[:id])
    @tag.update_attributes(tag_params)
  end
end
