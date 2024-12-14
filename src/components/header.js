
import propTypes from 'prop-types';

 function Header({text,bgColor}){ 
    const style={
        backgroundColor : bgColor,
        color: 'red',
    }

    return <div style={style}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </div>;
}

export default Header;

Header.defaultProps ={
    text:'Feedback App',
    bgColor:'blue',
}

Header.propTypes = {
    text: propTypes.string,
    bgColor: propTypes.string,
}

