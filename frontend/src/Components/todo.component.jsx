import React from "react";
import DatePicker from "react-datepicker";
import './todo.component.css'
import "react-datepicker/dist/react-datepicker.css";
const TodoComponent = () => {
  const [inputData, setInputData] = React.useState(" ");
  const [Data, setData] = React.useState(false);
  const [inputDate, setInputDate] = React.useState(null);
  const [edit, setEdit] = React.useState("");
  const [toggle, setToggle] = React.useState(false);
  const handleData = (e) => {
    setInputData(e.target.value);
    setData(true);
  };
  const setValue = () => {
    setInputData("");
    setInputDate(null);
  };
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>ToDo List</figcaption>
        </figure>

        <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item..."
              value={Data ? inputData : ""}
              onChange={handleData}
            />
             <style>
        {`.date-picker calendarContainer {
          width:65%
          }`}
      </style>
            <DatePicker
              selected={inputDate}
              onChange={(date) => setInputDate(date)}
              placeholderText="✍ Target Date" wrapperClassName="date-picker"
              popperPlacement="top"
            />
          <br />
          <br/>
          {toggle ? (
            <i
              className="far fa-edit add-btn"
              title="Update Item"
            //   onClick={() =>
            //     // dispatch(
            //     //   editTodo(edit, inputData, inputDate),
            //     //   setInputData(""),
            //     //   setInputDate(null),
            //     //   setEdit(""),
            //     //   setToggle(false)
            //     // )
            //   }
            ></i>
          ) : (
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
            //   onClick={() =>
            //     // dispatch(addTodo(inputData, inputDate), setValue())
            //   }
            ></i>
          )}
        </div>

        <div className="showItems">
          {/* {list.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <h3>{elem.value}</h3>
                <h3>{elem.date.toLocaleDateString()}</h3>

                <div className="todo-btn">
                  <i
                    className="far fa-edit add-btn"
                    title="Edit item"
                    onClick={() => (
                      // eslint-disable-next-line no-sequences
                      setInputData(elem.value),
                      setInputDate(elem.date),
                      setToggle(true),
                      setEdit(elem.id)
                    )}
                  ></i>

                  <i
                    className="far fa-trash-alt add-btn "
                    title="Delete item"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </div>
              </div>
            );
          })} */}
        </div>

        {/* clear all button  */}
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            // onClick={() => dispatch(removeTodo())}
          >
            <span> REMOVE LIST </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
