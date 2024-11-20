
contador_positivos = 0
# Definir las opciones de conteo antes del bucle
opciones = {
    0: lambda: 1,  # Si el número es 0, cuenta como positivo
    1: lambda: 1,
    2: lambda: 1,
    3: lambda: 1,
    4: lambda: 1,
    5: lambda: 1,
}
while True:
    numero = int(input("Ingresar el número (número negativo para terminar): "))

    if numero < 0:
        break
    
    # Obtener el conteo si el número está en las opciones, de lo contrario, no se hace nada
    contador_positivos += opciones.get(numero, lambda: 0)()

print(f"Has ingresado {contador_positivos} números positivos.")