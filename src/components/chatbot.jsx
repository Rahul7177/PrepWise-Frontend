import { Link } from 'react-router-dom';
import '../stylesheets/Chatbot.css'; // Use the correct relative path to the CSS file


const Chatbot = () => {
  return (
    <Link to="/forum">
      <div className="chatbot-icon create-discussion">
        <button className="discussion-btn">Create Discussion</button>
      </div>
    </Link>
  );
};

export default Chatbot;
