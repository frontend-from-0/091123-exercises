import { useState } from "react";

export const Exercise10 = () => {
  const [buttonText, setButtonText] = useState('Double click me!');
  const [message, setMessage] = useState('');

  function doubleClickHandler () {
    setButtonText('The button has been double-clicked!');
    setMessage('You double-clicked the button!');
  }

  return (
    <div>
      <button onDoubleClick={doubleClickHandler}>{buttonText}</button>
      {message && <div style={{ color: 'red', marginTop: '10px' }}>{message}</div>}
    </div>
  );
};
