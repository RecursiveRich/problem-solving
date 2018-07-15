function Graph() {
  this.adjacencyList = {};
}

// previously-implemented functions

Graph.prototype.numEdges = function() {
  let total = 0;

  Object.values(this.adjacencyList).forEach(list => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
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
    v => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    v => v !== vertex1
  );
};

// Start a queue with the value
// Add the value to a seen/visited tracker
// While there is something in the queue...
//   Remove the first item from the queue
//   Add its value to the answer you're returning
//   Add all its neighbors to the queue and mark seen/visited IF they haven't been seen/visited yet

// Iteratively
Graph.prototype.breadthFirstSearch = function(value) {
  let q = [value];
  let visited = new Set(q);
  let ans = [];
  while (q.length) {
    let vertex = q.shift();
    ans.push(vertex);
    let adjacencyList = this.adjacencyList[vertex];
    for (let v of adjacencyList) {
      if (!visited.has(v)) {
        visited.add(v);
        q.push(v);
      }
    }
  }
  return ans;
};

// Recursively
// Graph.prototype.breadthFirstSearch = function(start, q=[start], seen = new Set(q), result = []) {
//   let vertex = q.shift();
//   if (!vertex) return result;
//   result.push(vertex);
//   let adjacencyList = this.adjacencyList[vertex];
//   for (let v of adjacencyList) {
//     if(!(seen.has(v))) {
//       seen.add(v);
//       q.push(v);
//     }
//   }
//   return this.breadthFirstSearch(start, q, seen, result);
// }

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

console.log(graph.breadthFirstSearch("S")); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
