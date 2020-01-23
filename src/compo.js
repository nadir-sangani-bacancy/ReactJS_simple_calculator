import React from 'react';

function Compo(props)
{
    return(
        <div align="center">
            <p>THIS IS SIMPLE CALCULATOR USING REACT COMPONANT. </p>
            <p>THIS UI IS DISPLSAY FROM CHILD COMPONANT AND IT IS FUNCTION BASED.</p>
            FIRST VALUE :-  
            <input type="text" name="firstvalue" onChange={(e) => props.setvalue(e)}/>
            <br></br><br></br>
            SECOND VALUE :-  
            <input type="text" name="secondvalue" onChange={(e) => props.setvalue(e)}/>
            <br></br><br></br>
            <button type="button" value="+" onClick={(e)=> props.operation(e)}>+</button>
            <button type="button" value="-" onClick={(e)=> props.operation(e)}>-</button>
            <button type="button" value="*" onClick={(e)=> props.operation(e)}>*</button>
            <button type="button" value="/" onClick={(e)=> props.operation(e)}>/</button>
            <br></br>
            
            <p>Ans : {props.s.answer}</p>
        </div>
    )
}
export default Compo;