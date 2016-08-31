class UsersController < ApplicationController

  
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  api :GET, 'users'
  description "Returns json data about users."
  def index
  	@users = User.all
  end


  api :POST, 'users'
  description "Create a new user with the given params"
  param :Email, String, :desc => "Email for login", :required => true
  param :Password, String, :desc => "Password for login", :required => true
  param :User_type, ["Admin", "User"], :desc => "Admin or User, must be boolean", :required => true

  def create
  	@user = User.new(user_params)
  	@user.save
  end

  def new
  	@user = User.new(user_params)
  end

  api :PUT,'users'
  description "Update a user with a given id"
  param :id, Integer, :desc => "Id of the user you want to update", :required => true
  param :Email, String, :desc => "Email for login", :required => false
  param :Password, String, :desc => "Password for login", :required => false
  param :User_type, ["Admin", "User"], :desc => "Admin or User, must be boolean", :required => false

  def update
    u = User.find(params[:id])
    u.update(user_params)
  end

  api  :DELETE, 'users'
  description "Delete a user with a given id"
  param :id, Integer, :desc => "Id of the user you want to remove", :required => true 
  def destroy
  	User.find(params[:id]).destroy
    @string = "User was deleted"
  end

  def user_params
    params.require(:user).permit(:id, :password, :email, :user_type)
  end

end