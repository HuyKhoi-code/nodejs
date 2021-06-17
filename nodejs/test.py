arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))

count = 0 
for i in range(len(arr2)):
    j = 0 
    while (arr2[i] >= arr1[j]):
        if (j == len(arr1) - 1):
            break
        if (arr2[i] == arr1[j]):
            count += 1 
            print (arr1[j])
            break
        j+=1 
print (count)