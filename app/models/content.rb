class Content < ApplicationRecord
	has_many :content_tags
	has_many :tags, through: :content_tags

	before_destroy :destroy_tags

	private

	def destroy_tags
		tags.destroy_all
	end
end
