import React from 'react'
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        <h1 className='text-lg font-bold'>Willkommen bei dem DigitalAssistant von Olaf Resch!</h1>
        <p>Dieses Tool soll Ihnen helfen, besser durch die Vorlesungen und die Übungsaufgaben des Moduls zu kommen.</p>

        <div className='flex flex-col justify-between'>
            <div className='flex flex-row gap-4 mt-36'>
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Moodle Kurs
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sit dolore dolorum.
                    </p>
                    <Button href="https://moodle.hwr-berlin.de/course/view.php?id=74912" target="_blank"> 
                        Zum Kurs
                        <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </Button>
                </Card>

                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Chatbot
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit!
                    </p>
                    <Button as={Link} to="/chat">
                        Zum Chatbot
                        <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </Button>
                </Card>

                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        FAQ
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, neque impedit harum ratione illum hic.
                    </p>
                    <Button>
                        Zum FAQ
                        <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                        <Link to="/faq" />
                    </Button>
                </Card>
                
            </div>
            
            <div className='mb-12 mt-36'>
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noch Fragen?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button>
                        Zu meiner E-Mail
                        <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </Button>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Home