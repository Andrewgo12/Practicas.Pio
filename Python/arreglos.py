import numpy as np

tamaño= int(input("ingresar el numero de alumnos"))
edades=np.zeros(tamaño,dtype=int)

for i in  range(tamaño):
    edades[i]=int(input(f"ingrese la edade de los alumnos{i+1}:"))

print("las edades de los alumnos son")
for i in range(tamaño):
    print(edades[i])