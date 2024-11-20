import numpy as np

# Leer cantidad de estudiantes y cantidad de notas por estudiante
n = int(input("Ingrese la cantidad de estudiantes (n): "))
m = int(input("Ingrese la cantidad de notas por estudiante (m): "))

notas = np.zeros((n, m), dtype=int)

print("Ingrese las notas para cada estudiante:")
for i in range(n):
    print(f"Notas del estudiante {i + 1}:")
    for j in range(m):
        notas[i, j] = int(input(f"Nota {j + 1}: "))

promedios = np.mean(notas, axis=1)

promedio_general = np.mean(notas)
print("Promedios de notas por estudiante:")
for i in range(n):
    print(f"Promedio del estudiante {i + 1}: {promedios[i]:.2f}")
print(f"Promedio general de todas las notas: {promedio_general:.2f}")