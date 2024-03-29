import React from 'react';
import Stats from "./Stats";


const Header = (props) => {
    return(
        <header>
            <Stats todos={props.todos} />
            <h1>{props.title}</h1>
        </header>
    );
}


export default Header;