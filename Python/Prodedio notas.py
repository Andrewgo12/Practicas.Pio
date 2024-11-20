def calcular_promedio(nota1, nota2):
    return (nota1 + nota2) / 2

def evaluar_estudiante(tipo, nota1, nota2):
    promedio = calcular_promedio(nota1, nota2)
    
    if tipo == 1:  
        if promedio >= 3.0:
            return "Aprobado como Técnico"
        else:
            return "Reprobado como Técnico"
    
    elif tipo == 2: 
        if promedio >= 3.5:
            return "Aprobado como Tecnólogo"
        else:
            return "Reprobado como Tecnólogo"
    
    elif tipo == 3:  
        if promedio >= 4.0:
            return "Aprobado como Profesional"
        else:
            return "Reprobado como Profesional"
    else:
        return "Tipo de estudiante no válido"

tipo = int(input("Selecciona el tipo de estudiante (1. Técnico, 2. Tecnólogo, 3. Profesional): "))
nota1 = float(input("Ingresa la primera nota: "))
nota2 = float(input("Ingresa la segunda nota: "))

resultado = evaluar_estudiante(tipo, nota1, nota2)
print(resultado)