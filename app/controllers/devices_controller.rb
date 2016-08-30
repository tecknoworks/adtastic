class DevicesController < ApplicationController
  def index
    @devices = Device.all
    render nothing: true
  end

  def create
    @device = Device.new(device_params)
    @device.save
    render nothing: true
  end

  def device_params
    params.require(:device).permit(:id, :name, :res_x, :res_y)
  end

  def new
    @device = Device.new(device_params)
  end

  def destroy
    Device.find(params[:id]).destroy
  end

  def update
    @device = Device.find(params[:id])
    @device.update_attributes(device_params)
  end
end
