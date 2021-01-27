import Header from './Header';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [cardState, setCardState] = useState({
    checked: false,
    isEditable: false
  });

  const [cardText, setCardText] = useState({
    headerText: 'Caption',
    tempHeader: 'Caption',
    bodyText: 'text...',
    tempBody: 'text...'
  });

  const changeStyleHandler = () => {
    setCardState({
      ...cardState,
      checked: !cardState.checked,
    });
  };

  const openEditModeHandler = () => {
    setCardState({
      checked: false,
      isEditable: !cardState.isEditable
    });
  };

  const headerTextChangeHandler = e => {
    setCardText({
      ...cardText,
      headerText: e.target.value
    });
  };

  const bodyTextChangeHandler = e => {
    setCardText({
      ...cardText,
      bodyText: e.target.value
    });
  };

  const saveChangesHandler = () => {
    setCardState({
      ...cardState,
      isEditable: !cardState.isEditable
    });
    setCardText({
      ...cardText,
      tempHeader: cardText.headerText,
      tempBody: cardText.bodyText
    })
  };

  const cancelChangesHandler = () => {
    setCardState({
      ...cardState,
      isEditable: !cardState.isEditable
    });
    setCardText({
      ...cardText,
      headerText: cardText.tempHeader,
      bodyText: cardText.tempBody
    });
  };

  return (
    <div className="App">
      <Header />
      <Card
        bodyText={cardText.bodyText}
        onChange={changeStyleHandler}
        checked={cardState.checked}
        openEditMode={openEditModeHandler}
        isEditable={cardState.isEditable}
        onSaveChanges={saveChangesHandler}
        onCancelChanges={cancelChangesHandler}
        headerTextChangeHandler={headerTextChangeHandler}
        headerText={cardText.headerText}
        bodyTextChangeHandler={bodyTextChangeHandler}
      />
    </div>
  );
}

export default App;
