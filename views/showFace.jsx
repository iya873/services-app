const React = require('react')
const faceServ = require('../models/faceServ')

const bookStyle = {
    position: 'absolute',
    right: '0',
    top: '50px',
    width: '250px',
    height: '50px',
    borderRadius: '15px 0'
}
const table = {
    width: '100%',
    textAlign: 'left',
    fontSize: '25px',
    color: 'purple'
}
const td = {
    color: 'pink',
    backgroundColor: '#FF19B3'
}
class Face extends React.Component {
    render() {
        const { faceServ } = this.props;
        return (
            <>
                <body style={{ 'background-color': '#00FF55' }}>

                <nav>
                    <a href='/services'>Home</a>
                    <button style={bookStyle}><a href='/services/bookMe'>Book Me</a></button>
                    </nav>
                <h1>Face Services !</h1>
                        <table style={table}>
                            <tr>
                                <th>Experience</th>
                                <th>Price</th>
                                </tr>
                {faceServ.map((faceServ, props) => {
                    return (
                        
                        <tr>

                                <td style={td}>{faceServ.name }</td>
                                <td style={td}>{faceServ.price }</td>
                            </tr>
                        
                        
                        
                        )
                    })}
                    </table>
                    </body>
            </>
            
        )
    }
}

module.exports = Face