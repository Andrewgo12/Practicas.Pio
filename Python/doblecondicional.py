genero=str(input("digite el genero M O F")).upper()
edad= int(input("digite la edad"))

if(genero=="M" and edad>17 or edad>18):
    print("Es apto para prestra servicio")
else:
    print("no es apto")