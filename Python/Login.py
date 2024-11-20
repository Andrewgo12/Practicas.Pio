import logging
import random

logging.basicConfig(level=logging.DEBUG)

def notaspm(a, b):
    logging.debug(f"Valores de entrada a={a}, b={b}")
    resultado = a + b
    logging.debug(f"Resultado = {resultado}")
    return resultado

a = random.randint(1, 100)
b = random.randint(1, 100)
suma(a, b)
