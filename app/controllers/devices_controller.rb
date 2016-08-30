class DevicesController < ApplicationController
  api :GET, 'users'
  description "method description"
  def index
    @devices = Device.all
  end

  api :POST, 'devices'
  description "Create a new device with the given params"
  param :Name, String, :desc => "Name of the device", :require => true
  param :Res_x, Integer, :desc => "Res_x", :require => true
  param :Res_y, Integer, :desc => "Res_y", :require => true
    
  def create
    @device = Device.new(device_params)
    @device.save
  end

  def device_params
    params.require(:devices).permit(:id, :name, :res_x, :res_y)
  end

  def new
    @device = Device.new(device_params)
  end

  api :DELETE, 'devices'
  description "Delete a device with a given id"
  def remove
    Device.find(params[:id]).destroy
  end

  api :PUT, 'devices'
  description "Update a device with a given id"
  def update
    @device = Device.find(params[:id])
    @device.update_attributes(device_params)
  end
end
