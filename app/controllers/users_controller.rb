class UsersController < ApplicationController
  def index
  	#respond_with User.all
  end

  def create(password,email,user_type)
  end

  def remove(idx)
  end

  def update(idx,password,email)
  end

  def getUserWithID(idx)
  end

end
