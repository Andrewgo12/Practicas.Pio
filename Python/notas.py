# Ingresar las tres notas
nota1 = float(input("Ingresa la primera nota: "))
nota2 = float(input("Ingresa la segunda nota: "))
nota3 = float(input("Ingresa la tercera nota: "))

# Calcular el promedio
promedio = (nota1 + nota2 + nota3) / 3

# Mostrar el promedio
print("El promedio de las tres notas es:", promedio)

# Validar si la primera nota es superior a 3.1
if promedio > 3.1:
    print("¡Pasaste!")
else:
    print(" perdiste.")