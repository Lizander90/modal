import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client';


const openDinamicModal = (onCloseX) => {

    const handleClose = (modalToRender, divContenedor) => {
        modalToRender.unmount()
        divContenedor.remove()
        console.log(modalToRender)
    }

    const DinamicModal = React.lazy(() => import('../Modal_structure/Modal_Struct'))
    const divModal = document.createElement("div");

    try {
        // creo dinamicamente un div con id, para renderizar en el Modal.
        divModal.setAttribute('id', "modal_dinamic_id")

        document.body.appendChild(divModal);

        const modalToRender = createRoot(divModal)
        console.log(onCloseX)
        modalToRender.render(
            <Suspense fallback={<div>cargando...</div>}>
                <DinamicModal onClose={() => handleClose(modalToRender, divModal)} />
            </Suspense>
        )
        console.log('todo ok')
    } catch (err) {
        alert('exploto el renderizado')
        console.log(err)
    }
}

export default openDinamicModal