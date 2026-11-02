import { useState } from 'react'
import AdvanceCounter from './components/AdvanceCounter'

const styles = {
  appcontainer: {
    main: 'flex flex-col items-center justify-center py-20',
    card: 'rounded-lg  px-4 py-3 border-[#bf00ff] bg-[#bf00ff]/8 shadow-[0_0_10px_#bf00ff55]',
    h1: "my-5 text-4xl"
  }
}

function App() {
  

  return (
    <main className={styles.appcontainer.main}>
      <div className={styles.appcontainer.card}>
        <h1 className={styles.appcontainer.h1}>React Counter</h1>
        <AdvanceCounter />
      </div>

    </main>
  )
}

export default App
