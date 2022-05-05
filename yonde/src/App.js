import { useState } from 'react';
import FileSelect from './components/FileSelect';


function App() {
  const [fileSelected, setFileSelected] = useState(false);
  return (
    <div>
      {!fileSelected && ( 
        <FileSelect />
      )}
    </div>
  );
}

export default App;
