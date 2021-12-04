import React, { Component } from 'react';
import TeamMember from './TeamMember'
import TeamInfo from './TeamInfo';

class Team extends Component {

    constructor(){
        super()
            this.state ={
                info :TeamInfo
            }  

    }

 

mapping(x){
      const allnames = x.map(n => <TeamMember
            ID={n.id}
            key={n.keynum}
            name={n.name}
            phoneNumber={n.phoneNumber}
            address={n.address}
            email={n.email} />


        ); 
        return allnames;
}
    render() {
         
        return (
            <div className='members-list'>
                {this.mapping(this.state.info)}
            </div>
        )
    }
}
export default Team