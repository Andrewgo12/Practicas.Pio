import traceback as tr

# 1. Intentar convertir una cadena a entero
print("Prueba de ValueError:")
try:
    num = int("texto")  # Intento de conversión fallida
except ValueError:
    print("Error: No se puede convertir la cadena a entero")
    tr.print_exc()

print("\n")

# 2. Intentar acceder a una clave inexistente en un diccionario
print("Prueba de KeyError:")
try:
    diccionario = {"a": 1, "b": 2, "c": 3}
    valor = diccionario["d"]  # Clave inexistente
except KeyError:
    print("Error: Clave 'd' no encontrada en el diccionario")
    tr.print_exc()

print("\n")

# 3. Intentar dividir por un número no entero (uso de 'complex')
print("Prueba de TypeError:")
try:
    resultado = 10 / complex(1, 1)  # División por un número complejo
except TypeError:
    print("Error: Operación no soportada con el tipo de dato complejo")
    tr.print_exc()

print("\n")

# 4. Intentar abrir un archivo que no existe
print("Prueba de FileNotFoundError:")
try:
    with open("archivo_inexistente.txt", "r") as archivo:
        contenido = archivo.read()
except FileNotFoundError:
    print("Error: El archivo 'archivo_inexistente.txt' no se encontró")
    tr.print_exc()

print("\n")

# 5. Intentar hacer una operación matemática que excede el límite de precisión
print("Prueba de OverflowError:")
try:
    import math
    resultado = math.exp(1000)  # Operación exponencial que excede el límite
except OverflowError:
    print("Error: Resultado de la operación matemática excede el límite")
    tr.print_exc()

print("\n")

# 6. Intentar acceder a un índice negativo fuera de los límites de una lista
print("Prueba de IndexError:")
try:
    lista = [10, 20, 30]
    valor = lista[-4]  # Índice negativo fuera de rango
except IndexError:
    print("Error: Índice negativo fuera del rango de la lista")
    tr.print_exc()