inputHash = { 
  "main" : {
     "first" : { "text" : "foobar" },
     "second" : { "text" : "fizzbuzz", "child" : { "text" : "foobar" }
    }
   },
   "sub" : { 
    "first" : { "text" : "fizzbuzz", "child" : {"text" : "foobar" } },
    "second" : { 
      "third" : { "text" : "barfoo", "child" : { "text" : "foobar" } },
       "forth" : { "child" : { "text" : "jit_foo_foo" } } 
    }
   },
   "text" : "foofava"
 }

const myButton = document.querySelector('button');

const toUry = (hash) => {
  for (let key in hash) {
    if (typeof hash[key] === 'object') {
      hash[key] = toUry(hash[key]);
    } else {
      hash[key] = hash[key].replace(/foo/g, 'uryyyy!!');
    }
  }
  return hash;
}

myButton.onclick = () => {
  console.log(toUry(inputHash));
}
