contador_positivos = 0  
numero = int(input("Ingresar el número (número negativo para terminar): "))

while numero >= 0:
    contador_positivos += 1
    numero = int(input("Ingresar el número (número negativo para terminar): "))

print(f"Has ingresado {contador_positivos} números positivos.")