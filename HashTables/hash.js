// Calculate a consistent number to be returned from he hash function
let total = 0;

// charCodeAt gives us the UTF-16 code unit for the given index
// Subtracting 96 just gives us the letters place in the alphabet
total += "hello".charCodeAt(0) - 96;
total += "hello".charCodeAt(1) - 96;
total += "hello".charCodeAt(2) - 96;
total += "hello".charCodeAt(3) - 96;
total += "hello".charCodeAt(4) - 96;

// Our hash function:
// Pass in a string and the length of the array
// hash("hello", 11)
// The number returned needs to be a valid index for an array of length 11
// We can do this by taking our total and module (%) it by the length of the array
total % 11;

// Simple has function that works on strings only
// Problems with this hash function
// 1. Only hashes strings
// 2. Not constant time - linear in key length
// 3. Could be a little more random
function hash(key, arrLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2 etc
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrLen;
    }
    return total;
}

// Improving the function so if the key length is very large, we will loop over a set number rather than the very large length
function hash2(key, arrLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrLen;
    }
    return total;
}

// A Hash Table class

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    // get(key) {
    //     let index = this._hash(key);
    //     if (!this.keyMap[index]) {
    //         return undefined;
    //     } else {
    //         return this.keyMap[index].find((el) => el[0] === key)[1];
    //     }
    // }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(10);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
console.log(ht.values());
console.log(ht.keys());
ht.keys().forEach(function (key) {
    console.log(ht.get(key));
});
