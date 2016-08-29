class UsersController < ApplicationController
  def index
  end

  def new(password,email,user_type)
  	u = User.new(password: password, email: email, user_type: user_type)
  	u.save
  end

  def remove(idx)
  end

  def update(idx,password,email)
  end

  def getUserWithID(idx)
  end

end