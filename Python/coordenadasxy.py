import math

print("=====================================================")
print("            Distancia entre dos puntos A y B          ")
print("=====================================================")

Ax = float(input("Ingrese la coordenada x de A: "))
Ay = float(input("Ingrese la coordenada y de A: "))
Bx = float(input("Ingrese la coordenada x de B: "))
By = float(input("Ingrese la coordenada y de B: "))

distancia = math.sqrt((Ax - Bx)**2 + (Ay - By)**2)

print("____________________________________________________________")
unidad = input("Ingrese la unidad de medida (metros, km, etc.): ")
print("____________________________________________________________")


print("=====================================================")
print(f"La distancia entre A y B es: {distancia:.3f} {unidad}")
print("=====================================================")