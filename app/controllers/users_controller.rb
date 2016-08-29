class UsersController < ApplicationController
  def index
  	@users = User.all
  end

  def create
  	@user = User.new(user_params)
  	@user.save
  end

  def new
  	@user = User.new(user_params)
  end

  def user_params
  	params.require(:users).permit(:id, :password, :emails, :user_type)
  end

  def destroy
  	User.find(params[:id]).destroy
  end

  def update
  	@user = User.find(params[:id])
  	@user.update_attributes(user_params)
  end

end