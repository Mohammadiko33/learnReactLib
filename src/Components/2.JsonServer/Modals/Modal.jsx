import React from "react";
import CloseSVG from "./CloseSVG";
import "./Modal.css";

export default function DeleteModal({ children , wid = "30rem" , hit = "15rem" , onClose }) {
  return (
    <div className="containerModal">
      <div className="modal pr" style={{ minWidth: wid, minHeight: hit }}>
        <div className="containerSVG ptr1-5" onClick={onClose}>
          <CloseSVG />
        </div>
        {children}
      </div>
    </div>
  );
}
