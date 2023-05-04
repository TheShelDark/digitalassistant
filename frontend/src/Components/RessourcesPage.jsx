import { IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import GoogleIcon from '@mui/icons-material/Google';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ImageIcon from '@mui/icons-material/Image';

function RessourcesPage() {
  return (
    <>
        <Paper className='bg-gray-100 flex flex-row items-center'>
            <InfoIcon className='m-2'/>
            <p className='text-base pl-5'>Über diese Links kannst du schnell auf alle wichtigsten Ressourcen zugreifen</p>
        </Paper>

        <div className='grid grid-cols-3 gap-6 lg:gap-2 lg:mt-10 mt-28 items-center'>

                <IconButton className='flex justify-center items-center flex-col' href='https://scholar.google.com/' target='_blank'>
                    <GoogleIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>Google Scholar</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://link-springer-com.ezproxy.hwr-berlin.de/' target='_blank'>
                    <MenuBookIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>Springerlink</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://www.zotero.org' target='_blank'>
                    <BorderColorIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>Zotero</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://www.statista.com' target='_blank'>
                    <BarChartIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>Statista</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://webmail.stud.hwr-berlin.de/' target='_blank'>
                    <EmailIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>HWR WebMail</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://moodle.hwr-berlin.de/' target='_blank'> 
                    <DashboardIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>HWR Moodle</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://moodle.hwr-berlin.de/fb2-stundenplan/stundenplan.php' target='_blank'>
                    <EventNoteIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>Stundenplan FB2</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://eds.s.ebscohost.com/eds/search/basic?vid=0&sid=add32282-1b3d-4e66-8c49-2466b0c42908%40redis' target='_blank'>
                    <BookmarksIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>HoWeR</Typography>
                </IconButton>

                <IconButton className='flex justify-center items-center flex-col' href='https://commons.wikimedia.org/wiki/Main_Page' target='_blank'>
                    <ImageIcon className='w-3/5 h-3/5' />
                    <Typography variant='h6'>Wikimedia</Typography>
                </IconButton>
                
                

        </div>
    </>
  )
}

export default RessourcesPage