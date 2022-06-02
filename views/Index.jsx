const React = require('react')
const Services = require('../models/services')


var body = {
    backgroundColor: '#D919FF'
}

var titleStyle = {
    textAlign: 'center',
    color: 'blue',
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: '250px',
}

const cardStyle = {
    width: '22vw',
    height: '35vh',
    border: 'none',
    borderRadius: '22px',
    background: 'linear-gradient(95deg, blue, white)'
}

const bookStyle = {
    position: 'relative',
    left: '35%',
    top: '150px',
    width: '250px',
    height: '50px',
    borderRadius: '15px 0',
    backgroundColor: ''
}


class Index extends React.Component {
    render() {
        const { Services } = this.props;
        return (
            <>
                <body style={body}>
                <h1 style={titleStyle}>Services by <em>Sweet Ambiance</em></h1><br />
                <button style={bookStyle}><a href='/services/bookMe'>Book Me</a></button>
                <div style={containerStyle} className='divContainer'>
                    {Services.map((Services, props) => {
                        return (
                            <button style={cardStyle}><a href={`/services/${Services.type}`}><h3>{ Services.type }</h3></a></button>
                            )
                        })}
                </div>
                </body>  
            </>
        )
    }
}

module.exports = Index