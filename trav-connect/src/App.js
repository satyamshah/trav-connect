import React from 'react'

function App() {

function test(){
  const resp= fetch("http://localhost:3000/api/users");
  resp.then((res)=>console.log(res)).catch(err=>console.log(err));

}

  return (
    <div>
      

      <h1> is this working {test()} </h1>
    </div>
  )
}

export default App
