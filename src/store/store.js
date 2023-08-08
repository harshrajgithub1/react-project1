import { createStore } from 'redux';
import { countReducer } from './configure-store';

export const store = createStore(countReducer);