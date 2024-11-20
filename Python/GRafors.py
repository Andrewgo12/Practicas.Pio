def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
        
    visited.add(start)
    print(start, end=' ')

    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    return visited
graph = {
    'A': ['B', 'C', '1'],
    'B': ['A', 'D', '2'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C', '3'],
    '1': ['A', '4'],
    '2': ['B'],
    '3': ['E'],
    '4': ['1']
}

print("DFS desde el nodo 'A':")
dfs(graph, 'A')
