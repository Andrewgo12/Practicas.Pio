import os
import traceback as tr
import numpy as np
import sys

# División por cero
try:
    x = 1 / 0
except Exception:
    print("Ocurrió un error: ")
    tr.print_exc()

# IndexError al intentar acceder fuera del rango de la lista
try:
    lista = [1, 3, 4, 7, 9]
    lista[5] = 70  # Acceso a un índice fuera de rango
except IndexError:
    print("Error: Fuera del rango")
    tr.print_exc()

# Manejo de NameError
try:
    print(j)
except NameError:
    print("Error: la variable j no está definida")

# TypeError al intentar sumar un entero con una cadena
try:
    suma = 10 + "juan"
except TypeError:
    print("Error: no se puede sumar un entero con una cadena de texto")

# ModuleNotFoundError al intentar importar un módulo inexistente
try:
    import randomw
except ModuleNotFoundError:
    print("Error: el módulo 'randomw' no existe")

# OverflowError al intentar realizar una operación matemática que excede los límites
try:
    resultado = 5.25**25673637
except OverflowError:
    print("Error: Resultado demasiado grande")

# KeyError al intentar acceder a una clave inexistente en un diccionario
try:
    productos = {"Manzanas": 39, "Peras": 32, "lechuga": 17}
    print(productos["Sandia"])  # Acceso con corchetes, no con paréntesis
except KeyError:
    print("Error: Llave errónea, 'Sandia' no existe")

# FileNotFoundError al intentar abrir un archivo inexistente
try:
    with open("archivo_inexistente.txt", "r") as file:
        contenido = file.read()
except FileNotFoundError:
    print("Error: El archivo no existe")
    tr.print_exc()

# IOError al intentar realizar operaciones de E/S no válidas
try:
    with open("/ruta/sin/permisos.txt", "w") as file:
        file.write("Escribir en una ruta sin permisos")
except IOError:
    print("Error: Operación de E/S no válida")
    tr.print_exc()

# ImportError al intentar importar un módulo que no existe
try:
    from math import factoriall  # Error tipográfico en el nombre
except ImportError:
    print("Error: No se pudo importar el módulo o función")
    tr.print_exc()

# IndexError al intentar eliminar un índice que no existe
try:
    lista = [1, 2, 3]
    del lista[5]
except IndexError:
    print("Error: Índice fuera del rango al intentar eliminar")
    tr.print_exc()

# ValueError al intentar convertir una cadena no numérica a un entero
try:
    numero = int("cadena")
except ValueError:
    print("Error: No se puede convertir la cadena a un número entero")
    tr.print_exc()

# StopIteration al usar next() en un iterador que ha terminado
try:
    iterador = iter([1, 2, 3])
    next(iterador)
    next(iterador)
    next(iterador)
    next(iterador)  # No hay más elementos
except StopIteration:
    print("Error: No hay más elementos en el iterador")
    tr.print_exc()

# AssertionError al fallar una aserción
try:
    assert 1 == 0, "Uno no es igual a cero"
except AssertionError:
    print("Error: Aserción fallida")
    tr.print_exc()

# NotImplementedError en una función no implementada
def funcion_no_implementada():
    raise NotImplementedError("Función no implementada aún")

try:
    funcion_no_implementada()
except NotImplementedError:
    print("Error: Función no implementada")
    tr.print_exc()

# OSError al intentar realizar una operación del sistema inválida
try:
    os.mkdir("/ruta/protegida/nueva_carpeta")
except OSError:
    print("Error: No se puede crear el directorio en la ruta protegida")
    tr.print_exc()

# PermissionError al intentar modificar un archivo de solo lectura
try:
    with open("/archivo_solo_lectura.txt", "w") as file:
        file.write("Intentando escribir en un archivo de solo lectura")
except PermissionError:
    print("Error: No tienes permiso para modificar este archivo")
    tr.print_exc()

# MemoryError al intentar crear un objeto que consume demasiada memoria
try:
    lista_grande = [1] * (10**10)
except MemoryError:
    print("Error: No hay suficiente memoria disponible")
    tr.print_exc()

# FloatingPointError en operaciones de punto flotante inválidas
try:
    np.seterr(all='raise')
    resultado = np.divide(1.0, 0.0)
except FloatingPointError:
    print("Error: Operación de punto flotante inválida")
    tr.print_exc()

# TimeoutError simulando una operación que excede el tiempo límite
try:
    raise TimeoutError("Operación excedió el tiempo límite")
except TimeoutError:
    print("Error: Tiempo de espera agotado")
    tr.print_exc()

# UnicodeEncodeError al intentar codificar un carácter no soportado
try:
    texto = "Hola, mundo 🌍"
    texto.encode("ascii")
except UnicodeEncodeError:
    print("Error: No se puede codificar el carácter en ASCII")
    tr.print_exc()

# UnicodeDecodeError al intentar decodificar bytes con un esquema incorrecto
try:
    bytes_texto = b'\xff\xfeA\x00B\x00'
    texto = bytes_texto.decode("utf-8")
except UnicodeDecodeError:
    print("Error: No se puede decodificar los bytes en UTF-8")
    tr.print_exc()

# KeyboardInterrupt al interrumpir la ejecución con Ctrl+C (simulado aquí)
try:
    raise KeyboardInterrupt
except KeyboardInterrupt:
    print("Error: Ejecución interrumpida por el usuario")
    tr.print_exc()

# EOFError al intentar leer más allá del final de un archivo
try:
    raise EOFError("Intentando leer más allá del final del archivo")
except EOFError:
    print("Error: Fin del archivo alcanzado inesperadamente")
    tr.print_exc()

# RuntimeError en caso de problemas durante la ejecución
try:
    raise RuntimeError("Error en tiempo de ejecución")
except RuntimeError:
    print("Error: Problema durante la ejecución")
    tr.print_exc()

# RecursionError por llamar a una función recursivamente sin caso base
def recursion_infinita():
    return recursion_infinita()

try:
    recursion_infinita()
except RecursionError:
    print("Error: Límite de recursión alcanzado")
    tr.print_exc()

# SystemExit al llamar a sys.exit() para terminar el programa
try:
    sys.exit("Finalizando programa")
except SystemExit as e:
    print(f"Error: El programa ha sido terminado. Razón: {e}")
    tr.print_exc()

# BufferError al intentar escribir en un búfer no escribible
try:
    raise BufferError("Intento de escritura en un búfer no escribible")
except BufferError:
    print("Error: Operación de búfer inválida")
    tr.print_exc()

# ArithmeticError como base de errores matemáticos
try:
    raise ArithmeticError("Error matemático genérico")
except ArithmeticError:
    print("Error: Error matemático")
    tr.print_exc()

# LookupError al intentar acceder a un índice o clave que no existe
try:
    raise LookupError("Error de búsqueda genérico")
except LookupError:
    print("Error: Error en la búsqueda de un elemento")
    tr.print_exc()

# BlockingIOError al intentar una operación en un recurso bloqueado
try:
    raise BlockingIOError("Recurso de E/S bloqueado")
except BlockingIOError:
    print("Error: Operación de E/S bloqueada")
    tr.print_exc()

# BrokenPipeError al intentar escribir en un canal roto
try:
    raise BrokenPipeError("Intento de escritura en un canal roto")
except BrokenPipeError:
    print("Error: Canal roto")
    tr.print_exc()

# ChildProcessError al intentar interactuar con un proceso hijo que no existe
try:
    raise ChildProcessError("No se puede encontrar el proceso hijo")
except ChildProcessError:
    print("Error: Proceso hijo no encontrado")
    tr.print_exc()

# ConnectionError al fallar en establecer una conexión
try:
    raise ConnectionError("Error al conectar")
except ConnectionError:
    print("Error: Problema de conexión")
    tr.print_exc()

# BrokenPipeError específico
try:
    raise BrokenPipeError
except BrokenPipeError:
    print("Error: Canal roto")
    tr.print_exc()

# ConnectionAbortedError al detectar una conexión abortada
try:
    raise ConnectionAbortedError("Conexión abortada")
except ConnectionAbortedError:
    print("Error: Conexión abortada por el host")
    tr.print_exc()

# ConnectionRefusedError cuando la conexión es rechazada
try:
    raise ConnectionRefusedError("Conexión rechazada por el host")
except ConnectionRefusedError:
    print("Error: Conexión rechazada")
    tr.print_exc()

# ConnectionResetError al intentar restablecer una conexión
try:
    raise ConnectionResetError("Conexión restablecida por el host")
except ConnectionResetError:
    print("Error: Conexión restablecida")
    tr.print_exc()