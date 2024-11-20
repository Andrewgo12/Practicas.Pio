import numpy as np
import matplotlib.pyplot as plt

# Parámetros del problema
lambda_ = 1e-6  # Carga por unidad de longitud (C/m)
epsilon_0 = 8.854e-12  # Permitividad del vacío (C^2/(N·m^2))
a = 0.02  # Radio del conductor interior (m)
b = 0.05  # Radio interior del cilindro exterior (m)
c = 0.07  # Radio exterior del cilindro exterior (m)

# Definir la función del campo eléctrico
def E_field(r, lambda_, epsilon_0, a, b, c):
    E = np.zeros_like(r)

    # Region 1: dentro del cilindro interior (r < a)
    E[r < a] = 0

    # Region 2: entre el cilindro interior y exterior (a < r < b)
    mask1 = (r >= a) & (r < b)
    E[mask1] = lambda_ / (2 * np.pi * r[mask1] * epsilon_0)

    # Region 3: fuera del cilindro exterior (r > c)
    mask2 = r >= b
    E[mask2] = lambda_ / (2 * np.pi * r[mask2] * epsilon_0)

    return E

# Valores de r desde 0 hasta 2c
r = np.linspace(0, 2*c, 500)

# Calcular el campo eléctrico para cada r
E = E_field(r, lambda_, epsilon_0, a, b, c)

# Crear la gráfica
plt.figure(figsize=(8, 6))
plt.plot(r, E, label='Campo Eléctrico (E)')
plt.axvline(x=a, color='r', linestyle='--', label='Radio a')
plt.axvline(x=b, color='g', linestyle='--', label='Radio b')
plt.axvline(x=c, color='b', linestyle='--', label='Radio c')
plt.title('Campo Eléctrico en función de la distancia r desde el eje')
plt.xlabel('Distancia r (m)')
plt.ylabel('Campo Eléctrico E (N/C)')
plt.grid(True)
plt.legend()
plt.show()