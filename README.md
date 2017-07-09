![encabezado](http://www.skylabcoders.com/images/403/default.png)

# TODO list

[Ir a Google](http://www.google.com)

#APUNTES BOOTCAMP SKYLAB (Hernan)

##CLASE 1

* *** ~~Bash en Windows10?~~ ***
* **Configurar Alias "subl" en Commander***
* ***Revisar códigos Markdown [--> Link](https://blog.ghost.org/markdown/)***
* **dotfiles (para sistemas Unix-like)**
* *revisar comandos GIT y funcionamiento.*
* **Otro to-do**
* ***LAST to-do***


## CLASE 2 - 04/07/2017

* JAVASCRIPT
* EcmaScript5 y 6
* Objects in javascript
    - instancias de Objectos.
    - Herencias.
```javascript
                var x = {};
                // creo un objeto literal
                function Dog() {};
                // un constructor de objetos dog
                var y = new Dog();
                // creo la variable y de tipo Dog
                y instanceof Dog; 
                // devuelve true
                y instanceof Object;
                //devuelve true;
                x instanceof Dog;
                //devuelve false
```

* Tipos de variables:
    - Primitivos: String, Numbers, Bool, etc...
    - Todos los otros son Objects...

* Operadores:
    - Doble negación...> para obtener facilmente el valor booleano de una variable.
    - **Ternary operator ** forma abreviada de escribir un IF..ELSE
        ```javascript
         var result = (a === 1) ? "a is one" : "a is not one"; 
        ```
    - 

## CLASE 3 - 05/07/2017

* **Función de Arrays:  array.reduce()---?
* array.some()
* array.every()
* js to jason to js:
    - JSON.stringify(object)
```javascript
    var ob = {"hola":"hello","chau":"goodbye"};
    var o2 = JSON.stringify(ob);
    var o3 = JSON.parse(o2);
    o3---> {"hola":"hello","chau":"goodbye"};
```
* Objects: add and delete properties after object literal notation.
    - delete object.property..... devuelve 'true' si lo eliminó.

    - cuando una propiedad es una función....> es un **método**
    - ** PROTOTYPE **
    - Inheritance:
        + dado un constructor de objetos 'Human', puedo definir un nuevo constructor de un nuevo tipo de objeto, heredando las propiedades de otro..
        + por ejemplo:
            ```
            function Programmer(workingCompany){
            ....
            }

            Programmer.prototype = new Human();

            ```

## CLASE 4 - 06/07/2017

* arr.reduce(function(acum,val){return acum + value;}) ---> si no se le pasa un valor inicial para el acumulador toma el valor del primer item del array.
* ***Regular Expressions ***
    -  https://regex101.com/
* **HOISTERING**
```javascript
    var v = 1;
    function fun(){
        console.log(v);
        v = 5;
        console.log(v);
        var v = 6;
    }
```
--> al llamar a la variable fun():
```
    undefined //Es el primer console.log()
    5           // es el segundo console.log();
```

Aunque una función sea llamada antes de que esté declarada funciona.
En el caso de las variablas **no es tan obvio**--> si llamas a una variable que está declarada 'más abajo' (**pero no inicializada!!**) funcionará.
Si la variable ha sido declarada e inicializada 'más abajo' que la llamada, no funcionará.

* 'Arrow functions' --> otra sintaxis para funciones, exclusivo de **ECMAScript 6**


* webstorm -- js editor. (averiguar)

### Objetos -> prototype -> herencia de funciones:

**método 'call(thisArg, args...)'

```javascript
    // prototyping inheritance

    function Animal(species, name) {
        this.setSpecies(species);
        this.setName(name);
    }
    Animal.prototype.setSpecies = function(species) {
        this._species = species;
    };
    Animal.prototype.getSpecies = function() {
        return this._species;
    };
    Animal.prototype.setName = function(name) {
        this._name = name;
    };
    Animal.prototype.getName = function() {
        return this._name;
    };
    Animal.prototype.heal = function() {
        console.log('healing...');
    };
    Animal.prototype.eat = function () {
        console.log('eating...');
    };
    Animal.prototype.pee = function () {
        console.log('pssssing....');
    };
    Animal.prototype.poo = function() {
        console.log('poofffffff....');
    };
    Animal.prototype.sleep = function() {
        console.log('Zzzz');
    };

    function Tiger(name, speed) {
        Animal.call(this, 'tiger', name);
        this.setSpeed(speed);
    }

    Tiger.prototype = new Animal();
    Tiger.prototype.setSpeed = function(speed) {
        this._speed = speed;
    };
    Tiger.prototype.getSpeed = function() {
        return this._speed;
    };

```

### POLYFILL
*A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape if you will.**
```javascipt

    polyfills

    Array.prototype.random = function random() {
        return this[Math.floor(Math.random() * this.length)];
    }

    function randomArg() {
         return Array.prototype.random.call(arguments);
    }

```


## CLASE 5 - 07/07/2017



