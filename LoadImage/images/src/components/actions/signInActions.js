import * as actionTypes from './actionTypes';
import PropsTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
export const onSubmit=()=>{
    console.log("hey")
    return{
       type:actionTypes.onSubmit
    }
    
}

export const onChange=(id,event)=>{
    
    
    return{
        type:actionTypes.onchange,
        id:id,
        data:event.target.value
    }
}

// onChange.PropsTypes={
//     id:PropsTypes.string,
//     event:PropsTypes.string
// }
// export default onChange

