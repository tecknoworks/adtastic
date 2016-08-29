class DevicesController < ApplicationController
  def index
    @devices = device.all
  end

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

  def remove
    Device.find(params[:id]).destroy
  end

  def update
    @device = Device.find(params[:id])
    @device.update_attributes(device_params)
  end
end
