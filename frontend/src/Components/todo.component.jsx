import React from "react";
import DatePicker from "react-datepicker";
import "./todo.component.css";
import "react-datepicker/dist/react-datepicker.css";
import { getItems, additem, edititem, deleteitem } from "../Utils/httpClient";
const TodoComponent = () => {
  const [inputData, setInputData] = React.useState(" ");
  const [Data, setData] = React.useState(false);
  const [inputDate, setInputDate] = React.useState(null);
  const [edit, setEdit] = React.useState("");
  const [toggle, setToggle] = React.useState(false);
  const [lists, setlists] = React.useState([]);

  React.useEffect(() => {
    const getListDetails = async () => {
      let data = await getItems();
      setlists(data);
    };
    getListDetails();
  }, [lists]);

  const handleadd = (e) => {
    additem({ value: inputData, date: inputDate.toISOString().slice(0, 10) });
    setValue();
  };

  const handleEdit = () => {
    edititem(edit, {
      value: inputData,
      date: inputDate.toISOString().slice(0, 10),
    });
    setValue();
    setEdit("");
    setToggle(false);
  };

  const handleDelete = (id) => {
    deleteitem(id);
  };
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
            value={Data || toggle ? inputData : ""}
            onChange={handleData}
          />
          <style>
            {`.date-picker calendarContainer {
          width:100%
          }`}
          </style>
          <DatePicker
            selected={toggle ? new Date(inputDate) : inputDate}
            onChange={(date) => setInputDate(date)}
            placeholderText="✍ Target Date"
            wrapperClassName="date-picker"
            popperPlacement="top"
          />
          <br />
          <br />
          {toggle ? (
            <i
              className="far fa-edit add-btn"
              title="Update Item"
              onClick={handleEdit}
            ></i>
          ) : (
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={handleadd}
            ></i>
          )}
        </div>

        <div className="showItems">
          {lists
            .sort((a, b) => (a.date > b.date ? 1 : -1))
            .map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.value}</h3>
                  <h3>{elem.date}</h3>

                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit item"
                      onClick={() => (
                        // eslint-disable-next-line no-sequences
                        setInputData(elem.value),
                        setInputDate(new Date(elem.date)),
                        setToggle(true),
                        setEdit(elem.id)
                      )}
                    ></i>

                    <i
                      className="far fa-trash-alt add-btn "
                      title="Delete item"
                      onClick={() => handleDelete(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
