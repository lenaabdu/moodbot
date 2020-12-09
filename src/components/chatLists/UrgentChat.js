import React from 'react'
import ChatBot from "react-simple-chatbot";

const UrgentChat = () => {
 const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const urgentSteps = [
        {
            id: "urgent1",
            message: "I'm sorry that you are in an urgent situation. I must ask you whether you are in immediate danger.",
            trigger: "immediate"
        },
        {
            id: "immediate",
            options: [
                { value: 1, label: `Yes, I am in immediate danger`, trigger: 'danger1' },
                { value: 2, label: `No, I'm not in immediate danger`, trigger: 'safe1' },
              ]
        },
        {
            id: "danger1",
            message: `If you are in immediate danger, please contact the emergency services. In the UK, the number to call is 999.`,
            trigger: "danger2"
        },
        {
            id: "danger2",
            message: `I cannot contact the emergency services on your behalf. While you do that, I can keep you company.`,
            trigger: "advice"
        },
        {
            id: "safe1",
            message: `I'm glad to hear that you aren't in immediate danger. I can provide some advice for you that may help.`,
            trigger: "advice"
        },
        {
            id: "advice",
            message: `Do any of these statements fit with how you're feeling right now?`,
            trigger: "adviceQuestion"
        },
        {
            id: "adviceQuestion",
            options: [
                { value: 1, label: `I feel like I'm a burden to others.`, trigger: 'burden' },
                { value: 2, label: `I'm under so much pressure that I can't cope`, trigger: 'pressure' },
                { value: 3, label: `I'm suffering too much to cope with`, trigger: 'suffering' },
              ]
        },
        {
            id: "burden",
            message: `I'm very sorry to hear that you feel like a burden. You should know that most feelings like this aren't an accurate reflection of reality.`,
            trigger: "burden2"
        },
        {
            id: "burden2",
            message: `So even though you feel like you're a burden, you most likely aren't. It may help to think of people you know who care about you.`,
            trigger: "burden3"
        },
        {
            id: "burden3",
            message: `I'm sure that they miss you when you're not around.`,
            trigger: "question2"
        },
        {
            id: "pressure",
            message: `I'm very sorry to hear that you're under so much pressure. It may help to know that you're not alone.`,
            trigger: "pressure2"
        },
        {
            id: "pressure2",
            message: `Huge numbers of people struggle with feelings of pressure every day.`,
            trigger: "pressure3"
        },
        {
            id: "pressure3",
            message: `You could try imagining whether you'll care about the situation that's difficult now in a year's time. Will anyone care in a hundred years?`,
            trigger: "pressure4"
        },
        {
            id: "pressure4",
            message: `This may provide a useful perspective and relieve the pressure somewhat.`,
            trigger: "question2"
        },
        {
            id: "suffering",
            message: `I'm very sorry to hear that you're suffering so badly.`,
            trigger: "suffering2"
        },
        {
            id: "suffering2",
            message: `Please know that suffering is temporary. Though it may seem impossible to overcome it now, you will feel better.`,
            trigger: "suffering3"
        },
        {
            id: "suffering3",
            message: `Humans have a remarkable tendency to recover from suffering. They also tend to over-estimate how much a problem will trouble them in the future.`,
            trigger: "suffering4"
        },
        {
            id: "suffering4",
            message: `There's no easy fix, but I'm sure that you will feel better sooner than you expect.`,
            trigger: "question2"
        },
        {
            id: "question2",
            message: `Would you like advice on other feelings?`,
            trigger: "question2Options"
        },
        {
            id: "question2Options",
            options: [
                { value: 1, label: `Yes`, trigger: 'adviceQuestion' },
                { value: 2, label: `No`, trigger: 'question3' }
              ],
        },
        {
            id: "question3",
            message: `Would you like to tell me anything else? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
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
            <ChatBot steps={urgentSteps} {...config} />
        </div>
    )
}
export default UrgentChat;