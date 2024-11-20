def Factorial(num):
    f = 1
    for i in range(1, num + 1):  
        f*= i  
    return f

n = int(input("Ingrese el valor de n: "))
m = int(input("Tamaño de grupo a crear: "))

if m > n:
    print("El tamaño del grupo no puede ser mayor que n.")
else:
    nf = Factorial(n)
    mf = Factorial(m)
    nmf = Factorial(n - m)

    c = nf / (mf * nmf) 
    print(f"La cantidad de combinaciones es: {c}")