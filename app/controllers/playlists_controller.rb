class PlaylistsController < ApplicationController
	protect_from_forgery with: :null_session, if: proc { |c| c.request.format == 'application/json' }

	api :GET, 'playlists'
	description 'get playlists'
	def index
		@playlists = Playlist.all
	end

	api :POST, 'playlists'
	description 'Create a new playlist with the given params'
	param :Device_id, String, desc: 'Id of the device', require: true
	param :Timer, Integer, desc: 'Timer for the slideshow', require: true

	def create
		play = Playlist.find_by_device_id(params[:playlist][:device_id])
		if  play != nil
			Playlist.destroy(play.id)
		end
		@playlist = Playlist.new(playlist_params)
		@playlist.save
	end

	def multiple
		dev_ids = params[:device_ids]
		for dev_id in dev_ids
			play = Playlist.find_by_device_id(dev_id)
			if  play != nil
				Playlist.destroy(play.id)
			end
			@playlist = Playlist.new(device_id: dev_id, timer: params[:timer])
			@playlist.save
		end
	end

	def playlist_params
		params.require(:playlist).permit(:id, :device_id, :timer)
	end

	def new
		@playlist = Playlist.new(playlist_params)
	end

	api :DELETE, 'playlists'
	description 'Delete a playlist with a given id'
	param :id, Integer, desc: 'Id of the playlist you want to remove', require: true
	def destroy
		Playlist.find(params[:id]).destroy
	end

	api :PUT, 'playlists'
	description 'Update a playlist with a given id'
	param :id, Integer, desc: 'Id of the playlist you want to update', require: true
	param :Device_id, String, desc: 'Id of the device', require: false
	param :Timer, Integer, desc: 'Timer for playlist slideshow', require: false
	def update
		@playlist = Playlist.find(params[:id])
		@playlist.update_attributes(playlist_params)
	end

	def playlistForDevice
		@play = Playlist.find_by_device_id(params[:device_id])
		@urls = @play.playlist_items
		@contents = []
		for url in @urls
			cid = url.content_id
			@content = Content.find(cid)
			@contents.push(@content)
		end
	end
end
