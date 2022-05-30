const React = require('react')

class Products extends React.Component {
    render() {
        const services = this.props.servies
        return (
            <>
                <h1>In House Products</h1>
                <h2>Made with Love</h2>
            </>

        )
    }
}

module.exports = Products