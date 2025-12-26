import PropTypes from 'prop-Types';

function UserGreetings(props){

    const welcomeMessage =  <h2 className="welcome-message">welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">please Login to continue</h2>

    /* if(props.isLoggedIn){
        return <h2>welcome {props.username}</h2>
    }
    else{
        return <h2>please log in to continue </h2>
} */


        return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreetings.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "guest",
}
export default UserGreetings