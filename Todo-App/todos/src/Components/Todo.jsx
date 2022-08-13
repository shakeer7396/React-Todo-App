import React, { useState } from 'react'
import DeleteItem from './DeleteItem';

const Todo = () => {
    const [add,setAdd] =useState('');
    const [data,setData]= useState([]);

    const handleChange =(e)=>{
        setAdd(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        let newdata=add;
        setData([...data,newdata])
        setAdd('')

    }
    const handleDelete = (a) =>{
        const myData =data.filter((current,index)=>{
            return index !=a
        })
        setData(myData);
    }
  return (
    <div style={{marginBottom:"20px"}} >
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add Some Thing' value={add} onChange={handleChange} />
        <button type="submit">Add</button>
        </form>
        {data.map((item,index)=>{
            return(
            <DeleteItem key={index} add={item} id={index} onSelect={handleDelete} />
            )
        })}
    </div>
  )
}

export default Todo