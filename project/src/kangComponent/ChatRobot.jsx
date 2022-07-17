import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
  
const steps = [
    {
        id: '0',
        message: '你好我是小弁，很高興為您服務!',
  
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, 
    {
        id: '1',
  
        // This message appears in
        // the bot chat bubble
        message: '請問該怎麼稱呼您呢?親!',
        trigger: '2',
    }, 
    // {
    //     id: '2',
  
    //     // Here we want the user
    //     // to enter input
    //     user: true, 
    //     trigger: '3',
    // }, 
    {
        id: '2',
        message: " 你好 {previousValue}, 請問需要甚麼服務呢?可以透過點擊以下選項，來讓我為您解答喔!",
        trigger: '3',
    }, 
    {
        id: '3',
        options: [
              
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
  
        ],
        end: true,
    }
];
  
// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
  
// Set some properties of the bot
const config = {
    Avatar: true,
    floating: true,
};
  
function ChatRobot() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
  
                    // This apperas as the header
                    // text for the chat bot
                    headerTitle="順弁"
                    steps={steps}
                    {...config}
  
                />
            </ThemeProvider>
        </div>
    );
}
  
export default ChatRobot;
