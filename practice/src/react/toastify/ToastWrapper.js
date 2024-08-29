import React, { useMemo, useState } from "react";
import "./toast.css";
import Toast from "./Toast";
function ToastWrapper() {
  const [showToast, setShowToast] = useState(false);

  const toastNotification = () => {
    if(showToast === true) return
    setShowToast(true)
    setTimeout(() => {  
        setShowToast(false)
    }, 2000)
  }
  return (
    <>
      <div className="container">
        {showToast && (
          <Toast
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={() => setShowToast(false)}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        )}
        <button className="toastButton" onClick={toastNotification}>
          Show Toast 🚀
        </button>
      </div>
    </>
  );
}

export default ToastWrapper;    
