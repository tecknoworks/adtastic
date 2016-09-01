json.videos @videos do |video|
	json.id video.id
	json.name video.name
	json.url video.url
	json.length video.length
end
