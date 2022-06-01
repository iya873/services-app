const React = require('react');
const Services = require('../models/services')
class Products extends React.Component {
    render() {
        const { Services } = this.props;
        return (
            <>
                <h1>In House Products</h1>
                <h2>Made with Love</h2>
                <div>
                
                </div>
            </>

        )
    }
}

module.exports = Products