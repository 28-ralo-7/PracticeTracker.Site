import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faBars, faChevronDown, faChevronUp, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import {NavigateContainer} from "./apps/navigate/navigateContainer";

library.add(faAngleRight, faAngleLeft, faAngleDown, faAngleUp, faTimes, faSpinner, faChevronDown, faChevronUp, faBars)

function App() {
  return (
    <div className="App vh-100">
        <NavigateContainer/>
    </div>
  );
}

export default App;
