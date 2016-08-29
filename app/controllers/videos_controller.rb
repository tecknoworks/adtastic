class VideosController < ApplicationController
  def index
    @videos = video.all
  end

  def create
    @video = video.new(video_params)
    @video.save
  end

  def video_params
    params.require(:videos).permit(:id, :name, :url, :length)
  end

  def new
    @video = video.new(video_params)
  end

  def remove
    video.find(params[:id]).destroy
  end

  def update
    @video = video.find(params[:id])
    @video.update_attributes(video_params)
  end
end
