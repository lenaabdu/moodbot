import React from 'react'
import ChatBot from "react-simple-chatbot";

const AnxietyChat = () => {
 const   config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const anxSteps = [
        {
            id: "anxietySympathy",
            message: "I'm sorry that you're having trouble with anxiety. Can you tell me what the problem is in more detail?",
            trigger: "anxietyDetailOptions"
        },
        {
            id: "anxietyDetailOptions",
            options: [
                { value: 1, label: `I get over-anxious about things that worry me`, trigger: 'veryAnxious' },
                { value: 2, label: `I'm always anxious`, trigger: 'alwaysAnxious' },
                { value: 3, label: `I have episodes of extreme anxiety`, trigger: 'panic' },
              ]
        },
        {
            id: "veryAnxious",
            message: `It must be difficult to have such strong anxious feelings. Perhaps I can help.`,
            trigger: "veryAnxiousAdvice"
        },
        {
            id: "veryAnxiousAdvice",
            message: `It's a good idea to seek medical advice for over-anxious feelings. In the meantime, it may help to do a breathing exercise for ten minutes when you find it difficult to cope.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "alwaysAnxious",
            message: `It must be frustrating that you're always feeling anxious. Perhaps I can help.`,
            trigger: "alwaysAnxiousAdvice"
        },
        {
            id: "alwaysAnxiousAdvice",
            message: `Always feeling anxious might indicate an anxiety disorder. It's a good idea to seek medical advice. In the meantime, it may help to exercise for half an hour a day.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "panic",
            message: `It must be very difficult to cope with bouts of intense anxiety. Perhaps I can help.`,
            trigger: "panicAdvice"
        },
        {
            id: "panicAdvice",
            message: `Episodes of intense anxiety may indicate a panic disorder. Although they are often scary, they do not indicate a physical problem. It's a good idea to seek medical advice. In the meantime, it may help to carry with you something you can use to distract yourself during an episode.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "anxiousTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with anxiety? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        //end of anxiety section
        {
            id: "talkMoreOptions",
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' }
              ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
              ]
        },
        {
            id: "finish",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    
    return (
        <div>
            <ChatBot steps={anxSteps} {...config} />
        </div>
    )
}
export default AnxietyChat;