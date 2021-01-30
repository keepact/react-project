import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorld } from '../app/components/HelloWorld';

ReactDOM.render(
    <HelloWorld firstName="Alina" lastName="Renan" />,
    document.getElementById('root')
);