def min(array):
    smallestNo = array[0]
    for no in array: 
        if no < smallestNo:
            smallestNo = no
    return smallestNo

print(min([10,1,40,-2,211]))    