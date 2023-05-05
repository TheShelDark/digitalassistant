import { Typography, Paper, Divider, Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'
import Professor from '../Assets/Professor.png'
import ChecklistIcon from '@mui/icons-material/Checklist';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import AddLinkIcon from '@mui/icons-material/AddLink';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    let navigate = useNavigate();

  return (
    <>  
        <div className='flex flex-row justify-center items-center'>
            <img src={Professor} className='w-1/3 h-1/3' alt=''/>
            <div className='flex flex-col'>
                <Typography variant="h3">Willkommen bei dem PTB-Digital-Assistent</Typography>
                <p className='mt-2 text-base lg:text-lg'>Diese App will dir bei der Erstellung deines PTBs helfen, sodass du entspannt durch deine Praxisphase kommst!</p>
            </div>
        </div>

        <Divider className='mt-4'/>
        
        <div className='flex flex-col justify-center mt-10 mx-5'>
            <Typography variant="h5" className='font-bold'>Unsere Features:</Typography>

            <div className='flex flex-row mt-5 items-center justify-between'>
                <Card className='bg-gray-100 w-2/5 justify-center flex flex-row items-center hover:cursor-pointer hover:bg-gray-300'>
                    <CardActionArea>
                        <CardContent onClick={() => navigate('/checklist')}>
                            <Typography variant="h5">Checkliste</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                
                <ChecklistIcon color='primary' className='mr-14 w-1/4 h-1/4 md:w-24 md:h-24 md:mr-56' />
            </div>

            <div className='flex flex-row-reverse mt-5 items-center justify-between'>
                <Card className='bg-gray-100 w-1/2 justify-center flex flex-row items-center hover:cursor-pointer hover:bg-gray-300'>
                    <CardActionArea>
                        <CardContent onClick={() => navigate('/ganttgen')}>
                            <Typography variant="h5">Zeitplan-Generator</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <EventRepeatIcon color='primary' className='ml-14 w-1/5 h-1/5 md:w-24 md:h-24 md:ml-56' />
            </div>

            <div className='flex flex-row mt-5 items-center justify-between'>
                <Card className='bg-gray-100 w-2/5 justify-center flex flex-row items-center hover:cursor-pointer hover:bg-gray-300'>
                    <CardActionArea>
                        <CardContent onClick={() => navigate('/ressources')}>
                            <Typography variant="h5">Nützliche Links</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <AddLinkIcon color='primary' className='mr-14 w-1/4 h-1/4 md:w-24 md:h-24 md:mr-56' />
            </div>

            <div className='flex flex-row-reverse mt-5 items-center justify-between'>
                <Paper className='bg-gray-100 w-1/2 justify-center flex flex-row items-center hover:cursor-pointer hover:bg-gray-300'>
                    <CardActionArea>
                        <CardContent onClick={() => navigate('/updategen')}>
                            <Typography variant="h5">Update-Generator</Typography>
                        </CardContent>
                    </CardActionArea>
                </Paper>
                <MarkEmailReadIcon color='primary' className='ml-14 w-1/5 h-1/5 md:w-24 md:h-24 md:ml-56' />
            </div>

        </div>

    </>  
  )
}

export default HomePage