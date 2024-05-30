import React from 'react'
import {ToastContainer, toast} from 'react-toastify'

export const Message = ({message}) => {
    const notify = () => toast(message);
    
      return (
        <div>
          <button onClick={notify}> Notify !</button>
          <ToastContainer />
        </div>
      );
}
