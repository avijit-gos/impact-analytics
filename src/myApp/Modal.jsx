/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Modal from "react-modal"

function MyModal(props) {
  const { isOpen, setIsOpen, newList } = props;

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        {
          newList.map(item => (
            <div key={item.id}>

              <img src={item.Image} className="modal_img" alt="User Image" />
              <p className="name">Name: {item.name}</p>
              <p className="id">Name: {item.id}</p>

              <div className="btn_group">
                <button className="shortlist">Shortlist</button>
                <button className="reject">Shortlist</button>
              </div>
            </div>
          ))
        }
      </Modal>
    </div>
  )
}

export default MyModal;
