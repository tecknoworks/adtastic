# model for backend
class User < ApplicationRecord
  def self.verify_password(inputEmail, inputPassword)
    u = User.find_by_email(inputEmail).password
    return true if u == inputPassword
    false
  end

  def self.verify_email(inputEmail)
    return true unless User.find_by_email(inputEmail).nil?
    false
  end
end
