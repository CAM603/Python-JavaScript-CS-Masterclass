# Adjacency List


class Adjacency_List_Graph:
    def __init__(self):
        self.vertices = {
            "A": {"B": 1},
            "B": {"C": 3, "D": 2},
            "C": {},
            "D": {},
            "E": {"D": 1}
        }


class Adjacency_Matrix_Graph:
    def __init__(self):
        self.edges = [[0, 1, 0, 0, 0],
                      [0, 0, 3, 2, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 1, 0]]
