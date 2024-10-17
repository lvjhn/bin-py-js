import array 

data  = open("items.bin", "rb").read() 

array = array.array("f") 
array.frombytes(data) 
array = array.tolist() 

print(array)

