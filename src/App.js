import React from 'react';
import AddExpense from './AddExpense';
import Welcome from './welcome';
function App() {
  return (
    <>
      <AddExpense />
      <Welcome name="toilet paper" price="$25" />
      <Welcome name="New TV" price="$450" />
      <Welcome name="Car Insurance" price="$112" />
    </>
  );
}

export default App;
