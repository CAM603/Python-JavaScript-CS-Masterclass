// Undirected Graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // ADD VERTEX
    // takes name of vertex
    // adds into adjacencyList
    // key: name of vertex
    // value: empty array
    // this implementation does not handle duplicate vertices
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    // ADD AN EDGE
    // Accepts two vertices
    // find key of vertex1 in adjacencyList and push vertex2 to the array
    // find key of vertex2 in adjacencyList and push vertex1 to the array
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // REMOVE EDGE
    // accepts 2 vertices
    // reassign the key of vertex1 to be an array that does not contain vertex2
    // reassign the key of vertex2 to be an array that does not contain vertex1
    removeEdge(v1, v2) {
        this.adjacencyList = this.adjacencyList[v1].filter(
            (vertex) => vertex != v2
        );
        this.adjacencyList = this.adjacencyList[v2].filter(
            (vertex) => vertex != v1
        );
    }

    // REMOVE VERTEX
    // accepts vertex to be removed
    // loops while there are any other vertices for that vertex
    // inside loop, call removeEdge for the vertex we are removing
    // delete key in adjacencyList
    deleteVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    // RECURSIVE DFT
    // create a list to store the end result, to be returned at the end
    // create an object to store visited vertices
    recursiveDFT(start) {
        const result = [];
        const visitedVertices = {};
        const adjacencyList = this.adjacencyList;
        // Create a helper function that accepts a vertex
        // it should return if the vertex is empty
        // it should place the vertex it accepts into the visited object and push that vertex into the result array
        // Loop over all of the values in the adjacencyList for that vertex
        // if any of those values have not been visited, recursively invoke the helper function with that vertex
        function DFT(vertex) {
            if (!vertex) {
                return;
            }
            visitedVertices[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visitedVertices[neighbor]) {
                    return DFT(neighbor);
                }
            });
        }

        // invoke helper function with starting vertex
        // return the result array
        DFT(start);
        return result;
    }

    // ITERATIVE DFT
    // accepts a start vertex
    iterativeDFT(start) {
        // create stack to track of vertices
        const stack = [];
        // create a list to store end result
        const result = [];
        // create an object to store visited vertices
        const visitedVertices = {};
        // define current vertex
        let currentVertex;
        // add starting vertex to stack
        stack.push(start);
        // mark it as visited
        visitedVertices[start] = true;
        // while the stack has something in it
        while (stack.length) {
            // pop the next vertex from the stack
            currentVertex = stack.pop();
            // add to results list
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                // if that vertex has not been visited yet
                if (!visitedVertices[neighbor]) {
                    // mark it as visited
                    visitedVertices[neighbor] = true;
                    // push into stack
                    stack.push(neighbor);
                }
            });
        }
        // return the result array
        return result;
    }

    // Breadth First Traversal
    breadthFirstTraversal(start) {
        // create a queue
        const queue = [];
        // create a list to store end result
        const result = [];
        // create an object to store visited vertices
        const visitedVertices = {};
        // define current vertex
        let currentVertex;
        // add starting vertex to stack
        queue.push(start);
        // mark it as visited
        visitedVertices[start] = true;
        // while the stack has something in it
        while (queue.length) {
            // pop the next vertex from the queue
            currentVertex = queue.shift();
            // add to results list
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                // if that vertex has not been visited yet
                if (!visitedVertices[neighbor]) {
                    // mark it as visited
                    visitedVertices[neighbor] = true;
                    // push into queue
                    queue.push(neighbor);
                }
            });
        }
        // return the result array
        return result;
    }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.recursiveDFT("A"));
console.log(g.iterativeDFT("A"));
console.log(g.breadthFirstTraversal("A"));
