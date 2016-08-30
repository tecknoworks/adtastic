class PhotosController < ApplicationController
  api :GET, 'photos'
  description "method description"
  def index
    @photos = Photo.all
  end

  api :POST, 'photos'
  description "Create a new photo with the given params"
  param :Name, String, :desc => "Name of the photo", :require => true
  param :Res_x, Integer, :desc => "Res_x", :require => true
  param :Res_y, Integer, :desc => "Res_y", :require => true
  param :Url, String, :desc => "Url from where the photo was taken", :require => true
  
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

  api :DELETE, 'photos'
  description "Delete a photo with a given id"
  def remove
    Photo.find(params[:id]).destroy
  end

  api :PUT, 'photos'
  description "Update a photo with a given id"
  def update
    @photo = Photo.find(params[:id])
    @photo.update_attributes(photo_params)
  end
end
