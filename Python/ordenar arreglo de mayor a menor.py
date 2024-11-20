def bubble_sort_descending(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]


arr = [34, 7, 23, 32, 5, 62]

print("\n______________________________________________________________________")
print("\n Arreglo inicial: \n", arr)
print("______________________________________________________________________")
bubble_sort_descending(arr)
print("=================================================================")
print("\n Arreglo ordenado de mayor a menor:\n", arr)
print("=================================================================")