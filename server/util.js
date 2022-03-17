import pino from 'pino';

const log = pino({
  // prettier-ignore
  enabled: !(!!process.env.LOG_DISABLED),
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const logger = log;
