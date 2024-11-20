import numpy as np

# Leer dimensiones
n = int(input("Ingrese el número de filas (n): "))
m = int(input("Ingrese el número de columnas (m): "))

# Inicializar las matrices A, B y C
A = np.zeros((n, m), dtype=int)
B = np.zeros((n, m), dtype=int)
C = np.zeros((n, m), dtype=int)

# Leer elementos de la matriz B
print("Ingrese los elementos de la matriz B:")
for i in range(n):
    for j in range(m):
        B[i, j] = int(input(f"Elemento [{i+1}, {j+1}] de B: "))

# Leer elementos de la matriz C
print("Ingrese los elementos de la matriz C:")
for i in range(n):
    for j in range(m):
        C[i, j] = int(input(f"Elemento [{i+1}, {j+1}] de C: "))

# Calcular la matriz A como la suma de B y C
A = B + C

# Mostrar la matriz resultante A
print("La matriz resultante A es:")
print(A)