const React = require('react')

const bookStyle = {
    position: 'absolute',
    right: '0',
    top: '50px',
    width: '250px',
    height: '50px'
}
class Change extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <a href='/services'>Home</a>
                    <button style={bookStyle}><a href='/services/bookMe'>Book Me</a></button>
                </nav>
                <form style={{'margin': '25px'}}>
                    <label htmlFor='name'>Name: </label><br />
                    <input type='text'></input><br /><br />
                    <label htmlFor='number'>Number: </label><br />
                    <input type='tel'></input><br />
                    <input type='submit' value='Submit'></input>
                </form>
            </>
        )
    }
}

module.exports = Change