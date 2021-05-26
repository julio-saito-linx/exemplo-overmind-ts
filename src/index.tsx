import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'overmind-react';
import Posts from './Posts';
import { overmind } from './overmind';

const rootElement = document.getElementById('root');
render(<Provider value={overmind}><Posts /></Provider>, rootElement);
