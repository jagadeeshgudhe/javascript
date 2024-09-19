//counter program


function createCounter(n) {
    // The counter function that maintains the state of `current`
    let current = n;
    
    // Return a new function that increments `current` and returns it
    return function() {
        return current++;
    };
}

// Example usage:
const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12


