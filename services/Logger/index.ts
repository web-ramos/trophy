import path from 'path';
import winston, { format } from 'winston';

const logDir =
    process.env.NODE_ENV === 'production'
    ? process.env.LOG_DIR || '/var/log/moderntrophy'
    : './logs/'

export const logger = winston.createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(logDir,'info.log'), level: 'info' })
    ],
});
