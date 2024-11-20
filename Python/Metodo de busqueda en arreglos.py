def binary_search(arr, target):
    left, right = 0, len(arr) - 1  # Definir los límites izquierdo y derecho

    while left <= right:
        mid = (left + right) // 2  # Encontrar el índice medio
        if arr[mid] == target:
            return mid  # El objetivo ha sido encontrado
        elif arr[mid] < target:
            left = mid + 1  # El objetivo está en la mitad derecha
        else:
            right = mid - 1  # El objetivo está en la mitad izquierda

    return -1  # El objetivo no está en el arreglo

# Ejemplo de uso de búsqueda binaria
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # Asegúrate de que el arreglo esté ordenado
target = 7
result = binary_search(arr, target)

if result != -1:
    print(f"Elemento {target} encontrado en el índice {result}.")
else:
    print(f"Elemento {target} no encontrado en el arreglo.")