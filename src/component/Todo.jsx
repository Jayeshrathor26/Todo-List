import React, { useState } from 'react';

function Todo() {
  const [inputvalue, setinputvalue] = useState('');
  const [listvalue, setlistvalue] = useState([]);

  function additem() {
    setlistvalue((listvalue) => {
      const updatelistvalue = [...listvalue, inputvalue];
      console.log(updatelistvalue)
      setinputvalue('')
      return updatelistvalue;
    
    });
  }

  function remove(i){
       const  removedata= listvalue.filter((elem, id)=>{
        return i!=id
       })
       setlistvalue(removedata)
  }

  return (
    <>
      <div className="main">
        <div className="heading">
          <h3>Todo list</h3>
        </div>
        <input
          type="text"
          placeholder="Add items"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />
        <button onClick={additem}>add</button>
      </div>
      {listvalue !=[] && listvalue.map((data,i)=>{
        return(
            <>
            <p key={i}>
                <div className="listdata">
                    {data}
                </div>
                <button className='remove' onClick={()=>remove(i)}>Remove</button>
            </p>
            </>
        )
      })}
    </>
  );
}

export default Todo;
