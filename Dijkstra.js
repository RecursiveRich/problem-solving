// Implement a PriorityQueue, or a function that treats the Cost Table like one by retrieving the lowest-cost node
// Implement a Cost Table and a Prev/Parent Table with dictionaries
// Construct a Weighted Directed Acyclic Graph
// Select a starting and ending node
// Run the algorithm, with the graph, staring node, and ending node as arguments
// Initialize the cost table with S costing 0
// Initialize the prev table with S and null
// Initialize the priority queue by enqueueing s with its cost as its priority
// Take the first item from the priority queue
// for each of the node's neighbors
// ask if its current total cost (distance from start) is less than what's in the cost table
// if so, update the cost table, prev table, and the priority for that neighbor
// when done with that node's neighbors, move on to the next node in the priority queue until you find the end node, or the queue is empty
// at that point, return total cost and the path as a string, perhaps via a helper function

var Dijkstra = (graph, startingNode, endingNode) => {
  var costTable = {};
  var prevTable = {};
  var q = new PriorityQueue();
  var visited = {};
  q.enqueue(startingNode, 0);
  prevTable[startingNode] = null;
  costTable[startingNode] = 0;
  var curr = q.dequeue();
  while (curr) {
    if (curr === endingNode)
      return outputPath(costTable, prevTable, endingNode);
    if (!(curr in visited)) {
      for (var neighbor of graph[curr]) {
        var totalCost = neighbor.cost + costTable[curr];
        if (totalCost < (costTable[neighbor.node] || Infinity)) {
          costTable[neighbor.node] = totalCost;
          prevTable[neighbor.node] = curr;
          // We can't delete the node from the priority queue, so we add it again with a new priority
          q.enqueue(neighbor.node, totalCost);
        }
      }
      visited[curr] = true;
    }
    curr = q.dequeue();
  }
  return "no path found";
};

// (Inefficient) Priority Queue
function PriorityQueue() {
  this.q = [];
}

PriorityQueue.prototype.enqueue = function(node, priority) {
  // sorting function
  var fn = (obj1, obj2) => obj2.pri - obj1.pri;
  var q = this.q;
  q.push({ pri: priority, val: node });
  q = q.sort(fn);
};

PriorityQueue.prototype.dequeue = function() {
  if (this.q.length === 0) return null;
  return this.q.pop().val;
};

// Helpers
var outputPath = (costTab, prevTab, endingNode) => {
  var path = [];
  var curr = endingNode;
  while (curr) {
    path.unshift(prevTab[curr]);
    curr = prevTab[curr];
  }
  path.shift();
  return `Cost: ${costTab[endingNode]}.  Path: ${path.join(" to ")}`;
};

var myGraph = {
  start: [{ node: "a", cost: 12 }, { node: "b", cost: 9 }],
  a: [{ node: "end", cost: 10 }],
  b: [{ node: "a", cost: 2 }, { node: "end", cost: 20 }],
  end: []
};

console.log(Dijkstra(myGraph, "start", "end"));
