const React = require('react')
const faceServ = require('../models/faceServ')
const bodyServ = require('../models/bodyServ')
const waxServ = require('../models/waxServ')



const styleHeader = {
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: '700'
}
const formStyle = {
    border: '2px solid purple',
    height: '400px',
    width: '500px',
    marginLeft: '5px',
    display: 'block',
}
const h2 = {
    textAlign: 'center'
}
const submitBtn = {
    position: 'relative',
    left: '40%'
}
class BookMe extends React.Component {
    render() {
        const { faceServ } = this.props;
        const { bodyServ } = this.props;
        const { waxServ } = this.props;
        return (
            <>
                

                <header style={styleHeader}><h1>Bookings</h1></header>
                <form style={formStyle} action=''>
                    <h2 style={h2}>Book With Me!</h2>
                    <label htmlFor='name' >Preferred Name:</label><br />
                    <input type='input' name='name'></input><br /><br />
                    <label htmlFor='pronouns'>Preferred Pronouns: </label><br />
                    <select name='pronouns' id='pros'>
                        <option value='She/Her'>She/Her</option>
                        <option value='They/Them'>They/Them</option>
                        <option value='Genderless'>Genderless</option>
                        <option value='He/Him'>He/Him</option>
                    </select><br /><br />
                    <label htmlFor='serviceopts'>Choose a Service:</label><br></br>

                    <select name='serviceopts' id='serviceopts' multiple>
                        <optgroup label='Facials'>
                            {faceServ.map((faceServ, props) => {
                                return (
                                    <option>{faceServ.name }</option>
                                    )
                                })}
                        </optgroup>
                        <optgroup label='Massages'>
                            {bodyServ.map((bodyServ, props) => {
                                return (
                                    <option>{bodyServ.name}</option>
                                    )
                                })}
                        </optgroup>
                        <optgroup label='Waxing'>
                            {waxServ.map((waxServ, props) => {
                                return (
                                    <option>{waxServ.name}</option>
                                    )
                                })}
                        </optgroup>
                    </select><br /><br />
                    <label htmlFor='number'>Phone Number: </label><br />
                    <input type='tel' name='number'></input><br /><br />
                    <label htmlFor='submit'></label>
                    <input style={submitBtn} type='submit' value='Submit'></input>
                </form>
            </>
       )
   }
}

module.exports = BookMe