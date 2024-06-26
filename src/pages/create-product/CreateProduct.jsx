import React, { useState } from "react";
import axios from "../../api";
import { toast } from "react-toastify";

const initialState = {
  lname: "",
  sname: "",
  age: "",
};

const CreateProduct = () => {
  const [create, setCreate] = useState(initialState);

  const handleCreateUser = (e) => {
    e.preventDefault();
    axios
      .post("/users", create)
      .then((res) => {
        console.log(res.data);
        toast.success("User Yaratldi");
        setCreate(initialState);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          required
          placeholder="FirstName"
          className="manage-input"
          value={create.lname}
          onChange={(e) =>
            setCreate((prev) => ({ ...prev, lname: e.target.value }))
          }
        />
        <input
          type="text"
          required
          placeholder="LastName"
          className="manage-input"
          value={create.sname}
          onChange={(e) =>
            setCreate((prev) => ({ ...prev, sname: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Age"
          required
          className="manage-input"
          value={create.age}
          onChange={(e) =>
            setCreate((prev) => ({ ...prev, age: e.target.value }))
          }
        />
        <button>Create</button>
      </form>
    </>
  );
};

export default CreateProduct;
