import React,{Component} from 'react'
import ClassNames from './ClassNames'
class Test extends Component{
   constructor(){
       super()
       this.state={
           name:'Hamza'
       }
   }

   render(){
        return(
            <div>
                <ClassNames name={this.state.name}/>
                <ClassNames name='Faisal'/>
                <ClassNames name='Rai'/>

            </div>
        );
    }
}
export default Test