# model for backend
class Video < ApplicationRecord
	has_many :video_tags
	has_many :tags, through: :video_tags
	
	before_destroy :destroy_tags

	private

	def destroy_tags
		self.tags.destroy_all   
	end
end
