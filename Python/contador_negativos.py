import random

while True:
    cantidad = int(input("¿Cuántos números negativos desea generar? "))
    contador_negativos = 0
    for _ in range(cantidad):
        numero = random.randint(-100, -1) 
        print(f"Número generado: {numero}")
        contador_negativos += 1
    print(f"Se han generado {contador_negativos} números negativos.")
    continuar = input("¿Desea generar más números? (s/n): ").strip().lower()
    if continuar != 's':
        break