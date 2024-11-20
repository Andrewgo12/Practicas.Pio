# Definicion de metodos
def calculadora():
    def suma(a, b):
        return a + b
    
    def resta(a, b):
        return a - b
    
    def multiplicacion(a, b):
        return a * b
    
    def division(a, b):
        if b != 0:
            return a / b
        else:
            return "Error: división por cero"
    print('Seleccione una operación')
    print('1. Suma')
    print('2. Resta')
    print('3. Multiplicación')
    print('4. División')
    
    opcion = int(input('Ingresar su opción (1/2/3/4): '))
    num1 = float(input('Ingrese el primer número: '))
    num2 = float(input('Ingrese el segundo número: '))
    
    if opcion == 1:
        print('El resultado es:', suma(num1, num2))
    elif opcion == 2:
        print('El resultado es:', resta(num1, num2))
    elif opcion == 3:
        print('El resultado es:', multiplicacion(num1, num2))
    elif opcion == 4:
        print('El resultado es:', division(num1, num2))
    else:
        print('Opción no válida')

calculadora()