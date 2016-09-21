class PlaylistItemsController < ApplicationController
	protect_from_forgery with: :null_session, if: proc { |c| c.request.format == 'application/json' }

	api :GET, 'playlist_items'
	description 'get playlist_items'
	def index
		@playlist_items = PlaylistItem.all
	end

	api :POST, 'playlist_items'
	description 'Create a new playlist_item with the given params'
	param :Content_id, Integer, desc: 'Id of the content', require: true
	param :Playlist_id, Integer, desc: 'Id of the playlist', require: true

	def create
		@playlist_item = PlaylistItem.new(playlist_item_params)
		@playlist_item.save
	end

	def create_multiple
		@last_playlist = Playlist.last
		items = params[:contents]
		for i in items
			@item = PlaylistItem.new(playlist_id: @last_playlist.id, content_id: i )
			@item.save
		end
	end

	def playlist_item_params
		params.require(:playlist).permit(:id, :content_id, :playlist_id)
	end

	def new
		@playlist_item = PlaylistItem.new(playlist_item_params)
	end

	api :DELETE, 'playlist_items'
	description 'Delete a playlist_item with a given id'
	param :id, Integer, desc: 'Id of the playlist_item you want to remove', require: true
	def destroy
		PlaylistItem.find(params[:id]).destroy
	end

	api :PUT, 'playlist_items'
	description 'Update a playlist_item with a given id'
	param :id, Integer, desc: 'Id of the playlist_item you want to update', require: true
	param :Content_id, Integer, desc: 'Id of the content', require: false
	param :Playlist_id, Integer, desc: 'Id of the playlist', require: false
	def update
		@playlist_item = PlaylistItem.find(params[:id])
		@playlist_item.update_attributes(playlist_item_params)
	end
end
