// Classes
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.user = "André";
    }

    showUser() {
        console.log(this.user);
    }

}

class NewTodoListClass {
    constructor() {
        this.todos = [];
    }
    
    // Esse método retornará um erro
    // Métodos estáticos não "enxergam" o restante da classe
    // Processam informações e retornam outras
    static addTodo() {
        this.todos.push("New Todo");
        console.log(this.todos);
    }

}

class Matematica {
    static soma (a, b){
        return a + b;
    }
}

var MyList = new TodoList();

document.getElementById("btn-add-todo").onclick = function(){
    MyList.add('Novo TODO');
};

MyList.showUser();

//NewTodoListClass.addTodo();

console.log(Matematica.soma(3, 6));

///////////////////////////////////////////////////////////////

// Const e let

// Constante não podem ter seu valor reatribuido
// a = 3 (output => erro)
const a = 1;

// Mutação
const usuario = {nome : "André"};

usuario.nome = "José";

console.log(usuario);

function teste(x) {
    let y = 2;
    if (x > 5) {
      // Output => 10, 2
      console.log(x, y);
  
      //Output => 10, 4
      let y = 4;
      console.log(x, y);
    }
  }
  teste(10);

  ///////////////////////////////////////////////////////////////

  // Operações com array

  const arr = [1,2,3,5,8,13];

  //Map - percorre o vetor e retorna uma informação
  const newArr = arr.map(function(item, index){
    return item * index;
  });
  console.log(newArr);

  //Reduce - consome o vetor e transforma em uma única variável
  const sum = arr.reduce(function(total, next){
    return total + next;
  });

  // Filter
  const filter = arr.filter(function(item){
    return item % 2 === 0;
  });
  console.log(filter);

  // Find - verifica se existe uma informação dentro do array
  const find = arr.find(function(item){
      return item === 4;
  });
  console.log(2);
