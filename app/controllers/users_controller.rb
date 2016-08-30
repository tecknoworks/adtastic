class UsersController < ApplicationController

  api :GET, 'users'
  description "method description"
  def index
  	@users = User.all
  end

  def create
  	@user = User.new(user_params)
  	@user.save
    render nothing: true
  end

  def new
  	@user = User.new(user_params)
  end

  def update
    u = User.find(params[:id])
    u.update(user_params)
  end

  def destroy
  	User.find(params[:id]).destroy
  end

  def user_params
    params.require(:user).permit(:id, :password, :email, :user_type)
  end

end