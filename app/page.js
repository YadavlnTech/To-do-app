// "use client"
// import React, { useState } from 'react'

// const page = () => {

//   const [title,setitle]=useState("");
//   const [desc,setdesc]=useState("");
//   const [mainTask,setmainTask]=useState([]);

//   const submitHandler=(e)=>{
//     e.preventDefault()
//    setmainTask([...mainTask , {title,desc}])
//     setitle("")
//     setdesc("")

//     console.log(mainTask)
//   }

//   const deleteHandler=(i)=>{
//     let copytask=[...mainTask]
//     copytask.splice(i,1)
//     setmainTask(copytask)

//   }

//   let renderTask=<h2>no task avaiable</h2>;


//  if(mainTask.length>0){
//   renderTask= mainTask.map((t,i)=>{
//     return < li className='items-center justify-between' key={i}>
//       <div  className='flex justify-between mb-5' >
//       <h5 className='text-xl font-semibold'>{t.title}</h5>
//       <h6 className='text-xl font-semibold'>{t.desc}</h6>
//     </div>

//     <button

//     onClick={()=>{
//       deleteHandler(i)
//     }}
    
//     className='bg-red-500 rounded font-bold text-white '>delete</button>
//     </li>
// })
//  }
//   return (
//    <>
//    <h1 className='bg-black p-5 text-center text-2xl text-white'>My to do list</h1>
   
//    <form onSubmit={submitHandler}>
//     <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='enter task'
//    value={title}  onChange={(e)=>{
//     setitle(e.target.value)
//    }}
//    ></input>

// <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='enter description'
//     value={desc}  onChange={(e)=>{
//       setdesc(e.target.value)
//      }} ></input>

//     <button  className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>add task</button>
   

   
//    </form>

//    <hr/>
//      <div className='bg-slate-200'>
//       <ul>{renderTask}</ul> 
//      </div>

//    </>
//   )
// }

// export default page




"use client"
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim()) {
      setMainTask([...mainTask, { title, desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className="text-center text-gray-500 text-xl mt-4">No tasks available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-start">
        <div>
          <h5 className="text-lg font-semibold text-gray-800">{t.title}</h5>
          <p className="text-gray-600">{t.desc}</p>
        </div>
        <button
          onClick={() => deleteHandler(i)}
          className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </li>
    ));
  }

  return (
    <>
      <h1 className="bg-gradient-to-r from-black to-gray-800 p-6 text-center text-3xl text-white font-bold">
        📝 My To-Do List
      </h1>

      <form onSubmit={submitHandler} className="max-w-3xl mx-auto mt-6 px-4">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter task"
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter description"
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-black"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 text-white text-lg font-bold px-6 py-2 rounded-md transition"
          >
            ➕ Add Task
          </button>
        </div>
      </form>

      <div className="max-w-3xl mx-auto mt-8 px-4 pb-10">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
