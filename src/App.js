import React, {    useReducer,    useContext} from 'react';
import Form from './components/Form';
import List from './components/List';
// import Header from './components/Header';

import Store from './Context';
import reducer from './Reducer';

import {
    usePersistedContext,
    usePersistedReducer
} from './usePersist';

function App() {
    // create a global store to store the state
    const globalStore = usePersistedContext(useContext(Store), "state");
  
    // `todo s` will be a state manager to manage state.
    const [state, dispatch] = usePersistedReducer(
      useReducer(reducer, globalStore),
      "state" // The localStorage key
    );
  
    return (
      // State.Provider passes the state and dispatcher to the down
      <Store.Provider value={{ state, dispatch }}>
        < Form />
        < List />
      </Store.Provider>
    );
  }
  export default App;