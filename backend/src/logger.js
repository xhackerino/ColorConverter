const {createLogger, transports, format} = require('winston');

// Logger for main.js
const mainLogger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({filename: '../BackendLogs/main-info.log', level: 'info'}),
        new transports.File({filename: '../BackendLogs/main-error.log', level: 'error'}),

    ]
});

// Logger for db.js
const dbLogger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({filename: '../BackendLogs/db.log', level: 'info'}),
    ]
});

// Logger main.js endpoints
const endPointLogger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({filename: '../BackendLogs/main-enpoints.log', level: 'http'})
    ]
});


module.exports = {
    mainLogger,
    dbLogger,
    endPointLogger,
};
