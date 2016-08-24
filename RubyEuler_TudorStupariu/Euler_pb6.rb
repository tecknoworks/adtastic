def run
	ss = 0
	sb = 0
	for i in 1..100
		sb = sb + i
		ss = ss + i**2	
	end
	sb  = sb ** 2
	return sb - ss
end

print run()
