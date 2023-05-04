import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import template from '../Assets/zwischenstand_template.docx';

function UpdateGeneratorPage() {

  const [name, setName] = useState('')
  const [progressText, setProgressText] = useState('')
  const [painpointText, setPainpointText] = useState('')
  const [questionsText, setQuestionsText] = useState('')

  async function loadFile(url) {
    const response = await fetch(url);
    const data = await response.arrayBuffer();
    return new Uint8Array(data);
  };
  
  async function generateDocx() {
    var curr = new Date();
    curr.setDate(curr.getDate());
    let curr_string = curr.toLocaleDateString('de-DE')

    try {
      const content = await loadFile(template);
      const zip = new PizZip(content.buffer);
      const doc = new Docxtemplater().loadZip(zip);
  
      // Set the template variables
      doc.setData({
        date: curr_string,
        studentname: name,
        progress: progressText,
        painpoints: painpointText,
        questions: questionsText,
        
        // ...
      });
  
      doc.render();
  
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
  
      // Output the document using Data-URI
      saveAs(out, 'zwischenstand.docx');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Card sx={{ minWidth: 275, mt: 6 }}>
          <CardContent>
              <Typography variant="h5" className='font-bold' component="div">
              Unser Zwischenstand-Generator
              </Typography>
              <Typography variant="body2">
                  Du hast an deinem PTB weitergearbeitet und würdest deinem Gutachter gerne einen Zwischenstand über deine Arbeit schicken, um nützliches Feedback zu erhalten?
                  Mit diesem Tool kannst du ein Word Dokument generieren, dass du im Anschluss an deinen Guatchter schicken kannst. Unten ist bereits ein Kommentarfeld enthalten,
                  sodass du dieses Dokument mit den von dem Gutachter hinzugefügten Kommentaren direkt zurückgeschickt bekommen kannst.
              </Typography>
          </CardContent>
      </Card>

      <TextField id="name" onChange={(e) => setName(e.target.value)} label="Dein Name" className='mt-8 w-full' variant="outlined" />
      <TextField id="progress" onChange={(e) => setProgressText(e.target.value)} label="Erzähle über deine letzten Fortschritte!" multiline rows={4} className='mt-4 w-full' variant="outlined" />
      <TextField id="painpoints" onChange={(e) => setPainpointText(e.target.value)} label="Auf welche Probleme / Painpoints bist du gestoßen?" multiline rows={4} className='mt-4 w-full' variant="outlined" />
      <TextField id="questions" onChange={(e) => setQuestionsText(e.target.value)} label="Welche Fragen hast du?" multiline rows={4} className='mt-4 w-full' variant="outlined" />

      <div className='w-full flex mt-8 justify-center px-8'>
        <Button variant="contained" onClick={generateDocx} className='w-full'>Zwischenstand herunterladen</Button>
      </div>
    </>
  )
}

export default UpdateGeneratorPage

/*
Fortschritt
Painpoints
Fragen?

Sektion für Prof wo antworten eingetragen werden könenen
*/