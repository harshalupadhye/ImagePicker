import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef,useEffect,useState} from 'react'
import SimpleReactValidator from 'simple-react-validator'

const Input=(props)=>{
    
    const focusOn=useRef();
    const validator=new SimpleReactValidator()
  
    let inputElement=null;
    useEffect(()=>{
        
            
          
        
        if(props.holder==="Your firstName"){
            focusOn.current.focus()
        }
    })

    switch(props.elementType){
        case('input'):
                inputElement=(<div className="md">
                <input ref={focusOn} className="form-control-md" type={props.type} placeholder={props.holder} onChange={props.change} style={{width:"20%"}}/>
                {validator.message('email',props.value,'required|email')}
                </div>)
                break;
        case('datePicker'):
        console.log(props.elementType)
        inputElement=(
            <div className="md">
                <input type={props.type} className="class-form-control" placeholder={props.holder} onChange={props.change} style={{width:"20%"}}/>
               

                

            </div>
        )
        break;
        default:
            inputElement=(
                <div>
                    <p>Please check the code it seems broken</p>
                </div>
            )
        
            
        
       
            
        

            }
    return(
        <div>
        {inputElement}
        </div>

        
    )
    }
export default Input;