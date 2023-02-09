import { useEffect, useState } from 'react'
import openDinamicModal from './assets/components/Dinamic_modal'
import Modal_Struct from './assets/components/Modal_structure/Modal_Struct'
import Manual_modal from './assets/components/Portal_modal'

function App() {
  const [showModal, setModal] = useState(false)
  const closeFunction = () => {
    setModal(false)
  }
  

  return <>
    <button children={'Modal Normal'} onClick={() => setModal(true)} />
    <button children={'Modal Dinamicos'} onClick={() => openDinamicModal()} />
    <br />
    <br />
    <img src={'https://cdn.pixabay.com/photo/2019/12/17/05/53/security-4700815_960_720.jpg'}></img>
    {showModal && <Manual_modal onClose={closeFunction} />}

  </>

}

export default App
