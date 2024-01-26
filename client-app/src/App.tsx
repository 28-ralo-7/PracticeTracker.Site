import React from 'react';
import {AuthApp} from "./apps/authentication/main";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faBars, faChevronDown, faChevronUp, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight, faAngleLeft, faAngleDown, faAngleUp, faTimes, faSpinner, faChevronDown, faChevronUp, faBars)

function App() {
  return (
    <div className="App">
      <AuthApp/>
    </div>
  );
}

export default App;
