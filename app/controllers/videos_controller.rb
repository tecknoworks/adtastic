class VideosController < ApplicationController
  api :GET, 'videos'
  description "method description"
  def index
    @videos = Video.all
    render nothing: true
  end

  
  api :POST, 'video'
  description "Create a new video with the given params"
  param :Name, String, :desc => "Name of the photo", :require => true
  param :Url, String, :desc => "Url from where the video was taken", :require => true
  param :Length, Integer, :desc => "Length of the video", :require => true
  def create
    @video = Video.new(video_params)
    @video.save
    render nothing: true
  end

  def video_params
    params.require(:video).permit(:id, :name, :url, :length)
  end

  def new
    @video = Video.new(video_params)
  end

  api :DELETE, 'video'
  description "Delete a video with a given id"
  def destroy
    Video.find(params[:id]).destroy
  end

  api :PUT, 'video'
  description "Update a video with a given id"
  def update
    @video = Video.find(params[:id])
    @video.update_attributes(video_params)
  end
end
