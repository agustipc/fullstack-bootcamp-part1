console.log('hello world')

//variable permitir
let variable1 = 'Esto es la primera variable'

console.log( variable1)

const variableConstante = 'esto es constante'
var variableNoRecomendada = 'variable no recomendada'

//reasignamos variable
variable1 = 'variable reasignada'

console.log(variable1)

// var dentro de un scope se puede acceder
// scope es por ejemplo un if(){} - while () {} - funcion ()=>{}

// se pueden cambiar tipos de valores en un let --> es un tipado debil y dinamico
// en typescript tenemos tipos estaticos let variable: string = ''
variable1 = 1

console.log(variable1)

/// tipos inmutables
///
/// int
/// string
/// bool
/// undefined
/// null


// mutable e inmutable
const firstName = 'Name'
firstName.toUpperCase()
const newFirstNameWithUppercase = firstName.toUpperCase()
console.log(firstName)
console.log(newFirstNameWithUppercase)


//objetos y listas si son mutables
const list = []
list.push(1)
console.log(list)

const persona = {
    name: 'name',
    twitter: '@nameTwitter',
}
const field = 'twitter'

console.log(persona.name)
console.log(persona['name'])

console.log(persona[field])

//function expresion --> a una constante se le asigna una funcion
const suma = (a, b) => {
    console.log('sumar')
    console.log(a)
    console.log(b)
    return console.log(a + b)
}

suma(3, 4)

// declaración --> este tipo se puede usar antes de declararla
function restar (a, b){
    console.log('restar')
    return a - b
}

console.log(restar(4,3))

// problemas --> no son tipados fuertes
// infiere en los tipos de datos
suma(2, 'dos')