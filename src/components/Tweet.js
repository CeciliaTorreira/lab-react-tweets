import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import Message  from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
   {/* No sé si lo correcto ssería esperar a tener todos los componentes listos y después invocarlos o esperar a tenerlos todos y hacer este paso al final de una o is da igual el orden */}
      <div className="body">
        <div className="top">
         <User userData={props.tweet.user}/>
         <Timestamp time={props.tweet.timestamp}/>
        </div>

       <Message message={props.tweet.message}/>

       <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
