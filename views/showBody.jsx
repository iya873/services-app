const React = require('react')
const bodyServ = require('../models/bodyServ')

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
class Body extends React.Component {
    render() {
        const { bodyServ } = this.props;
        return (
            <>
                <body style={{ 'background-color': '#00FF55' }}>
                    
            <h1>Body Services!</h1>
                    <nav>
                    <a href='/services'>Home</a>
                    <button style={bookStyle}><a href='/services/bookMe'>Book Me</a></button>
                </nav>
                <table style={table}>
                            <tr>
                                <th>Experience</th>
                                <th>Price</th>
                                </tr>
                {bodyServ.map((bodyServ, props) => {
                    return (
                        
                        <tr>

                                <td style={td}>{bodyServ.name }</td>
                                <td style={td}>{bodyServ.price }</td>
                            </tr>
                        
                        
                        
                        )
                    })}
                    </table>
                    </body>
            </>
            
        )
    }
}

module.exports = Body