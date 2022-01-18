import React from 'react'

const Modal = ({ active, setActive, children, dopFunc, modalCreateBattle }) => {
    return (
        <div class={active ? `modal ${modalCreateBattle ? 'modalCreateBattle' : ''} active` : `modal ${modalCreateBattle ? 'modalCreateBattle' : ''}`} id="modalDeposit">
            <div onClick={(e) => {
                e.stopPropagation()
                setActive(false)
                dopFunc && dopFunc()
            }} class="modal__backdrop modal-close"></div>
            <div class="modal__content">
                <div class="modal__header">
                    <div onClick={() => {
                        setActive(false)
                        dopFunc && dopFunc()
                    }} class="modal__close modal-close"></div>
                </div>
                <div class="modal__body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
