import numpy as np
n=int(input("ingrese el numero de filas(N): "))
m=int(input("ingrese el numero de Columnas(M): "))

import numpy as np

# Definir las dimensiones de las matrices
n = int(input("Ingrese el número de filas: "))
m = int(input("Ingrese el número de columnas: "))

# Crear matrices inicializadas a cero
A = np.zeros((n, m))
b = np.zeros((n, m))

# Ingresar los elementos de la matriz A
print("Ingrese los elementos de la matriz A:")
for i in range(n):
    for j in range(m):
        A[i, j] = int(input(f"Elemento[{i+1}, {j+1}] de A: "))

# Ingresar los elementos de la matriz B
print("Ingrese los elementos de la matriz B:")
for i in range(n):
    for j in range(m):
        b[i, j] = int(input(f"Elemento[{i+1}, {j+1}] de B: "))

# Sumar las matrices
c = np.add(A, b)

# Imprimir la matriz resultante
print("La matriz resultante es:")
print(c)