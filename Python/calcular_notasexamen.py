import random

def generar_nota():
    return round(random.uniform(0, 5), 2)

def ingresar_notas(materia):
    print("___________________________________________________________________________________________")
    nota1 = generar_nota()
    nota2 = generar_nota()
    nota3 = generar_nota()
    print(f"Notas generadas para {materia}: Nota 1 = {nota1}, Nota 2 = {nota2}, Nota 3 = {nota3}")
    print("___________________________________________________________________________________________")
    return nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4

def procesar_estudiante(nombre):
    materias = []
    while True:
        print("___________________________________________________________________________________________")
        materia = input("Digita el nombre de la Materia o digita 'fin' para terminar de asignar materias: ")
        print("___________________________________________________________________________________________")
        if materia.lower() == 'fin':
            break
        materias.append(materia)

    promedios = []
    aprobaciones = []
    for materia in materias:
        promedio = ingresar_notas(materia)
        promedios.append(promedio)
        if promedio < 3.0:
            aprobaciones.append(f"{materia}: {promedio:.2f} - No Aprobado.")
        else:
            aprobaciones.append(f"{materia}: {promedio:.2f} - Aprobado.")
    
    promedio_semestre = sum(promedios) / len(promedios)
    if promedio_semestre >= 3.0:
        print("___________________________________________________________________________________________")
        aprobaciones.append(f"Promedio del semestre: {promedio_semestre:.2f} - Aprobado")
        print("___________________________________________________________________________________________")
    else:
        print("___________________________________________________________________________________________")
        aprobaciones.append(f"Promedio del semestre: {promedio_semestre:.2f} - No Aprobado")
        print("___________________________________________________________________________________________")
        if input("Repetir semestre? (sí/no): ").strip().lower() == 'sí':
            return procesar_estudiante(nombre)
        else:
            aprobaciones.append("Cancelación de matrícula.")
    
    return aprobaciones

def gestionar_notas_estudiantes():
    resultados = []
    while True:
        print("___________________________________________________________________________________________")
        nombre_estudiante = input("Nombre del estudiante: ")
        print("___________________________________________________________________________________________")
        resultados.append(f"\nResultados para {nombre_estudiante}:")
        resultados.extend(procesar_estudiante(nombre_estudiante))
        if input("Ingresar otro estudiante? (sí/no): ").strip().lower() != 'sí':
            break
    print("\n".join(resultados))

gestionar_notas_estudiantes()