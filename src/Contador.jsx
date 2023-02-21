import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Contador() {
  const [modal, setModal] = useState();

  const openpopup = () => {
    setModal(() => (
      <div>
        <dialog id="popup" data-dismiss="modal" data-backdrop="true">
          <form id="formnamep" action="">
            <input name="note" type="text" />
            <button type="submit" data-backdrop="true">
              X
            </button>
          </form>
          <button type="submit" data-backdrop="true">
            X
          </button>
        </dialog>
      </div>
    ));
  };

  return (
    <button onclick={() => openpopup()} type="button">
      X
    </button>
    
  );
}
export default Contador;
