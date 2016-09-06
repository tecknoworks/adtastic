json.devices @devices do |device|
  json.id device.id
  json.name device.name
  json.res_x device.res_x
  json.res_y device.res_y
end
