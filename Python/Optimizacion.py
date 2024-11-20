import numpy as np

# Definir dimensiones de las matrices
n = int(input("Ingrese el número de filas: "))
m = int(input("Ingrese el número de columnas: "))

# Inicializar matrices con ceros
A = np.zeros((n, m), dtype=int)
b = np.zeros((n, m), dtype=int)

# Ingreso de elementos para la matriz A
print("Ingrese los elementos de la matriz A:")
for i in range(n):
    for j in range(m):
        A[i, j] = int(input(f"Elemento [{i+1}, {j+1}] de A: "))

# Ingreso de elementos para la matriz B
print("Ingrese los elementos de la matriz B:")
for i in range(n):
    for j in range(m):
        b[i, j] = int(input(f"Elemento [{i+1}, {j+1}] de B: "))

# Operaciones con matrices
c = np.multiply(A, b)  # Multiplicación elemento a elemento
v = np.transpose(A)  # Transposición de la matriz A
H = np.dot(A, b)     # Multiplicación matricial

# Mostrar resultados
print("La matriz transpuesta es:")
print(v)
print("La matriz resultante de la multiplicación elemento a elemento es:")
print(c)
print("La matriz resultante de la multiplicación matricial es:")
print(H)