const React = require('react');
const {createRoot} = require('react-dom/client');


const Credits = () =>{
    return <p>Made in IGME 430</p>;
}
//component
const HelloWorld = () => {
    return (
        <div className = "greetings"> Hello world
                  <p> 2+ 3 = {3 + 2}</p>
                  <Credits/>
        </div>
    )
}

const init = () =>{
    const root = createRoot(document.getElementById('app'));
    root.render(<HelloWorld/>);
}

window.onload = init;