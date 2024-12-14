import propTypes from 'prop-types';

const Card =({children,reverse}) =>{
    return (<div  className="card" style={{backgroundColor : reverse ? 'rgba(0,0,0,0,4)': 'white',
        color:reverse ? 'white':'black',
    }}>{children}</div>);
}


Card.defaultProps ={
  reverse: false, 
}

Card.propTypes ={
    children : propTypes.node.isRequired,
    reverse: propTypes.bool.isRequired,
}

export default Card;