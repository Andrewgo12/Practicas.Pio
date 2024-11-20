class Estudiante:
    def __init__(self, nombre, nota1, nota2):
        self.nombre = nombre
        self.nota1 = nota1
        self.nota2 = nota2

    def calcular_promedio(self):
        promedio = (self.nota1 + self.nota2) / 2
        return promedio

estudiantes = []

for i in range(3):
    nombre = input(f"Ingrese el nombre del estudiante {i + 1}: ")
    nota1 = float(input(f"Ingrese la primera nota de {nombre}: "))
    nota2 = float(input(f"Ingrese la segunda nota de {nombre}: "))
    estudiante = Estudiante(nombre, nota1, nota2)
    estudiantes.append(estudiante)

# Cálculo y muestra de los promedios
for estudiante in estudiantes:
    promedio = estudiante.calcular_promedio()
    print(f"El promedio de {estudiante.nombre} es: {promedio:.2f}")