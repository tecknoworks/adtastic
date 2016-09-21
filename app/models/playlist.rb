class Playlist < ApplicationRecord
	has_many :playlist_items, :dependent => :delete_all
end
