const React = require('react')
const Services = require('../models/services')
class Products extends React.Component {
    render() {
        const { services } = this.props;
        return (
            <>
                <h1>In House Products</h1>
                <h2>Made with Love</h2>
                <div>
                    {Services.map((Services, props) => {
                        return (
                            <img src={`/services/${Services.image}`} alt='images of Sweet Ambiance products'/>
                        )
                    })}
                </div>
            </>

        )
    }
}

module.exports = Products