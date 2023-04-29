
1
function Cat(name, age) {
  let privateName = name;
  let privateAge = age;

  function setName(newName) {
    privateName = newName;
  }

  function setAge(newAge) {
    privateAge = newAge;
  }

  return {
    getName: function() {
      return privateName;
    },
    getAge: function() {
      return privateAge;
    },
    setName: setName,
    setAge: setAge
  }
}

const tom = Cat('Tom', 4);
console.log(tom.getName());
console.log(tom.getAge());
tom.setName('Tom');
tom.setAge(5);
console.log(tom.getName());
console.log(tom.getAge());

