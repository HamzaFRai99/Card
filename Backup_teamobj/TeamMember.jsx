import React,{ Component } from 'react'

class TeamMember extends Component {
    
    render(){  
         return (
        <div >
            <ul key={`${this.props.key}`} id={`${this.props.ID}`}>
            <li className='member-name'>{` ${this.props.name}`}</li> 
            <li>{`Phone Number : ${this.props.phoneNumber}`}</li> 
            <li>{`Address :${this.props.address===undefined?  'NULL' :this.props.address }`}</li> 
            <li>{`Email : ${this.props.email}`}</li> 
            </ul>
        </div>
    )}
 
}
export default TeamMember