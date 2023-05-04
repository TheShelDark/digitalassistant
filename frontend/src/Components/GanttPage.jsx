import { Button, Card, CardContent, IconButton, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Chart from 'react-google-charts';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function GanttPage() {
      
      const columns = [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
      ];

      const [phases, setPhases] = useState([])
      const [phaseName, setPhaseName] = useState('')
      const [startDate, setStartDate] = useState('')
      const [endDate, setEndDate] = useState('')
      const [chartData, setChartData] = useState(null)

      const onAddPhase = (name, start, end) => {
        if (name !== '' || start !== '' || end !== '') {
            console.log(start)
            var starting_timestamp = Date.parse(start);
            var starting_date = new Date(starting_timestamp);
            console.log(starting_date)
            console.log(starting_date.toLocaleDateString('en-CA'))

            var ending_timestamp = Date.parse(end);
            var ending_date = new Date(ending_timestamp);

            if (phases.length === 0) {
                setPhaseName('')
                setStartDate('')
                setEndDate('')
                setPhases([[name, name, starting_date, ending_date, null, 100, null]])
            } else {
                setPhaseName('')
                setStartDate('')
                setEndDate('')
                setPhases([...phases, [name, name, starting_date, ending_date, null, 100, null]])
            }
        }

        
        
      }

      const onRemovePhase = (name, start, end) => {
        var starting_timestamp = Date.parse(start);
        var starting_date = new Date(starting_timestamp);

        var ending_timestamp = Date.parse(end);
        var ending_date = new Date(ending_timestamp);

        setPhases(phases.filter(item => item[0] !== name && item[2] !== starting_date && item[3] !== ending_date))
      }

      const onCreateChart = (e) => {
        e.preventDefault()
        console.log(columns)
        console.log(phases)
        setChartData([columns, ...phases])
        console.log(chartData)
        setPhases([])
      }

      const printChart = () =>{     
        //console.log('print');  
        let printContents = document.getElementById('printable-chart').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents; 
      }


  return (
    <>
        <p className='mt-2 mb-4 text-base lg:text-lg'>Erstelle einen Zeitplan für deinen PTB und sende ihn deinem Prof!</p>
        
        <form onSubmit={(e) => onCreateChart(e)}>
            <p className='mt-2 mb-4 text-base font-bold lg:text-lg'>PTB Phasen</p>
            
            {
                phases.length === 0 ?
                    <div className='flex flex-row mb-12 items-end'>
                        <TextField id="standard-basic" onChange={(e) => setPhaseName(e.target.value)} label="Name" required variant="standard" />

                        <div className='flex flex-col ml-4'>
                            <label htmlFor="start-date">Startdatum</label>
                            <Input onChange={(e) => setStartDate(e.target.value)} required type='date' id='start-date' />
                        </div>
                        
                        <div className='flex flex-col ml-4'>
                            <label htmlFor="end-date">Enddatum</label>
                            <Input onChange={(e) => setEndDate(e.target.value)} required type='date' id='end-date' />
                        </div>

                        <IconButton onClick={() => onAddPhase(phaseName, startDate, endDate)} color='success' className='p-0'>
                            <AddCircleIcon className='ml-6 w-8 h-8 p-0' />
                        </IconButton>
                        
                    </div>

                : 
                    <>
                        {phases.map((phase) => (
                            <div key={phase[0]} className='flex flex-row mb-12 items-end'>
                                <TextField id="standard-basic" value={phase[0]} label="Name" variant="standard" />

                                <div className='flex flex-col ml-4'>
                                    <label htmlFor="start-date">Startdatum</label>
                                    <Input className='' type='date' value={phase[2].toLocaleDateString('en-CA')} id='start-date' />
                                </div>
                                
                                <div className='flex flex-col ml-4'>
                                    <label htmlFor="end-date">Enddatum</label>
                                    <Input className='' type='date' value={phase[3].toLocaleDateString('en-CA')} id='end-date' />
                                </div>

                                <IconButton onClick={() => onRemovePhase(phase[0], phase[2], phase[3])} color='primary' className='p-0'>
                                    <RemoveCircleIcon className='ml-6 w-8 h-8 p-0' />
                                </IconButton>
                                
                            </div>
                        ))}

                        <div className='flex flex-row mb-12 items-end'>
                            <TextField id="standard-basic" value={phaseName} onChange={(e) => setPhaseName(e.target.value)} label="Name" variant="standard" />

                            <div className='flex flex-col ml-4'>
                                <label htmlFor="start-date">Startdatum</label>
                                <Input onChange={(e) => setStartDate(e.target.value)} type='date' id='start-date' />
                            </div>

                            <div className='flex flex-col ml-4'>
                                <label htmlFor="end-date">Enddatum</label>
                                <Input onChange={(e) => setEndDate(e.target.value)} type='date' id='end-date' />
                            </div>

                            <IconButton onClick={() => onAddPhase(phaseName, startDate, endDate)} color='success' className='p-0'>
                                <AddCircleIcon className='ml-6 w-8 h-8 p-0' />
                            </IconButton>
                        
                        </div>
                    </>
            }

            <Button type='submit' variant="contained">Plan erstellen</Button>
            
        </form>

        <div className='mt-6'>
            {
                chartData ? 
                    <>
                        <div id='printable-chart'>
                            <Chart chartType="Gantt" width="100%" height="50%" data={chartData} /> 
                        </div>
                        <Button onClick={printChart} variant="contained">Plan herunterladen</Button>
                    </>
                    
                : 
                    <>
                        <Card sx={{ minWidth: 275, mt: 12 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                Unser Zeitplan-Generator
                                </Typography>
                                <Typography variant="body2">
                                    Mit diesem Tool kannst du einen Zeitplan für deinen PTB generieren. Trage einfach deine entsprechenden Phasen, wie z.B. das Schreiben der Gliederung, in das Tool ein
                                    und lasse dir dein Gantt-Chart generieren. Im Anschluss kannst du es an deinen Prof schicken.
                                </Typography>
                            </CardContent>
                        </Card>
                    </>
            }

        </div>
    </>
    
  )
}

export default GanttPage