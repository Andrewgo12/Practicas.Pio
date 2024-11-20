import numpy as np

print("=========================================================")
print("Realizar algoritmo donde lea una matriz de (n*m) y ")
print("saber cuántos números hay positivos, negativos y neutros")
print("=========================================================")

n = int(input("Ingrese el número de filas (n): "))
m = int(input("Ingrese el número de columnas (m): "))
A = np.zeros((n, m), dtype=int)

print("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
print("Ingrese los elementos de la matriz A:")
for i in range(n):
    for j in range(m):
        A[i, j] = int(input(f"Elemento [{i+1}, {j+1}] de A: "))
print("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")

positivos = 0
negativos = 0
neutros = 0

for i in range(n):
    for j in range(m):
        if A[i, j] > 0:
            positivos += 1
        elif A[i, j] < 0:
            negativos += 1
        else:
            neutros += 1

print("=========================================================")
print(f"Número de elementos positivos: {positivos}")
print(f"Número de elementos negativos: {negativos}")
print(f"Número de elementos neutros: {neutros}")
print("=========================================================")