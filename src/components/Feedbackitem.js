
import Card from "./common/card";
import {FaTimes} from 'react-icons/fa';


function Feedbackitem ({item,handleDelete}){
        return (
        <Card>
                <h2>{item.rating}</h2>
                <p>{item.text}</p>
                <button class="delete" onClick={() => handleDelete(item.id)}><FaTimes /></button>
        </Card>)
}

export default Feedbackitem;