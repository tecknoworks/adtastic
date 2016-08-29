class VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def create
    @video = Video.new(video_params)
    @video.save
  end

  def video_params
    params.require(:videos).permit(:id, :name, :url, :length)
  end

  def new
    @video = Video.new(video_params)
  end

  def remove
    Video.find(params[:id]).destroy
  end

  def update
    @video = Video.find(params[:id])
    @video.update_attributes(video_params)
  end
end
