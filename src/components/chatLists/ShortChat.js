import React from 'react'
import ChatBot from "react-simple-chatbot";

const ShortChat = () => {
 const   config = {
        width: "300px",
        height: "400px",
        floating: true
    };

  const  shortSteps = [{
        id: "Greet",
        message: "Hello, and welcome to MoodBot!",
        trigger: "Ask name"
    },
    {
        id: "Ask name",
        message: "What is your name?",
        trigger: "Waiting user input for name"
    },
    {
        id: "Waiting user input for name",
        user: true,
        trigger: "Asking welcome"
    },
    {
        id: "Asking welcome",
        message: "Hi {previousValue}! It's great to meet you !!",
        trigger: "Ask topic"
    },
    {
        id: "Ask topic",
        message: "What can I help you with today, {previousValue}?",
        trigger: "Options"
    },
    {
        id: "Options",
        options: [
            { value: 1, label: 'I have high stress levels', trigger: 'Stress' },
            { value: 2, label: `I'm feeling anxious`, trigger: 'Anxiety' },
            { value: 3, label: `I am sad and I don't know why`, trigger: 'Sad' },
        ]
    },
    {
        id: "Stress",
        message: "Stress is a problem that many people grapple with. It may help to take some time for yourself and listen to some calming music.",
        trigger: "Done"
    },
    {
        id: "Anxiety",
        message: "Anxiety is a natural emotion. However, it can be distressing when there's too much of it. It may help to perform some breathing exercises.",
        trigger: "Done"
    },
    {
        id: "Sad",
        message: "Sadness is a natural part of human life. However, if you're feeling sad for no reason you might benefit from some support. Head to the resources page to read about what to do next.",
        trigger: "Done"
    },
    {
        id: "Done",
        message: "I hope our chat has been helpful, and I wish you all the best.",
        end: true
    },
    ];

    return (
        <div>
            <ChatBot steps={shortSteps} {...config} />
        </div>
    )
}
export default ShortChat;