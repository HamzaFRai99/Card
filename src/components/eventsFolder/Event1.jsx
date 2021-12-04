import React, { Component } from 'react'

class Event1 extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            name_array: [
                {
                    id: 1, name: 'Ahmad Jaber', phoneNumber: '0794433432', address: 'Amman,Jordan', email: 'AhmadJaber@Gmail.com',
                    img: 'https://images.generated.photos/NEsU132SpQy2_nWC3PGLA4U5nl5YboaS_wA3nxIKMnY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYWE3YmMy/YjEtZDQ5My00ZDkx/LTk3ZTYtZDk1MTgw/OGMxNGIxLmpwZw.jpg'
                },
                {
                    id: 2, name: 'Hamza Faisal', phoneNumber: '0790049921', address: 'Amman,Jordan', email: 'HamzaFaisal@Gmail.com',
                    img: 'https://images.generated.photos/C2V_5zZcDNxqOFfEICNSO0jjOT1oAuGqNl92zutuMrc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMzVmZWI1/NWUtNGFlZS00NDI5/LThkMWItNzVmNTYz/MTJjNDlmLmpwZw.jpg'
                },
                {
                    id: 3, name: 'Sadio Mane', phoneNumber: '5576477555', address: 'England,Liverpool', email: 'SadioMane@Gmail.com',
                    img: 'https://images.generated.photos/ClJ7aHIa_GomXTQ0fXo5fkL8LwVVkL5_oNPK7UUsCMw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNzNlNGI2/NzItZDkzYS00YWQ0/LThhYTItNDlkMWQ5/N2E0OTEwLmpwZw.jpg'
                },
                {
                    id: 4, name: 'Erling Haland', phoneNumber: '8829909998', address: 'Dortmond,Germany', email: 'ErlingHaland11@Gmail.com',
                    img: 'https://images.generated.photos/r3H-KOz3qKQYkKQ1Ciw7zEIyJ4VfEcQRWG-sSPLRbcc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNTI4MDQx/MzktNzdkNS00MmUy/LThlZjMtY2M3NGFl/NmI0OGFmLmpwZw.jpg'
                },
                {
                    id: 5, name: 'Kezo Michel', phoneNumber: '1226568932'  /*null */, email: 'K.Michel3354@Gmail.com',
                    img: 'https://images.generated.photos/rYeb4Tjn0svVr0wA6x9nCY9CcjoicGO2gBmK6-hq9ew/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYTVhMTBk/MjUtMDk3Yi00MDM2/LWFjNGUtNTlkM2Ix/NzhlMDFhLmpwZw.jpg'
                },
                {
                    id: 6, name: 'Karim Benzema', phoneNumber: '1729991919', address: 'Madrid,Spain', email: 'Karim.B9@Gmail.com',
                    img: 'https://images.generated.photos/1cLcuDhR7M5XmVjoOuGx6nLbrOtspn_8-A-sG68hvcI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZTBiOGRk/ZDEtODJkMy00ZmUx/LWExYWItNmE1YTM4/MmJkYjRhLmpwZw.jpg'
                },
                {
                    id: 7, name: 'jim kun', phoneNumber: '7322232865'  /*null */, email: 'jim33000kun@Gmail.com',
                    img: 'https://images.generated.photos/p8FcYZw7MR6AGzxyqHHAIwmoX-ZEFeYW_H3QckaObT8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvODBlZWQ4/ZGMtMDM4MC00NTg4/LWFmMjEtM2YyYzUy/MTYxZDVhLmpwZw.jpg'
                },
            ],
        }
        this.Next_name = this.Next_name.bind(this);
        this.First_name = this.First_name.bind(this);
        this.Last_name = this.Last_name.bind(this);
        this.Prevuos_name = this.Prevuos_name.bind(this);
    };


    Next_name() {

        if (this.state.number < this.state.name_array.length - 1) {

            this.setState(prevState => {

                return { number: prevState.number + 1 }

            })

        } else {

            this.setState(prevState => {
                return { number: 0 }

            })
        }
    }

    Prevuos_name() {

        // if (this.state.number < this.state.name_array.length
        if (this.state.number <= this.state.name_array.length - 1 && this.state.number > 0) {

            this.setState(prevState => {

                return { number: prevState.number - 1, }

            })

        } else {

            this.setState(prevState => {

                return { number: prevState.name_array.length - 1, }
            })
        }
    }

    First_name() {
        this.setState(prevState => {

            return { number: 0, }

        })
    }

    Last_name() {
        this.setState(prevState => {

            return { number: prevState.name_array.length - 1, }
        })
    }

    render() {

        let index = this.state.number
        let ID = this.state.name_array[this.state.number].id
        let key = this.state.name_array[this.state.number].id
        let name = this.state.name_array[this.state.number].name
        let phoneNumber = this.state.name_array[this.state.number].phoneNumber
        let address = this.state.name_array[this.state.number].address
        let email = this.state.name_array[this.state.number].email
        let img = this.state.name_array[this.state.number].img

        return (

            <div className='text-buttons-container'>

                <div className='names-list-form'>
                    <div className='name-header'> <h1 className='name-index'> {`Name  ${(index + 1).toString()} : ${name}`}</h1></div>

                    <div className='img-and-data-container'>
                        <img src={img} alt={name} className='members-imgs' />
                        <ul key={`${key}`} id={`${ID}`}>
                            <li>{`Phone Number : ${phoneNumber}`}</li>
                            <li>{`Address :${address === undefined ? '---Empty---' : address}`}</li>
                            <li className='email'>{`Email : ${email}`}</li>
                        </ul>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='nextname-button' onClick={this.First_name}> First </button>
                    <button className='nextname-button' onClick={this.Next_name}> Next </button>
                    <button className='nextname-button' onClick={this.Prevuos_name}> Prevuos </button>
                    <button className='nextname-button' onClick={this.Last_name}> last </button>
                </div>

            </div>

        )

    }
} export default Event1

