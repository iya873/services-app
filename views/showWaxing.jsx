const React = require('react')
const waxServ = require('../models/waxServ')

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
class Waxing extends React.Component {
    render() {
        const { waxServ } = this.props;
        return (
            <>
                <body style={{ 'background-color': '#00FF55' }}>
                    
                <h1>Smoother than Baby Booty</h1>
                    <nav>
                    <a href='/services'>Home</a>
                    <button style={bookStyle}><a href='/services/bookMe'>Book Me</a></button>
                </nav>
                <table style={table}>
                            <tr>
                                <th>Experience</th>
                                <th>Price</th>
                                </tr>
                {waxServ.map((waxServ, props) => {
                    return (
                        
                        <tr>

                                <td style={td}>{waxServ.name }</td>
                                <td style={td}>{waxServ.price }</td>
                            </tr>
                        
                        
                        
                        )
                    })}
                    </table>
                    </body>
            </>
        )
    }
}

module.exports = Waxing