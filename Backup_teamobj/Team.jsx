import React, { Component } from 'react';
import TeamMember from './TeamMember'

class Team extends Component {
    render() {
        const info = [
            { id: 1, keynum: 1, name: 'Hamza Faisal', phoneNumber: '0790049921'  , address: 'Amman,Jordan', email: 'HamzaFaisal@gmail.com', },
            { id: 2, keynum: 2, name: 'Ahmad Jaber' , phoneNumber: '0794433432'  , address: 'Amman,Jordan', email: 'AhmadJaber@gmail.com', },
            { id: 3, keynum: 3, name: 'jim kun'     , phoneNumber: '7322232865'   /*null */               , email: 'jim33000kun@gmail.com', },
        ];

        const allnames = info.map(n => <TeamMember
            ID={n.id}
            key={n.keynum}
            name={n.name}
            phoneNumber={n.phoneNumber}
            address={n.address}
            email={n.email} />


        );

        return (
            <div className='members-list'>
                {allnames}
            </div>
        )
    }
}
export default Team