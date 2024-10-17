import array 

items      = [1.1, 2.2, 3.3, 4.4, 5.5]
items_b    = array.array("f", items).tobytes() 

open("items.bin", "wb").write(items_b)