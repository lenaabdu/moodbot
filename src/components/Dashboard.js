import React, {Component} from "react";
import ChatBot from "react-simple-chatbot";

export class Dashboard extends Component {
    config = {
        width: "300px",
        height: "400px",
        floating: true
    };

    steps = [{
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

    sleepSteps = [
    {
        id: "return",
        message: "Okay. I'm a bit confused, so let's go back to the beginning.",
        trigger: "welcome"
    },
        {
        id: "welcome",
        message: "Hello. I am MoodBot, a robot designed to help you with mental health struggles. I am a young bot, so please be patient with me.",
        trigger: "struggle"
    },
    {
        id: "struggle",
        message: "What are you struggling with?",
        trigger: "struggleOptions"
    },
    {
        id: "struggleOptions",
        options: [
            { value: 1, label: 'sleep', trigger: 'sleep' }
          ]
    },
    {
        id: "confirmSleep",
        message: "It sounds like you're having trouble with sleep. Is that right?",
        trigger: "confirmSleepOptions"
    },
    {
        id: "confirmSleepOptions",
        options: [
            { value : 1, label: 'Yes', trigger: 'sleepSympathy' },
            { value : 2, label: 'No', trigger: 'return' }
          ]
    },
    {
        id: "sleepSympathy",
        message: "I'm sorry that you're having trouble with sleep. Can you tell me what the problem is in more detail?",
        trigger: "sleepDetailOptions"
    },
    {
        id: "sleepDetailOptions",
        options: [
            { value: 1, label: `I can't sleep`, trigger: 'noSleep' },
            { value: 2, label: `I'm always tired`, trigger: 'tired' },
            { value: 3, label: `I'm sleeping too much`, trigger: 'oversleep' },
            { value: 4, label: `I wake up in the night`, trigger: 'noSleep' },
          ]
    },
    {
        id: "noSleep",
        message: `It must be frustrating that you can't sleep. Perhaps I can help.`,
        trigger: "noSleepAdvice"
    },
    {
        id: "noSleepAdvice",
        message: `High stress levels can make it hard to sleep. It might help to do a breathing exercise for ten minutes before bed. Read more about managing stress here: ${<a href="https://www.nhs.uk/conditions/stress-anxiety-depression/understanding-stress/">NHS stress page</a>}.`,
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

    render(){
        const chosenOne = this.props.match.params.userChoice
        const { data } = this.props.location
        console.log(data);
        return(
            <>
            {data}
            <ChatBot steps = { this.sleepSteps } {...this.config }/>
            </>
        )
    }
}

export default Dashboard;
