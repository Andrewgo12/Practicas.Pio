import numpy as np
import matplotlib.pyplot as plt

# Constantes
k = 1  # Constante de Coulomb, en unidades arbitrarias
Q = 1  # Carga positiva +2Q
q = 1  # Carga positiva +q
a = 1  # Distancia de +q y -q al origen

# Función para la componente x de la fuerza
def F_x(x, k, Q, q, a):
    return k * (2 * Q * q * x) / (x**2 + a**2)**(3/2)

# Valores de x
x_values = np.linspace(-4*a, 4*a, 400)

# Calcula la fuerza en cada punto
F_x_values = F_x(x_values, k, Q, q, a)

# Generar la gráfica
plt.plot(x_values, F_x_values, label=r'$F_x$', color='blue')
plt.axhline(0, color='black', linewidth=0.5)
plt.axvline(0, color='black', linewidth=0.5)
plt.title('Componente x de la Fuerza sobre +2Q en función de x')
plt.xlabel('x (en unidades de a)')
plt.ylabel(r'$F_x$ (en unidades de $k\frac{2Qq}{a^2}$)')
plt.legend()
plt.grid(True)
plt.show()