import math

print("-----------------------------------------------------")
print("Número de micro discos necesarios: ")
print("-----------------------------------------------------")
GB = float(input("Ingrese el número de GB: "))
MG = GB * 1024
MD = MG / 1.44

print("\nSalida")
print("-----------------------------------------------------")
print("el numero de MD: ",(MD))
print("Número de discos necesarios: ", math.ceil(MD))
