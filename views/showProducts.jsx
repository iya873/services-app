const React = require('react');
const products = require('../models/productImg')
const img = {
    width: '20vw',
    height: '25vh',
    margin: '15px'
}

const bookStyle = {
    position: 'absolute',
    right: '0',
    top: '50px',
    width: '250px',
    height: '50px',
    borderRadius: '15px 0'
}
const footer = {
    position: 'relative',
    left: '45%'
}
const shop = {
    width: '15vw',
    padding: '15px',
    borderRadius: '22px',
    backgroundColor: 'lime'
}

class Products extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <>
                <body style={{ 'background-color': 'yellow' }}>

                    <nav>
                    <a href='/services'>Home</a><button style={bookStyle}><a href='/services/bookMe'>Book Me</a></button>
                    </nav>
                <h1>In House Products</h1>
                <h2>Made with Love</h2>
                {products.map((products, props) => {
                    return (
                        <img style={img} src={products.img}></img>
                        )
                    })}
                <footer style={footer}>
                    <button style={shop}><a href='https://www.sweetambiancellc.com/'>Shop Now</a></button>
                </footer>
                
                </body>
            </>

        )
    }
}

module.exports = Products