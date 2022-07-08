import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './js/bot/config';
import MessageParser from './js/bot/MessageParser.js';
import ActionProvider from './js/bot/ActionProvider.js';

const ChatRobot2 = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatRobot2
