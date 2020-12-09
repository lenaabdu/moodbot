import React from 'react';
import { useState, useEffect } from 'react'

const InfoBoard = (props) => {
    const mychoice = props.userChoice;
    console.log("my choice is", mychoice)

    const cardInfo = [
        {
            tag: "sleep",
            imageURL: "",
            title: "Better Sleep",
            introduction: "Better sleep quality is crucial for physical and mental health. An average adult needs at least eight hours of sleep every night to feel rested.",
            additionalInfo: "Poor sleep quality/ sleeplessness is often caused by overstimulation before bedtime (such as excessive screen-time), over consumption of caffeine, noise, too much sleep during the day, stress etc. ",
            remedies: ["You should consult your GP if you have sleep disorder and is affecting your health/quality of life.", "To improve your sleep habit in general you can try following active lifestyle, limiting daytime naps, avoiding caffeine and stimulating activities before bedtime."],
            links: [{ "key": "NHS Guideline To Better Sleep", "value": "https://www.nhs.uk/live-well/sleep-and-tiredness/how-to-get-to-sleep/" },
            { "key": "How To Fall Asleep and Sleep Better (NHS)", "value": "https://www.nhs.uk/oneyou/every-mind-matters/coronavirus-how-to-fall-asleep-and-sleep-better/" },
            { "key": "Sleeping Difficulty", "value": "https://www.healthline.com/health/sleeping-difficulty" }]


        },
        {
            tag: "relaxation",
            image: "",
            title: "Relaxation",
            introduction: "Balancing productivity and relaxation is an important factor for a healthy lifestyle. We all need to wind down from time to time for our mental and physical wellbeing.",
            additionalInfo: "Some of the benefits of relaxation involve more energy, better focus and mental clarity, improved mood, reduced chances of depression and anxiety.",
            remedies: ["No matter how busy your schedule is, finding a time to relax and unwind is crucial. Here are some ways to relax: getting good night’s sleep, limiting social media usage, planning and organizing in advance to avoid any last minute stress or simply engaging in any activity that calms you down such as painting, walking in nature, spending time with your pet etc. "],
            links: [{ "key": "Relaxation Booklet (NHS)", "value": "https://www.cpft.nhs.uk/Documents/CFS%20ME/Relaxation%20Booklet%20Booklet%20%202019.pdf" },
            { "key": "Relaxation Techniques", "value": "https://www.nhs.uk/oneyou/every-mind-matters/coronavirus-how-to-fall-asleep-and-sleep-better/" },
            ]

        },
        {
            tag: "mindfulness",
            image: "",
            title: "Mindfulness",
            introduction: "Mindfulness  means living in the moment or intentional living. Mindfulness helps us to be more aware of our feelings, our thought process and our surrounding.",
            additionalInfo: "It can be easy to go about our daily lives in autopilot rushing from one thing to the next. Mindfulness encourages us to be more aware of the present moment and enjoy the world around us. Being mindful helps us to stay focused in a distracted world that we live in.",
            remedies: ["Find a place to sit that feel calm and peaceful.", "If you are a beginner, you may find it helpful to set a time limit (say 5-10) minutes.", "Notice your body.", "Follow the sensation of your breath as it goes in and out.", "It is inevitable to have your mind wander while practising mindfulness. When you notice this, simply return your attention to the breath.", "Be kind to your wandering mind. All you need to do is gently return to the present moment."],
            links: [{ "key": "Be Mindful (NHS)", "value": "https://www.nhs.uk/apps-library/be-mindful/" },
            { "key": "Bedtime Meditation (NHS)", "value": "https://www.nhs.uk/conditions/nhs-fitness-studio/bedtime-meditation/" },
            ]
        },
        {
            tag: "gratitude",
            image: "",
            title: "Gratitude",
            introduction: "Gratitude is the state of mind in which we are thankful and appreciative of what we have.  Expressing gratitude has shown to have powerful effect on mental wellbeing.At a time when we are struggling to adjust to the changes around us, practising gratitude is more important than ever.",
            additionalInfo: "The benefits of gratitude have been scientifically proven over and over again. When we express gratitude or receive it, our brain releases dopamine and serotonin, the two crucial neurotransmitters that are famously known as happy hormones. In addition to that, showing gratitude can improve our social bonds, make us more optimistic as and improve our mental strength as well as overall physical health.",
            remedies: ["We all have ability and opportunity to practise gratitude in all circumstances.  Gratitude doesn’t have to be saved for extra special things in life. It can be as simple as appreciating a clear sky or being able to take your dog for a walk. Nothing is too small for you to be grateful about. One way to practice gratitude that people often find helpful is keeping a gratitude journal, where you write about things that you are grateful for that that day/week. (You might want to have a look at the template in link below or look for some apps for that)"],
            links: [{ "key": "Gratitude Journal (NHS)", "value": "https://www.nlg.nhs.uk/content/uploads/2019/06/gratitude-journal.pdf" },
            ]
        },
        {
            tag: "stress",
            image: "",
            title: "Stress",
            introduction: "Stress is body’s natural response to mental or emotional press. Stress triggers our fight-or-flight response, and has helped our ancestors survive. ",
            additionalInfo: "Stress isn’t always a bad thing. Some amount of stress can be helpful and motivating. But prolonged stress can be detrimental to mental as well as physical health in the long run. It can further lead to other stress-related diseases.",
            remedies: ["Get regular exercise.", "Try relaxing activities such as yoga, tai-chi, gardening etc.", "Plan ahead to avoid stress caused by last-minute activities.", "Practise breathing exercise regularly to ease stress"],
            links: [{ "key": "Feeling Stressed?", "value": "https://www.nhs.uk/oneyou/every-mind-matters/stress/" }, { "key": "How to Manage Stress", "value": "https://www.mind.org.uk/information-support/types-of-mental-health-problems/stress/what-is-stress/" }, { "key": "NHS Guidelines for Stress", "value": "https://www.nhs.uk/conditions/stress-anxiety-depression/understanding-stress/" }
            ]
        },
        {
            tag: "anxiety",
            image: "",
            title: "Anxiety",
            introduction: "Anxiety is your body’s natural response to stress. However, excessive amount of anxiety over a period can become a medical disorder, often known as anxiety disorder.  ",
            additionalInfo: "People with an anxiety disorder have very strong feelings fear, apprehension and worry that may affect their day to day living. They may go out of their way to avoid certain event, things or people. People with anxiety also experience physical symptoms such as shortness of breath, dizziness, rapid heartbeat and panic attacks.",
            remedies: ["There are many helpful anxiety treatments and self-help strategies listed in the NHS links listed below. Regular exercise and healthy diet, calming breathing exercises and better sleep are known to help regulate anxiety to some extent. Anxiety UK is a great place to get some help and advice. ",],
            links: [{ "key": "Anxiety UK", "value": "https://www.anxietyuk.org.uk/" }, { "key": "A to Z Mental Health Organizations", "value": "https://www.nhs.uk/conditions/stress-anxiety-depression/mental-health-helplines/" }, { "key": "Do I have an anxiety disorder?", "value": "https://www.nhs.uk/common-health-questions/lifestyle/do-i-have-an-anxiety-disorder/" }
            ]
        },
        {
            tag: "anger",
            image: "",
            title: "Anger",
            introduction: "Anger is a normal human response to something that threatens, humiliates or wrongs you. It becomes a problem when you express it in a way that harms yourself or others.  ",
            additionalInfo: "Studies have found that chronic anger can lead to health problems such as  heart disease, high blood pressure and strike.  Angry outbursts can damage your relationship with others as well and it some cases lead to physical violence.",
            remedies: ["Supressing your anger is not the answer to these problems. There are healthier ways to manage your anger when you find yourself in difficult situations. A good way to start is to accept that you can’t always control the things that happen to you but can control how you respond to these events. Identifying triggers and developing coping mechanisms may help to some extent. Some useful resources on controlling anger are listed below.",],
            links: [{ "key": "Controlling Anger", "value": "https://www.nhs.uk/conditions/stress-anxiety-depression/controlling-anger/" }, { "key": "Treatment and Support", "value": "https://www.mind.org.uk/information-support/types-of-mental-health-problems/anger/treatment-and-support/" }]
        },
        {
            tag: "loneliness",
            image: "",
            title: "Loneliness",
            introduction: "Loneliness can be a very difficult feeling, something that may come and go or become persistent. Most people feel lonely sometimes, for different reasons. Chronic loneliness occurs when feelings of loneliness and social isolation go on for a long period of time.   ",
            additionalInfo: "If unchecked, chronic loneliness may lead to more serious mental and physical health problems such as depression, sleep disorders, heart disease etc. Chronic loneliness is also known to cause cognitive decline and inability to focus. ",
            remedies: ["If your are dealing with feeling of loneliness, it might help to talk to your GP or a therapist. You might find it helpful to join some groups or go to events where there are high chance of meeting like-minded people. Volunteering for something that you like doing may help you make new connections. Find out what support is available in your neighbourhood. Talk to your GP about how you access these support. ",],
            links: [{ "key": "Feeling lonely", "value": "https://www.nhs.uk/conditions/stress-anxiety-depression/feeling-lonely/" }, { "key": "Tips to manage loneliness", "value": "https://www.mind.org.uk/information-support/tips-for-everyday-living/loneliness/tips-to-manage-loneliness/" }, { "key": "Supportline", "value": "https://www.supportline.org.uk/problems/loneliness/" }
            ]
        },
        {
            tag: "urgent",
            image: "",
            title: "Urgent Help",
            introduction: "If you are feeling down or suicidal, it is very important to talk to someone.",
            additionalInfo: "",
            remedies: ["Remember you do not have to go through this alone. There are some  help available that you can access right now. Please contact a helpline or a mental health crisis centre through the links below."],
            links: [{ "key": "Find an urgent mental health helpline", "value": "https://www.nhs.uk/service-search/mental-health/find-an-urgent-mental-health-helpline" }, { "key": "Help for suicidal thoughts", "value": "https://www.nhs.uk/conditions/suicide/" }
            ]
        },


    ]

    const openBot=()=>{
        
    }

    return (
        <div className="grid md:grid-cols-2">
            <div className="col-span-1 my-6 mx-4  bg-indigo-700 min-h-full text-white rounded px-4 py-4 ">



                {cardInfo.filter(card => card.tag === mychoice).map(filteredInfo => (
                    <div key={filteredInfo.tag}>

                        <h2 className="font-bold text-lg py-4 truncate">{filteredInfo.title}</h2>
                        <p className="py-4">{filteredInfo.introduction}</p>
                        {filteredInfo.additionalInfo} <br /> <br />
                        <ul className="bg-yellow-300 rounded text-gray-800 px-4 py-4 mx-4">
                            {filteredInfo.remedies.map(function (remedy, i) {
                                return <li className="py-1 px-2 mx-2" key={i}>{remedy}</li>
                            })}
                        </ul>

                        <ul className="px-4 py-4 mx-4 my-4">
                            {filteredInfo.links.map(function (help, i) {
                                return <li className="bg-teal-600 hover:bg-teal-800 text-white  py-2 px-4 border border-teal-700 rounded mb-4 " key={i}> <a href={help.value} target="_blank" >{help.key}</a>
                                </li>
                            })}
                        </ul>
                        <button onClick={openBot} className="bg-white hover:bg-orange-500 text-orange-700 float-right hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded center">Talk to MoodBot about it.</button>


                    </div>
                ))}

            </div>
        </div>
    )
}
export default InfoBoard;
