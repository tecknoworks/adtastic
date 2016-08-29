json.photos @photos do |photo|
	json.name photo.name
	json.res_x photo.res_x
	json.res_y photo.res_y
	json.url photo.url
end