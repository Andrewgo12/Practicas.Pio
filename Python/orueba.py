result = []
suma = 0

for numero in range(2, 21):
    if numero % 2 == 0:
        result.append(numero)
        suma += numero
        if suma >= 10:
            break

print(result)
print(suma)
x = 10
if x < 5:
 print("Menor que 5")
elif x < 10:
   print("Menor que 10")
else:
   print("10 o mayor")

   i = 0
while i < 3:
   print(i)
   i += 1
