import React from "react";

interface ModalProps {
  closeModal: () => void
  children: React.ReactNode
  showModal: boolean
}

function Modal({ children, closeModal, showModal }: ModalProps) {
  // const closeModal = (e: React.MouseEvent): void => {
  //   const modal = document.querySelector("#modal");
  //   modal.classList.add("hide")

  return (
    <>
      {showModal && (
        < div >
          <div className="w-[100%] h-[100%] absolute bg-[#000] opacity-[0.3]" onClick={closeModal}></div>
          <div className="absolute top-[10%] left-0 right-0 my-0 mx-auto w-[500px] h-[400px] z-10 bg-[#fff] flex flex-col justify-center text-center">
            <h2>Texto Modal</h2>
            {children}
          </div>
        </div >
      )}
    </>
  );
}

export default Modal;