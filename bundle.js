"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classes
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.user = "André";
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.user);
    }
  }]);

  return TodoList;
}(List);

var NewTodoListClass =
/*#__PURE__*/
function () {
  function NewTodoListClass() {
    _classCallCheck(this, NewTodoListClass);

    this.todos = [];
  } // Esse método retornará um erro
  // Métodos estáticos não "enxergam" o restante da classe
  // Processam informações e retornam outras


  _createClass(NewTodoListClass, null, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push("New Todo");
      console.log(this.todos);
    }
  }]);

  return NewTodoListClass;
}();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

var MyList = new TodoList();

document.getElementById("btn-add-todo").onclick = function () {
  MyList.add('Novo TODO');
};

MyList.showUser(); //NewTodoListClass.addTodo();

console.log(Matematica.soma(3, 6)); ///////////////////////////////////////////////////////////////
// Const e let
// Constante não podem ter seu valor reatribuido
// a = 3 (output => erro)

var a = 1; // Mutação

var usuario = {
  nome: "André"
};
usuario.nome = "José";
console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    // Output => 10, 2
    console.log(x, _y); //Output => 10, 4

    var _y = 4;
    console.log(x, _y);
  }
}

teste(10); ///////////////////////////////////////////////////////////////
// Operações com array

var arr = [1, 2, 3, 5, 8, 13]; //Map - percorre o vetor e retorna uma informação

var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr); //Reduce - consome o vetor e transforma em uma única variável

var sum = arr.reduce(function (total, next) {
  return total + next;
}); // Filter

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // Find - verifica se existe uma informação dentro do array

var find = arr.find(function (item) {});
