// sentry.io javascript error tracking

import Raven from 'raven-js';

// expect account keys to be in env. add to ~/.bash_profile or similar
export const sentryUrl = `https://${process.env.sentryKey}@sentry.io/${process.env.sentryApp}`;

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
