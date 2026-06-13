import * as NamedGreetings from './namedExport.js';
import * as ClauseGreetings from './exportClause.js';
import * as Messages from './namedReExportAll.js';

export const Greetings = {
    ...NamedGreetings,
    ...ClauseGreetings,
    ...Messages
};
