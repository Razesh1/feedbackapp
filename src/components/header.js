import App from "../App";
import propTypes from 'prop-types';

 function Header({text,bgColor}){ 
    const style={
        backgroundColor : bgColor,
    }

    return <div style={style}>
            <h2>{text}</h2>
        </div>;
}

export default Header;


Header.defaultProps ={
    text:'Header',
    bgColor:'blue',
}

Header.propTypes = {
    text: propTypes.string,
}
