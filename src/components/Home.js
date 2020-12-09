import React from 'react'
import { useState } from 'react';
import "../style.css";
import InfoBoard from "./InfoBoard";
import ChatList from './ChatList';

const Home = () => {
    const [userChoice, setUserChoice] = useState("")
    const [choiceMade, setChoiceMade] = useState(false)

    const choice = (e) => {
        console.log(e);
        setUserChoice(e)
        setChoiceMade(true)
    }

    const goBack = () => {
        setChoiceMade(false)
    }

    const element = document.querySelector('.aiBot');
    window.watsonAssistantChatOptions = {
        integrationID: "fa99d091-a5d8-4361-b7d8-433c333fd3a8", // The ID of this integration.
        region: "eu-gb", // The region your integration is hosted in.
        serviceInstanceID: "73ddd44d-0a6e-4208-854f-85f3a9033282", // The ID of your service instance.
        element: element,
        showLauncher: false,
        onLoad: function (instance) {
            const button = document.querySelector('.chatLauncher');
            button.addEventListener('click', function clickListener() {
                instance.openWindow();
            });
            instance.updateCSSVariables({
                'BASE-font-family': '"Times New Roman", Times, serif',
                '$active-primary': '#2c5282',
                '$focus': '#2c5282',
                '$hover-primary': '#2c5282',
                '$interactive-01': '#2c5282',
                "$position": "fixed",
                "$bottom": "30px",
                "$right": "532px",
                "$z-index": "9999",
                "$width": "300px",
            });
            instance.render().then(function () {
                // Now that web chat has been rendered (but is still closed), we make the
                // custom launcher button visible.
                button.style.display = 'block';
                button.classList.add('open');
            });
        }
    };
    setTimeout(function () {
        const t = document.createElement('script');
        t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
        document.head.appendChild(t);
    });
    return (
        <>

            <div className="md:flex">

                {(choiceMade) ? (
                    <>
                        <div>
                            <InfoBoard userChoice={userChoice} />


                            <button className="text-red-500 mx-8 mb-8 focus:outline-none transform hover:scale-125" onClick={goBack}>
                                <img src="https://img.icons8.com/fluent/48/000000/circled-left-2.png" />
                            </button>
                        </div>

                    </>
                ) : (
                        <div className=" mx-4 my-4">
                            <div className="grid sm:grid-cols-1 bg-blue-800 rounded px-4 py-4 ">


                                <h3 className="first-question">What would you like to talk about today?</h3>
                                <div className="choices">
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('sleep')}>Better sleep</button>
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('relaxation')}>Relaxation</button>
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('mindfulness')}>Mindfulness</button>
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('gratitude')}>Gratitude</button>
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('stress')}>Stress Relief</button>
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('anxiety')}>Anxiety Reduction</button>
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('anger')}>Anger</button>
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('loneliness')}>Loneliness</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded" onClick={() => choice('urgent')} >Urgent Help</button>
                                </div>
                            </div>

                        </div>
                    )}


                <div id="chatTrial" className="col-span-2">
                    <ChatList choiceMade={choiceMade} userChoice={userChoice} />


                </div>


            </div>

            <div id="aiBot">
                <button type="button" class="chatLauncher" style={{ display: "none" }}>
                    <div>
                        <strong>Intelligent MoodBot</strong>
                    </div>
                </button>
            </div>

        </>
    )

}

export default Home;