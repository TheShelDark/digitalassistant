import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import Success from '../Assets/Success.png'

function ChecklistPage() {
  return (
    <>
        <Stack spacing={2}>
            <Paper className='bg-gray-100 flex flex-row items-center'>
                <InfoIcon className='m-2'/>
                <p className='text-base pl-5'>Mit diesen Tipps möchten wir dich bei deiner PTB Ausarbeitung unterstützen</p>
            </Paper>
        </Stack>

        <Accordion className='mt-6'>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Themenfindung</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                1.	Praxisbezug: Überlege, welche Themen in deinem Unternehmen oder in der Branche relevant sind. Gibt es aktuelle Herausforderungen, zu denen du mit deiner Arbeit beitragen könntest? 
                Sprich auch mit Kollegen oder Vorgesetzten, um Anregungen zu erhalten.
                <br />
                2.	Akademisches Interesse: Überlege, welche akademischen Themen dich besonders interessieren und wie diese mit deinem Arbeitsumfeld verknüpft werden können. 
                Schau dir auch Lehrveranstaltungen oder Seminare an, die du besucht hast, und überlege, welche Themen für dich besonders relevant waren.
                <br />
                3.	Literaturrecherche: Durchsuche wissenschaftliche Datenbanken und Online-Ressourcen, um herauszufinden, welche Forschungsthemen in deinem Fachgebiet aktuell 
                sind und welche Fragestellungen noch offen sind.
                <br />
                4.	Betreuer: Sprich mit möglichen Betreuern an deiner Hochschule über deine Ideen und bitte um Feedback. Sie können dir 
                wertvolle Anregungen geben und dich bei der Themenwahl unterstützen.
                <br />
                5.	Machbarkeit: Bevor du dich endgültig für ein Thema entscheidest, prüfe, ob es in dem gegebenen Zeitrahmen und mit den zur Verfügung stehenden Ressourcen machbar ist. 
                Stelle sicher, dass du Zugang zu den notwendigen Daten oder Materialien hast.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Titel formulieren</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            1.	Kernidee identifizieren: Überlege, welcher Aspekt deiner Arbeit am wichtigsten ist und was den Kern deiner Forschung ausmacht. Dies sollte im Titel klar zum Ausdruck kommen.
            <br />
            2.	Prägnanz: Ein guter Titel sollte kurz, prägnant und leicht verständlich sein. Versuche, den Titel auf wenige Worte zu beschränken, ohne dabei wichtige Informationen wegzulassen.
            <br />
            3.	Genauigkeit: Der Titel sollte genau das widerspiegeln, worum es in deiner Arbeit geht. Vermeide vage oder ungenaue Begriffe, die den Leser in die Irre führen könnten.
            <br />
            4.	Fachterminologie: Wenn es möglich ist, verwende Fachbegriffe, die in deinem Forschungsgebiet geläufig sind. Das signalisiert, dass du mit der Materie vertraut bist und hilft 
            Fachleuten, den Inhalt deiner Arbeit schnell zu erfassen.
            <br />
            5.	Interesse wecken: Ein ansprechender Titel kann das Interesse potenzieller Leser wecken. Versuche, eine interessante Frage oder ein überraschendes Ergebnis in den Titel zu 
            integrieren, ohne dabei reißerisch zu wirken.
            <br />
            6.	Mehrteilige Titel: In manchen Fällen kann es sinnvoll sein, einen mehrteiligen Titel zu wählen, der aus einem Haupttitel und einem Untertitel besteht. Der Haupttitel gibt einen 
            kurzen Überblick über das Thema, während der Untertitel zusätzliche Details oder den methodischen Ansatz der Arbeit verdeutlicht.

            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Gliederung</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                
                1.	Einleitung (5-10%)
                <ul class="list-disc list-inside">
                    <li>Einführung ins Thema und dessen Relevanz</li>
                    <li>Forschungsfrage oder Problemstellung</li>
                    <li>Ziele und Umfang der Arbeit</li>
                    <li>Struktur der Arbeit</li>
                </ul>
                
                2.	Theoretischer Rahmen / Literaturübersicht (20-30%)
                <ul class="list-disc list-inside">
                    <li>Vorstellung der wichtigsten Theorien und Konzepte, die für die Arbeit relevant sind</li>
                    <li>Kritische Auseinandersetzung mit der bestehenden Literatur</li>
                    <li>Identifikation von Forschungslücken</li>
                </ul>

                3.	Methodik (10-15%)
                <ul class="list-disc list-inside">
                    <li>Beschreibung der Forschungsmethoden (qualitativ, quantitativ, experimentell, etc.)</li>
                    <li>Auswahl und Beschreibung der Datenerhebung und -analyse</li>
                    <li>Begründung der gewählten Methoden</li>
                </ul>

                4.	Forschungsergebnisse (15-25%)
                <ul class="list-disc list-inside">
                    <li>Präsentation der gesammelten Daten und Ergebnisse</li>
                    <li>Visualisierung der Ergebnisse (Tabellen, Diagramme, etc.)</li>
                </ul>
	
                5.	Diskussion (20-30%)
                <ul class="list-disc list-inside">
                    <li>Interpretation und Bewertung der Ergebnisse im Kontext der Forschungsfrage</li>
                    <li>Vergleich der Ergebnisse mit der bestehenden Literatur</li>
                    <li>Erörterung von Limitationen und Unsicherheiten</li>
                </ul>

                6.	Fazit (5-10%)
                <ul class="list-disc list-inside">
                    <li>Zusammenfassung der wichtigsten Erkenntnisse</li>
                    <li>Beantwortung der Forschungsfrage oder Problemstellung</li>
                    <li>Implikationen der Ergebnisse für Theorie und Praxis</li>
                    <li>Ausblick für zukünftige Forschung</li>
                </ul>

            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Zitieren</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                1.	Zitierstil: Wähle einen Zitierstil, der von deiner Hochschule oder deinem Fachbereich empfohlen oder vorgeschrieben wird (z.B. APA, MLA, Chicago, Harvard). Halte dich konsequent 
                an die Regeln dieses Stils.
                <br />
                2.	Direkte Zitate: Wenn du wörtlich aus einer Quelle zitierst, setze das Zitat in Anführungszeichen und gib die genaue Seitenzahl an, auf der das Zitat zu finden ist.
                <br />
                3.	Indirekte Zitate: Wenn du Informationen aus einer Quelle paraphrasierst oder zusammenfasst, musst du trotzdem die Quelle angeben, um Plagiate zu vermeiden. 
                Achte darauf, die Informationen in deinen eigenen Worten wiederzugeben und nicht einfach den Originaltext umzuformulieren.
                <br />
                4.	Quellenangabe: Gib für jede zitierte Quelle alle notwendigen Informationen an, um sie eindeutig identifizieren zu können. Dazu gehören in der Regel Autorenname, 
                Erscheinungsjahr, Titel, Herausgeber oder Verlag, Ort und ggf. Seitenzahlen.
                <br />
                5.	Sekundärzitate: Vermeide das Zitieren von Sekundärquellen, wenn möglich. Wenn du aus einer Quelle zitierst, die ihrerseits eine andere Quelle zitiert, versuche, die 
                Originalquelle zu finden und diese zu zitieren. Falls dies nicht möglich ist, gib sowohl die primäre als auch die sekundäre Quelle in deiner Zitation an.
                <br />
                6.	Vollständigkeit: Stelle sicher, dass du alle verwendeten Quellen in deinem Literaturverzeichnis aufführst. Achte darauf, dass die Angaben im Literaturverzeichnis mit den 
                Zitationen im Text übereinstimmen.
                <br />
                7.	Einheitlichkeit: Achte darauf, dass du den gewählten Zitierstil konsequent im gesamten Text anwendest. Dies betrifft sowohl Zitationen im Text als auch das Format des 
                Literaturverzeichnisses.
                <br />
                8.	Plagiate vermeiden: Achte darauf, immer korrekt zu zitieren und deine eigenen Gedanken und Ideen von den zitierten Informationen zu trennen. Plagiate können schwerwiegende 
                Konsequenzen haben und die akademische Integrität deiner Arbeit untergraben.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <div className='mt-12 flex justify-center'>
            <img src={Success} className='w-4/5 h-4/5' alt=''/>
        </div>
    </>
  )
}

export default ChecklistPage