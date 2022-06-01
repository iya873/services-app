const React = require('react')
const faceServ = require('../models/faceServ')
class Face extends React.Component {
    render() {
        const { faceServ } = this.props;
        return (
            <>
                <h1>Face Services !</h1>
                {faceServ.map((faceServ, props) => {
                    return (
                        <table>
                            <tr>
                                <th rowSpan='20'>Experience</th>
                                <th>Price</th>
                            </tr>
                            
                            <tr>

                                <td>{faceServ.name }</td>
                                <td>{faceServ.price }</td>
                            </tr>
                        
                        
                            
                        </table>
                    )
                })}
            </>
            
        )
    }
}

module.exports = Face