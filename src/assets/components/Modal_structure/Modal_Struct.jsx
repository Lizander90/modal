import React, { useRef } from 'react'
import './Modal.scss'

const Modal_Struct = ({ onClose }) => {
  const modalBodyRef = useRef(null)
  const handleClose = () => {
    modalBodyRef.current.setAttribute('class', 'modal--close')
    modalBodyRef.current.addEventListener('animationend', () => onClose())
  }

  return (<>
    <div className={'modal_background'}>
      <div className={'modal_body'} ref={modalBodyRef}>

        <div className={'modal_header'}>
          <span className='modal_title'> Alerta </span>
          <button children='X' className={'boton_modal_close'} onClick={handleClose} />
        </div>

      </div>
    </div>
  </>
  )
}

export default Modal_Struct




