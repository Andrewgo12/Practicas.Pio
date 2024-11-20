import random
a = random.randint(1, 1000)
b = random.randint(1, 1000)

def funcion_calcular(a, b):
    suma = a + b
    resta = a - b
    multiplicacion = a * b
    if b != 0:
        division = a / b
    else:
        division = "Indefinida (no se puede dividir por cero)"
    return {
        "suma": suma,
        "resta": resta,
        "multiplicacion": multiplicacion,
        "division": division
    }

print(f"El número a es: {a}, El número b es: {b}")
resultados = funcion_calcular(a, b)
print("Suma:", resultados["suma"])
print("Resta:", resultados["resta"])
print("Multiplicación:", resultados["multiplicacion"])
print("División:", resultados["division"])