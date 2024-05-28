/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search (animalArr, string) {
    for (let i = 0; i < animalArr.length; i++) {
        if (animalArr[i].name === string) {
            return animalArr[i]
        } 
    }
    return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace (animalArr, string, replacement) {
    for (let i = 0; i < animalArr.length; i++) {
        if (animalArr[i].name === string) {
            animalArr[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove (animalArr, string) {
    for (let i = 0; i < animalArr.length; i++) {
        if (animalArr[i].name === string) {
            animalArr.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add (animalArr, obj) {
    let test = false;
    if (obj.name.length > 0) {
        if (obj.species.length > 0) {
            for (let i = 0; i < animalArr.length; i++) {
                if (animalArr[i].name === obj.name) {
                    test = true
                }
            }
            if (test === false) {
                animalArr.push(obj)
            }
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}