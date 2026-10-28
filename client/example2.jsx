const React = require('react');
const {useState} = React;
const {createRoot} = require('react-dom/client');

const HelloUser = (props) => {

    const [username, setUser] = useState(props.username);

    return(
        <div>
            <p> Hello {username}</p>
            <label>Change Name: </label>
            <input type="text" 
            value={username}
            onChange= {
                (e) => {
                    setUser(e.target.value);
                }
            }></input>
        </div>
    )
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <div>
            <HelloUser username="Lily"/>
        </div>
        
    );
}

window.onload = init;
