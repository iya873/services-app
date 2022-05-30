const React = require('react')

var titleStyle = {
    textAlign: 'center',
    color: 'blue'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: '180px',
}

const cardStyle = {
    width: '22vw',
    height: '45vh',
    border: 'none'
}

const bookStyle = {
    position: 'relative',
    left: '35%',
    top: '150px',
    width: '250px',
    height: '50px'
}

class Index extends React.Component {
    render() {
        return (
            <>
                <h1 style={titleStyle}>Services by <em>Sweet Ambiance</em></h1><br />
                <button style={bookStyle}>Book Me</button>
                <div style={containerStyle} className='divContainer'>
                    <button style={cardStyle} className='serviceCard'>Face</button>
                    <button style={cardStyle} className='serviceCard'>Body</button>
                    <button style={cardStyle} className='serviceCard'>Waxing</button>
                    <button style={cardStyle} className='serviceCard'>Products</button>
                </div>
            </>
        )
    }
}

module.exports = Index