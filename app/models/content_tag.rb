class ContentTag < ApplicationRecord
	belongs_to :content
	belongs_to :tag

	before_destroy :destroy_tags

	private

	def destroy_tags
		tag.destroy
	end
end