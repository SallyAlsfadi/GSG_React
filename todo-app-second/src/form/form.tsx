import React from "react";

const Form = () => {
  return (
    <form className="form-wrapper">
      <input type="text" name="label" placeholder="Type todo here .." />

      <div>
        <label htmlFor="Important">Important!</label>
        <input type="checkbox" id="Important" />
      </div>
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default Form;
