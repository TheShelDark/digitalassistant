import { Button } from 'flowbite-react'
import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { TextInput, Card } from 'flowbite-react'

function Chat() {
  return (
    <div>
        <div className='flex flex-row min-w-screen justify-center items-center'>
            <TextInput
                id="email4"
                type="text"
                placeholder="Deine Eingabe..."
                required={true}
                className="w-full h-full"
            />
            <Button className='h-full'><HiSearch size={20}/></Button>
        </div>

        <Card className='mt-24'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wie funktioniert der Chatbot?
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Tippe deine Eingabe ein und erhalte Anworten von meinem MachineLearning Chatbot, welcher dir all deine Fragen zu dem Inhalt der Vorlesung beantworten kann!
            </p>
        </Card>
    </div>
    
    
  )
}

export default Chat