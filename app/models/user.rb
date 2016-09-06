class User < ApplicationRecord

	def self.verifyPassword(inputEmail, inputPassword)
  		u = User.find_by_email(inputEmail).password
  		if u == inputPassword 
  			return true
  		end
  		return false
	end

	def self.verifyEmail(inputEmail)
		if User.find_by_email(inputEmail) != nil 
			return true
		end
		return false
	end

end
