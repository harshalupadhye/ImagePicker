import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import Input from './input'
import {createRef} from 'react'
import {onChange} from  './actions/signInActions';
import {onSubmit} from  './actions/signInActions'

import { Redirect } from 'react-router';


class SignIn extends Component{

touchy=false
vali=false
classes=[]
counter=0

 handleSubmit=()=>{
     console.log(this.props.history)
 }
 componentDidUpdate(){
    
   
   
 }
      
render(){
 
   
        // console.log(this.props.formType.firstName)
        const elementArray=this.props.formType;
        const array=[]
       
        for(let key in elementArray){
            
            array.push({
                id:key,
                config:this.props.formType[key]
            })
        }
        
        
        let form=(
            <div>
                {array.map(key=>{
                   
                    
                return<Input key={key.id} 
                elementType={key.config.elementType} 
                type={key.config.elementConfig.type} 
                value={key.config.value}
                holder={key.config.elementConfig.placeholder}
                change={(event)=>this.props.onChange(key.id,event)}/>
                
            })}
            </div>
           
            

        )
       
       
        for(let key in this.props.formType){

            if(this.props.formType[key].value!==''){
               this.touchy=true
               this.counter=this.counter+1
               
            }
            
            else if(this.counter==5){
                this.vali=true
                this.counter=0
            }
    
        }
          
    if(!this.Vali && !this.touchy){
        this.classes.push("btn btn-lg btn-outline-primary")
    }
    else if(this.touchy && this.Vali){
        this.classes.push("btn btn-lg btn-outline-success")
    }
    else if(this.touchy && !this.Vali){
        this.classes.push("btn btn-lg btn-outline-danger")
    }
    
    console.log(this.touchy,this.vali)

        
        return(
            <div className="container jumbotron">
                <h1 className="font-weight-bold">SigIn</h1>
                <h2>please Enter Your Details</h2>
                {/* <form> */}
               
                   
                {form}
                <button className={this.classes.join(' ')} disabled={!this.touchy} onClick={this.props.onsubmit}>Submit</button>
                {this.props.redirect?<Redirect from="/" to="/images"/>:null}
                {/* </form> */}
                
                    
                  
                
                
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        formType:state.form,
        isValid:state.isValid,
        touched:state.touched,
        redirect:state.redirect
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onChange:(id,event)=>dispatch(onChange(id,event)),
        onsubmit:()=>dispatch(onSubmit())
    }
   

}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);