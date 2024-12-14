import PropTypes, { shape } from "prop-types";
import Feedbackitem from "./Feedbackitem";

function Feedbacklist({feedbackData,handleDelete}){
    if (!feedbackData || feedbackData.length === 0){
        return <p>No Feedback available</p>;
    }

    return (
    <div>
        {feedbackData.map((item) =>
        <Feedbackitem item = {item} key ={item.id} handleDelete={handleDelete}  />
        )}
    </div>
);   
}

Feedbacklist.propTypes ={
    feedbackData : PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        rating : PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
    }))
}


export default Feedbacklist;