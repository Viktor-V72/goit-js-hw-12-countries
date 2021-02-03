import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

defaults.styling = 'material';

import {
  error,
  defaultModules,
} from '@pnotify/core/dist/PNotify.js';


export default error;

// error({
//   title: 'Too many matches found',
//   text: 'Please enter a more specific query!',
// });