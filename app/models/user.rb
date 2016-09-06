class User < ApplicationRecord

	def self.verifyPassword(inputEmail, inputPassword)
  		if User.find_by_email(inputEmail).password == inputPassword 
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
