import random

notas = [random.randint(1, 5) for _ in range(5)]

for i, nota in enumerate(notas, start=1):
    print(f"Nota {i}: {nota}")


promedio = sum(notas) / 5
print(f"El promedio es: {promedio}")