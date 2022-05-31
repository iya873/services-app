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
    border: 'none',
    borderRadius: '22px',
    backgroundColor: 'orange'
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
                <button className="hover: bg-red-500" style={bookStyle}>Book Me</button>
                <div style={containerStyle} className='divContainer'>
                    <button style={cardStyle} className='serviceCard'><a href='/services/face'>Face</a></button>
                    <button style={cardStyle} className='serviceCard'><a href='/services/body'>Body</a></button>
                    <button style={cardStyle} className='serviceCard'><a href='/services/waxing'>Waxing</a></button>
                    <button style={cardStyle} className='serviceCard'><a href='/services/products'>Products</a></button>
                </div>
            </>
        )
    }
}

module.exports = Index