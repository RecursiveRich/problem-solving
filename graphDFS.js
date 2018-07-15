// depthFirstSearch - this function should return an array of nodes visited using DFS.
// You can do this iteratively (using a stack) or recursively, but note the order of the results will be different. The test cases should accommodate this.

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function() {
  let total = 0;

  Object.values(this.adjacencyList).forEach(list => {
    total += list.length;
  });

  return total / 2;
};

Graph.prototype.addVertex = function(vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function(vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    v => v !== vertex2``
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    v => v !== vertex1
  );
};

// Iteratively
Graph.prototype.depthFirstSearch = function(start) {
  let stack = [start];
  let result = [];
  let visited = new Set(stack);
  while (stack.length) {
    let vertex = stack.pop();
    result.push(vertex);
    let adjacencyList = this.adjacencyList[vertex];
    for (let v of adjacencyList) {
      if (!visited.has(v)) {
        visited.add(v);
        stack.push(v);
      }
    }
  }
  return result;
};

// Testing Setup
var graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

console.log(graph.depthFirstSearch("S"));

/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/
