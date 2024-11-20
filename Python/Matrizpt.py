import numpy as np

def obtener_matriz(n, m, nombre):
    # Validar el nombre de la matriz
    es_valido, mensaje = validar_nombre(nombre)
    if not es_valido:
        raise ValueError(mensaje)
    
    matriz = np.zeros((n, m), dtype=int)
    print(f"Ingrese los elementos de la matriz {nombre}:")
    no = 1  # Contador para el número de elementos ingresados
    for i in range(n):
        for j in range(m):
            while True:
                try:
                    matriz[i, j] = int(input(f"Elemento [{i+1}, {j+1}] de {nombre} (Elemento {no}): "))
                    no += 1  # Incrementar el contador
                    break
                except ValueError:
                    print("Entrada no válida. Por favor, ingrese un número entero.")
    return matriz

def validar_nombre(nombre):
    # Verifica que el nombre no esté vacío y solo contenga letras y números
    if not nombre:
        return False, "El nombre no puede estar vacío."
    if not nombre.isalnum():
        return False, "El nombre solo puede contener letras y números."
    return True, ""
# Ejemplo de uso
n = int(input("Número de filas: "))
m = int(input("Número de columnas: "))
nombre = input("Nombre de la matriz: ")

try:
    matriz = obtener_matriz(n, m, nombre)
    print("Matriz ingresada:")
    print(matriz)
except ValueError as e:
    print(f"Error: {e}")