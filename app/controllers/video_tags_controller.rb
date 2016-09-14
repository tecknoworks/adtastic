class VideoTagsController < ApplicationController
  protect_from_forgery with: :null_session, if: proc { |c| c.request.format == 'application/json' }

  api :GET, 'videoTags'
  description 'method description'
  def index
    @video_tags = VideoTag.all
  end

  api :POST, 'videoTags'
  description 'Create a new video tag with the given params'
  param :video_id, Integer, desc: 'ID of the video', required: true
  param :tag_id, Integer, desc: 'ID of the tag', required: true
  def create
    @video_tag = VideoTag.new(tag_params)
    @video_tag.save
  end

  def create_multiple
    nr = params[:nr_of_tags]
    @last_tags = Tag.last(nr)
    @last_video = Video.last
    for @tag in @last_tags
      VideoTag.new(video_id: @last_video.id, tag_id: @tag.id).save
    end
  end

  def tag_params
    params.require(:video_tag).permit(:id, :video_id, :tag_id)
  end

  def new
    @video_tag = VideoTag.new(tag_params)
  end

  api :DELETE, 'videoTags'
  description 'Delete a video tag with a given id'
  param :id, Integer, desc: 'Id of the video tag you want to remove', required: true
  def destroy
    VideoTag.find(params[:id]).destroy
  end

  api :PUT, 'videoTags'
  description 'Update a video tag with a given id'
  param :id, Integer, desc: 'Id of the video tag you want to update', required: true
  param :video_id, Integer, desc: 'video id of the tag', required: false
  param :tag_id, Integer, desc: 'Tag id of the tag', required: false
  def update
    @video_tag = VideoTag.find(params[:id])
    @video_tag.update_attributes(tag_params)
  end
end
