import React, { useState } from 'react'; 
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

function App() {
    const [inputx, rinputx] = useState('ввод текста')

  return (
    <div className="App">
        <div className='Post'>
            <div className='PostCotent'>
              <strong>1. JavaScript</strong> 
                <div>
                    Text about JavaScript
                </div>
            </div>
            <div className='PostBtn'>
              <button>Click</button>
            </div>
        <div/>
       
      </div>
      <Counter/>
      <ClassCounter/>

    </div>
  );
}

export default App
