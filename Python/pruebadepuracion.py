def suma(a, b):
    return a + b

def probar_suma():
    print(suma(2, 3))     # Esperado: 5
    print(suma(-1, 1))    # Esperado: 0
    print(suma(0, 0))     # Esperado: 0
    print(suma(2.5, 3.5)) # Esperado: 6.0

probar_suma()