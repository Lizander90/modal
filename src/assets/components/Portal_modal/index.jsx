import React from 'react'
import ReactDOM from 'react-dom'
import Modal_Struct from '../Modal_structure/Modal_Struct'

const Manual_modal = ({ onClose }) => {
    return ReactDOM.createPortal(<Modal_Struct onClose={onClose} />, document.getElementById('modal_manual'))
    // return <Modal_Struct />
}

export default Manual_modal