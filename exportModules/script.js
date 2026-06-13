import { Greetings } from './reExport.js';

Greetings.StartMessage();

const now = new Date().toLocaleTimeString('pt-BR');
if (now >= '00:00' && now < '12:00') {
    Greetings.ShyGreeting();
    Greetings.MorningGreeting();
} else if (now >= '12:00' && now < '18:00') {
    Greetings.ExcitedGreeting();
    Greetings.AfternoonGreeting();
} else {
    Greetings.ChillGreeting();
    Greetings.NightGreeting();
}

Greetings.EndMessage();
