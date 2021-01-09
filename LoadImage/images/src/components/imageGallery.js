import React,{Component} from 'react';
import axios from 'axios';
import {storage} from '../components/firbase'
import 'bootstrap/dist/css/bootstrap.min.css';


 
// var starRef=storage.child('images/burger-logo.png')
class ImageGallery extends Component{
   
    state={
       ImgName:null,
       url:[]
    }
    
  
//     componentDidMount(){
//         starRef.refFromURL('gs://imagegallery-c08d2.appspot.com').getDownloadURL().then(function(url) {
//     //do axios thing here
//     axios.get(url).then(response=>{
//         console.log(response.data)
//     })
// });
//     }
     nameChangeHandler=(e)=>{
         console.log(e)
         if(e.target.files[0]){
             const imageName=e.target.files[0].name
            this.setState({
                ImgName:imageName
            })
         }
        
      
     }
     imageUploadHandler=()=>{
         
        const uploadedImage= storage.ref(`images/${this.state.ImgName}`).put(this.state.ImgName);
        uploadedImage.on('state_changed',(current)=>{
            console.log('in current')

        },(error)=>{
            console.log('from error',error)

        },()=>{
            storage.ref(`images`).child(this.state.ImgName).getDownloadURL().then(url=>{
                const links=[...this.state.url]
               links.push(url)
               this.setState({
                   url:links
               })
            })

        })
       
     }
    
    render(){
        let images=null
        images=(
            <div>
            {this.state.url.map((urls=>{
                return <img key={urls} src={urls} />
            }))}
            </div>
           
        )

        
        return(
            <div className="container jumbotron">
            <h1>Welcome To Your Own Image Gallery</h1>
            <p>please upload the image file</p>
            <input type="file" onChange={this.nameChangeHandler}/>
            <br/>
            <button className="btn btn-lg btn-primary" onClick={this.imageUploadHandler}>Upload</button>
            <br></br>
       
           {images}
            </div>
        )
    }
}
export default ImageGallery;