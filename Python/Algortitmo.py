#Realizar un algoritmo que 3 notas, si su promedio es >=3.0 decir aprono, sino que no aprobo. Realizar las pruebas vistas en la formacion

import logging
logging.basicConfig(level=logging.DEBUG)

def verificar_aprobacion(nota1, nota2, nota3):
    logging.debug(f"Notas recibidas: nota1={nota1}, nota2={nota2}, nota3={nota3}")
    promedio = (nota1 + nota2 + nota3) / 3
    logging.debug(f"Promedio calculado: {promedio}")
    
    if promedio >= 3.0:
        resultado = "Aprobó"
    else:
        resultado = "No aprobó"
    
    logging.debug(f"Resultado de verificación: {resultado}")
    return resultado



def imprimir():
    print(verificar_aprobacion(4.0, 3.5, 2.5))  
    print(verificar_aprobacion(3.0, 3.0, 3.0)) 
    print(verificar_aprobacion(2.0, 2.5, 3.0))  


imprimir()
import random

def generar_numero_libreta_militar():
    # Genera un número aleatorio de 8 dígitos
    numero = random.randint(10000000, 99999999)
    return numero

# Ejemplo de uso
numero_libreta = generar_numero_libreta_militar()
print(f"Tu número de libreta militar es: {numero_libreta}")