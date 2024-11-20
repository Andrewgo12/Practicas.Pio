# Definición global de arreglos
arr_quicksort = [3, 6, 8, 10, 1, 2, 1]
arr_mergesort = [35, 26, 18, 12, 31, 42, 51]
arr_bubble_sort = [29, 10, 14, 37, 13]

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

def mergesort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        mergesort(left_half)
        mergesort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

print("______________________________________________________________________")
print("Selecciona el algoritmo de ordenamiento:")
print("1. QuickSort")
print("2. MergeSort")
print("3. Bubble Sort")
print("______________________________________________________________________")
choice = input("Introduce el número del algoritmo que deseas usar (1/2/3): ")

if choice == '1':
    print("\nArreglo inicial para QuickSort\n", arr_quicksort)
    sorted_arr = quicksort(arr_quicksort)
    print("\nArreglo ordenado mediante QuickSort \n", sorted_arr)

elif choice == '2':
    print("\nArreglo inicial para MergeSort\n", arr_mergesort)
    mergesort(arr_mergesort)
    print("\nArreglo ordenado mediante MergeSort \n", arr_mergesort)

elif choice == '3':
    print("\nArreglo inicial para Bubble Sort\n", arr_bubble_sort)
    bubble_sort(arr_bubble_sort)
    print("\nArreglo ordenado mediante Bubble Sort \n", arr_bubble_sort)

else:
    print("Opción no válida. Por favor, elige 1, 2 o 3.")