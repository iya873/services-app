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
    backgroundColor: '#FFB3F2',
    borderRadius: '15px',
    border: 'none'
}
const h2 = {
    textAlign: 'center'
}
const submitBtn = {
    position: 'relative',
    left: '40%'
}

function booked() {
    alert('Your appointment has been created !')
}
class BookMe extends React.Component {
    render() {
        const { faceServ } = this.props;
        const { bodyServ } = this.props;
        const { waxServ } = this.props;
        return (
            <>
                

                <header style={styleHeader}>
                    <h1>Bookings</h1>
                    <nav>
                        <a href='/services'>Home</a>
                    </nav>
                </header>
                <form style={formStyle} action='/services/allBookings' method='POST'>
                    <h2 style={h2}>Book With Me!</h2>
                    <label htmlFor='name' >Preferred Name:</label><br />
                    <input type='input' name='name'></input><br /><br />
                    <label htmlFor='date' name='date'>Pick a Date:  </label><br />
                    <input type='date' name='date'></input>
                    <label htmlFor='time' name='time'></label><br />
                    <input type='time' name='time'></input><br /><br />
                    
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
                    <input style={submitBtn} type='submit' value='Submit' onClick={booked}></input>
                </form>
                <footer>
                    <nav>
                        <a href='/services/bookMe/edit'>Edit</a><br />
                        <a href='/services/bookMe/edit'>Delete</a>
                    </nav>
                </footer>
            </>
       )
   }
}

module.exports = BookMe