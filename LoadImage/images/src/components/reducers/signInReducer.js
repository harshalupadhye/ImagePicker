import axios from 'axios'
import * as actionTypes from '../actions/actionTypes';
import {Redirect, Route} from 'react-router-dom'
import ImageGallery from '../imageGallery';
import { Component } from 'react';

const initialState={
    form:{
        
        firstName:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your firstName'
            },
            value:'',
            valid:false,
            touched:false
        },
        LastName:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your lastName'
            },
            value:'',
            valid:false,
            touched:false
        },
        Age:{
            elementType:'input',
            elementConfig:{
                type:'number',
                placeholder:'Your Age'
            },
            value:'',
            valid:false,
            touched:false
        },
        DOB:{
            elementType:'datePicker',
            elementConfig:{
                type:'date',
                placeholder:'Your Birth Date'
            },
            value:'',
            valid:false,
            touched:false
        },
        Email:{
            elementType:'input',
            elementConfig:{
                type:'Email',
                placeholder:'Your Email'
            },
            value:'',
            valid:false,
            touched:false
        },
     
    },
    isValid:false,
    touched:false,
    redirect:false


}

const signInReducer=(state=initialState,action)=>{
  
    if(action.type===actionTypes.onchange){
       
        return{
            ...state,
            form:{
                ...state.form,
                [action.id]:{
                    ...state.form[action.id],
                    value:action.data,
                    touched:true,
                    valid:true
                }
            }
        }
        
       
    }
    else if(action.type===actionTypes.onSubmit){
        
        
        const UserDetails={
            FirstName:this.state.form.firstName.value,
            LastName:this.state.form.LastName.value,
            Email:this.state.form.Email.value,
            DOB:this.state.form.DOB.value,
            Age:this.state.form.Age.value,
        }
       

    
        axios.put('https://imagegalleryusers-default-rtdb.firebaseio.com/users.json',UserDetails).then(res=>{
            console.log(res.data)
        })
        return{
            ...state,
            redirect:true

        }
           
        
    }
    
    return state
    
    

}
export default signInReducer;