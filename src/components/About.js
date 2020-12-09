import React from 'react'

const About = () => {
    return (
        <>
        <div className="pb-8 mb-8">
        <div className="text-xl text-center text-orange-500 my-6 pb-4">
            <h1>What is MoodBot?</h1>
        </div>
            <div className=" flex w-3/4 mx-auto bg-yellow-100 shadow-md m-6 p-4 items-center" >
                <div>
                    <img className="rounded-full h-20 w-20" src="https://img.icons8.com/officel/80/000000/hug.png"/>
                </div>
                <div className="text-lg ml-4">
                    <h3>      MoodBot is a chatbot that provides support to users who are having a difficult time.</h3>
                </div>
            </div>


            <div className=" flex w-3/4 mx-auto bg-yellow-100 shadow-md m-6 p-4 items-center" >
                <div>
                <img className="rounded-full h-20 w-20" src="https://img.icons8.com/bubbles/100/000000/calm-app.png"/>
                </div>
                <div className="text-lg ml-4">
                MoodBot has a calming, friendly interface that lets users feel at ease.
                </div>
         </div>

         <div className=" flex w-3/4 mx-auto bg-yellow-100 shadow-md m-6 p-4 items-center" >
                <div>
                <img className="rounded-full h-20 w-20" src="https://img.icons8.com/bubbles/100/000000/nui2.png"/>
                </div>
                <div className="text-lg ml-4">
                MoodBot offers users a range of clickable options to access support and helpful resources. 
                </div>
         </div>

         <div className=" flex w-3/4 mx-auto bg-yellow-100 shadow-md m-6 p-4 items-center" >
                <div>
                <img className="rounded-full h-20 w-20" src="https://img.icons8.com/officel/80/000000/communication.png"/>
                </div>
                <div className="text-lg ml-6">
                MoodBot can interpret user messages and have a gentle conversation with them.
                </div>
         </div>
         </div>

        </>
    )
}
export default About;