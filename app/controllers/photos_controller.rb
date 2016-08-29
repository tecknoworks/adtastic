class PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.save
  end

  def photo_params
    params.require(:photos).permit(:id, :name, :res_x, :res_y, :url)
  end

  def new
    @photo = Photo.new(photo_params)
  end

  def remove
    Photo.find(params[:id]).destroy
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.update_attributes(photo_params)
  end
end
