class VideosController < ApplicationController
  api :GET, 'videos'
  description "method description"
  def index
    @videos = Video.all
  end

  
  api :POST, 'video'
  description "Create a new video with the given params"
  param :Name, String, :desc => "Name of the photo", :required => true
  param :Url, String, :desc => "Url from where the video was taken", :required => true
  param :Length, Integer, :desc => "Length of the video", :required => true
  def create
    @video = Video.new(video_params)
    @video.save
  end

  def video_params
    params.require(:video).permit(:id, :name, :url, :length)
  end

  def new
    @video = Video.new(video_params)
  end

  api :DELETE, 'video'
  description "Delete a video with a given id"
  param :id, Integer, :desc => "Id of the video you want to remove", :required => true
  def destroy
    Video.find(params[:id]).destroy
  end

  api :PUT, 'video'
  description "Update a video with a given id"
  param :id, Integer, :desc => "Id of the video you want to update", :required => true
  param :Name, String, :desc => "Name of the photo", :required => false
  param :Url, String, :desc => "Url from where the video was taken", :required => false
  param :Length, Integer, :desc => "Length of the video", :required => false
  def update
    @video = Video.find(params[:id])
    @video.update_attributes(video_params)
  end
end
