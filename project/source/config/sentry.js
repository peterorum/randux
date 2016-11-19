// sentry.io javascript error tracking

import Raven from 'raven-js';

const sentryKey = '07dbd19e986e4772a026877dc1b4009f';
const sentryApp = '114095';

export const sentryUrl = `https://${sentryKey}@sentry.io/${sentryApp}`;

export function logException(ex, context) {
  Raven.captureException( ex, {
    extra: context
  } );
  window && window.console && console.error && console.error( ex );
}

// force error example
// import { logException } from './config/sentry';
// logException(new Error('forced error'), {
//   email: 'peter@peterorum.com'
// });

// show user dialog example
// Raven.showReportDialog();
