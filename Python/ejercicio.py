pg = int(input("ingrese el numero de partidos ganados: "))
pe = int(input("ingrese el numero de partidos empatados: "))
pp = int(input("ingrese el numero de partidos perdidos: "))

ppg = pg * 3
ppe = pe * 1
ppp = pp * 0

pt = ppg +ppe + ppp
print(f" El resultado final es de: {pt}")