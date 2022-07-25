import React from 'react';
const ExpenseForm = () => {
  return (
    <div>
      <form>
        <div>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input name="" type="number" />
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
