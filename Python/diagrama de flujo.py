import matplotlib.pyplot as plt
import networkx as nx

# Crear un grafo dirigido
G = nx.DiGraph()

# Definir los nodos y sus etiquetas
nodes = {
    'Start': 'Inicio',
    'Read1': 'Leer Calificación 1',
    'Read2': 'Leer Calificación 2',
    'Avg': 'Calcular Promedio\n(Promedio = (Cal1 + Cal2) / 2)',
    'Decision': '¿Promedio >= 3.0?',
    'Pass': 'Pasa',
    'Fail': 'No Pasa',
    'End': 'Fin',
    'Repeat': 'Repetir Evaluación\nPara Otro Estudiante'
}

# Añadir los nodos al grafo
G.add_nodes_from(nodes.keys())

# Agregar las aristas (conexiones) entre los nodos
edges = [
    ('Start', 'Read1'),
    ('Read1', 'Read2'),
    ('Read2', 'Avg'),
    ('Avg', 'Decision'),
    ('Decision', 'Pass', {'label': 'Sí'}),
    ('Decision', 'Fail', {'label': 'No'}),
    ('Pass', 'End'),
    ('Fail', 'End'),
    ('End', 'Repeat'),
    ('Repeat', 'Read1')
]
G.add_edges_from(edges)

# Posicionar los nodos en el diagrama
pos = {
    'Start': (0, 0),
    'Read1': (0, -1),
    'Read2': (0, -2),
    'Avg': (0, -3),
    'Decision': (0, -4),
    'Pass': (1, -5),
    'Fail': (-1, -5),
    'End': (0, -6),
    'Repeat': (0, -7)
}

# Definir los tipos de nodos (formas)
node_shapes = {
    'Start': 's',   # Cuadrado
    'Read1': 'o',   # Círculo
    'Read2': 'o',   # Círculo
    'Avg': 'o',     # Círculo
    'Decision': 'D',# Rombo
    'Pass': 'o',    # Círculo
    'Fail': 'o',    # Círculo
    'End': 's',     # Cuadrado
    'Repeat': 's'   # Cuadrado
}

# Colores para las formas de los nodos
node_colors = {
    'Start': 'lightgrey',
    'Read1': 'lightblue',
    'Read2': 'lightblue',
    'Avg': 'lightblue',
    'Decision': 'lightgreen',
    'Pass': 'lightgreen',
    'Fail': 'salmon',
    'End': 'lightgrey',
    'Repeat': 'lightgrey'
}

# Dibujar el grafo
plt.figure(figsize=(12, 10))

# Dibujar nodos
for node in G.nodes():
    nx.draw_networkx_nodes(G, pos, nodelist=[node], node_shape=node_shapes[node], node_color=node_colors[node], node_size=3000, alpha=0.8)

# Dibujar etiquetas
nx.draw_networkx_labels(G, pos, labels=nodes, font_size=10, font_weight='bold', verticalalignment='center')

# Dibujar aristas
nx.draw_networkx_edges(G, pos, arrowstyle='-|>', arrowsize=20)
nx.draw_networkx_edge_labels(G, pos, edge_labels={(u, v): d.get('label', '') for u, v, d in G.edges(data=True)}, font_color='red')

plt.title('Diagrama de Flujo - Evaluación de Calificaciones para 3 Estudiantes')
plt.axis('off')
plt.show()