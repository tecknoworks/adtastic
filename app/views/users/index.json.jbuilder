json.users @users do |user|
	json.password user.password
	json.email user.email
	json.user_type user.user_type
end