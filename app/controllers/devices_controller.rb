class DevicesController < ApplicationController
  def index
    @devices = device.all
  end

  def create
    @device = device.new(device_params)
    @device.save
  end

  def device_params
    params.require(:devices).permit(:id, :name, :res_x, :res_y)
  end

  def new
    @device = device.new(device_params)
  end

  def remove
    device.find(params[:id]).destroy
  end

  def update
    @device = device.find(params[:id])
    @device.update_attributes(device_params)
  end
end
