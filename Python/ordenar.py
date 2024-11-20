import random

def merge_sort(arr, ascending=True):
    if len(arr) > 1:
        mid = len(arr) // 2
        left, right = arr[:mid], arr[mid:]

        merge_sort(left, ascending)
        merge_sort(right, ascending)

        i = j = k = 0
        while i < len(left) and j < len(right):
            if (left[i] < right[j]) == ascending:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1

        arr[k:] = left[i:] + right[j:]

def quick_sort(arr, low, high, ascending=True):
    if low < high:
        pi = partition(arr, low, high, ascending)
        quick_sort(arr, low, pi - 1, ascending)
        quick_sort(arr, pi + 1, high, ascending)

def partition(arr, low, high, ascending):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if (arr[j] < pivot) == ascending:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def bubble_sort(arr, ascending=True):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if (arr[j] > arr[j + 1]) == ascending:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

def show_array(arr, message):
    print(f"\n{'_' * 85}")
    print(f"{message}: {arr}")
    print(f"{'_' * 85}")

def ordenar_array():
    arr = list(map(int, input("Ingrese números separados por espacio: ").split()))
    show_array(arr, "Array actual")
    print("\n _________________________________________________")
    print("\nOpciones de ordenamiento:")
    print("1. Merge Sort")
    print("2. Quick Sort")
    print("3. Bubble Sort")
    print("_________________________________________________\n")

    print("\n==================================================")
    option = input("Elija un método (1/2/3): ")
    print("\n==================================================")
    if option not in ['1', '2', '3']:
        print("\nOpción no válida.")
        return

    ascending = input("¿Ordenar en orden ascendente? (sí/no): ").strip().lower() == 'sí'

    if option == '1':
        merge_sort(arr, ascending)
    elif option == '2':
        quick_sort(arr, 0, len(arr) - 1, ascending)
    elif option == '3':
        bubble_sort(arr, ascending)

    show_array(arr, "Array ordenado")

# Llamar a la función principal
ordenar_array()