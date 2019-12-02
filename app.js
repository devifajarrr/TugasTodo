let todos =[{
    text:'Curhatan Mu',
    complate:false,
}]

const generateTodo=function(todo){
    const p=document.createElement('p')
    p.textContent = todo.text
    return p
}
const generatorJudul=function(judul){
    p.textContent=todo.curhat
    return p
}
const renderTodos = function(todos){
    document.querySelector('#todos').innerHTML=""
    todos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodo(todo))   
         
    })
    
}
const renderJudul = function(judul){
    document.querySelector('#judul').innerHTML=""
    todos.forEach(function(judul){
        document.querySelector('#todos').appendChild(generatorJudul(judul))
    })
}
//save todo
const saveTodo = function(){

}
document.querySelector('#new-todos').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value,
        curhat:e.target.elements.curhat.value,
        completed: false

    })
    renderTodos(todos)
    e.target.elements.text.value = ""
 //   e.target.elements.curhat.value= ""
})
renderTodos(todos)
renderJudul(judul)
