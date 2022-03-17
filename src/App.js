
import React from 'react'
import NavBar from "./components/NavBar"
import Todo from './components/Todo';
function App() {
  let title="my first react App";

  return (
    <div>
    <NavBar title={title} />
    <main>
<Todo title ="learning react" datetime="23rd March 2022" />
<Todo title ="Premest Training" datetime="2nd January 2022" />
<Todo title ="learning react" datetime="3rd April 2022" />
<Todo title ="learning react" datetime="18th december 2022" />
<Todo title ="learning react" datetime="4th october 2022" />

    </main>
    </div>
  )
}

export default App