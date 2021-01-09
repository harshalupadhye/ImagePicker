
import './App.css';
import SignIn from './components/signIn';
import ImageGallery from './components/imageGallery';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom'


;




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path="/" exact render={()=><SignIn/>}/>
      
      <Route path="/images"  exact component={ImageGallery}/>
      </Switch>
      
   
    {/* <ImageGallery/> */}

   </div>

    </BrowserRouter>
    
     
   
  );
}

export default App;
