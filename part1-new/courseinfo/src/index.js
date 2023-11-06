import React from 'react'
import ReactDOM from 'react-dom'
import Header  from "./components/header-component/Header";
import Content from './components/content/content';
import Total from './components/total/Total'

const App = () => {

  const course={
    name:'Media pila de la Aplicación',
    parts:[{
      name:'Fundamentos de React', 
      exercises:10
    },{
      name:'Usando props para pasar datos', 
      exercises:7
    },{
      name:'Estado de un componente', 
      exercises:14
    }]
  }
 
  return (
    <div>
    <Header name={course.name}/>
    <Content parte={course.parts}/>
    <Total total={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))