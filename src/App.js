import Header from './components/header';
import Feedbacklist from './components/feedbacklist';
import feedbackData from './components/FeedbackData';
import { useState } from 'react';

const App = () =>{
  const [feedback,setfeedbackData] =useState(feedbackData || []);
  
  function deletefeedBack(id){
    if(window.confirm("Are you sure for deletion?")){
    setfeedbackData(feedback.filter((item)=> item.id !== id));
    }else{
      console.log("nothing deleted");
    }
  }
 
  return (
  <>
  <Header/>
  <Feedbacklist feedbackData={feedback} handleDelete={deletefeedBack}/>
  </>);
}
export default App;