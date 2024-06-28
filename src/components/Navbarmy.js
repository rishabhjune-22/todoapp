
import { useState } from 'react';

const Navbarmy = () => {
let [inputval,setInput] = useState("")
let [task,setTask]= useState([])

let handleChange = (event)=>{
setInput(event.target.value)


}




let Addtask= (event)=>{

let input=inputval.trim()
  if(input === ''){
    alert('Please enter task');
    return;
  }
  setTask([...task, input])
  setInput('');
  
  console.log(task)
  
}
  return (
  <>


<div className="container bg-warning ">
<div className="row">
<div className="col-12">
  <h1 className='text-center'>MY TO-DO TASK</h1>
</div>

</div>

<div className="row bg-danger  d-flex justify-content-center ">
<div className="col-2 bg-info  ">
<h3>Enter Task</h3>
</div>

<div className="col-5 ">
  <input type="text" onChange={handleChange} value={inputval} className="form-control" id="taskInput"  placeholder="Enter your task..."/>
</div>
</div>
<br />
<div className="row  ">
  <div className="col text-center ">
    <button onClick={Addtask} className='btn btn-primary'>ADD</button>
  </div>
</div>
<br />
<div className="row d-flex justify-content-center">

<div className="col-8 " style={{ height: '400px', backgroundColor:"#d7f1f5" }}>
    {task.length === 0 ? (
            <p className="text-center">No tasks added yet.</p>
          ) : (
            <ul className="list-group">
              {task.map((task, idx) => (
                <li key={idx} className="list-group-item">{idx+1}-{task}</li>
              ))}
            </ul>
          )}

  </div>
</div>
</div>


</>


  )

};

export default Navbarmy;
