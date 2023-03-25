import React from 'react'
import { Sidebar } from 'flowbite-react'
import { HiHome, HiChatAlt2, HiQuestionMarkCircle, HiLockClosed, HiInformationCircle } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';


function PageLayout(props) {
    const location = useLocation();
    return (
        <div className='flex flex-row bg-slate-700 min-h-screen min-w-screen text-white'>
            <div className="w-fit">
                <Sidebar className="bg-[#6B728E]" aria-label="Sidebar with content separator example">
                    <h1 className='text-center text-2xl font-bold mb-8 text-white'>DigitalAssistant</h1>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                as={Link}
                                to="/"
                                icon={HiHome}
                                active={location.pathname === '/' ? true : false}
                            >
                                Übersicht
                            </Sidebar.Item>
                            <Sidebar.Item
                                as={Link}
                                to="/chat"
                                icon={HiChatAlt2}
                                active={location.pathname === '/chat' ? true : false}
                            >
                                Chatbot
                            </Sidebar.Item>
                            <Sidebar.Item
                                as={Link}
                                to="/faq"
                                icon={HiQuestionMarkCircle}
                                active={location.pathname === '/faq' ? true : false}
                            >
                                FAQ
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={HiInformationCircle}
                            >
                                Impressum
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#" icon={HiLockClosed}>
                                Datenschutz
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div className='p-12 pt-16 w-full'>
                {props.children}
            </div>
            
        </div>
    )
}

export default PageLayout