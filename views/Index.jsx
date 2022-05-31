const React = require('react')
const Services = require('../models/services')

var titleStyle = {
    textAlign: 'center',
    color: 'blue'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: '300px',
}

const cardStyle = {
    width: '22vw',
    height: '45vh',
    border: 'none',
    borderRadius: '22px',
    backgroundColor: 'orange'
}

const bookStyle = {
    position: 'relative',
    left: '45%',
    top: '150px',
    width: '250px',
    height: '50px'
}


class Index extends React.Component {
    render() {
        const { Services } = this.props;
        return (
            <>
                <h1 style={titleStyle}>Services by <em>Sweet Ambiance</em></h1><br />
                <button style={bookStyle}>Book Me</button>
                <div style={containerStyle} className='divContainer'>
                    {Services.map((Services, props) => {
                        return (
                            <button style={cardStyle}><a href={`/services/${Services.type}`}><h3>{ Services.type }</h3></a></button>
                        )
                    })}
                </div>
            </>
        )
    }
}

module.exports = Index