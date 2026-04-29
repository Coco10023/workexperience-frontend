# Workexperience Frontend

En fristående webbplats som konsumerar ett REST API för arbetserfarenheter.

## Tekniker
- HTML
- CSS
- JavaScript
- Fetch API

## Funktionalitet
- Visar arbetserfarenheter med GET
- Lägger till nya poster med POST
- Raderar poster med DELETE
- Validerar formulärdata med JavaScript innan POST-anrop

## Sidor
- `index.html` - visar alla poster
- `add.html` - formulär för att lägga till poster
- `about.html` - information om projektet

## API
Webbplatsen använder endpointen:

```text
http://localhost:3000/api/workexperience
```

## Installation
Klona repot
Öppna projektet i VS Code
Starta backend-servern (npm run dev)
Öppna index.html med Live Server

## Publicering 
https://coco10023.github.io/workexperience-frontend/ 

## Slutsatser

I denna uppgift har jag lärt mig hur man bygger en REST-baserad webbtjänst med Node.js och Express samt hur man kopplar en fristående frontend till backend via Fetch API. Jag har även fått förståelse för CRUD-operationer och hur data lagras i en relationsdatabas (MySQL).

Jag har också lärt mig vikten av att validera data både på klient- och serversidan, samt hur CORS används för att möjliggöra kommunikation mellan olika domäner.

