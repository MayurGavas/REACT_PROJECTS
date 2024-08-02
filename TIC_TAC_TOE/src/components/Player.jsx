import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
  
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
 
  function handleEditCLick(){
     // setIsEditing(!isEditing) // !isEditing  ---> will set true to false OR false to  true || But this way will give Errors > reason : Check lecture 78
      setIsEditing((editing) => !editing);   //  This is a optimal approach || the editing will get the current instance of isEditing and reverse it
      if (isEditing) {
        onChangeName(symbol, playerName);
    }
    }

  function handleChange(event){
        setPlayerName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;
  if (isEditing){
    editableplayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditCLick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  ); 
}