def run
  ss = 0
  sb = 0
  for i in 1..100
    sb += i
    ss += i**2
  end
  sb **= 2
  sb - ss
end

print run
