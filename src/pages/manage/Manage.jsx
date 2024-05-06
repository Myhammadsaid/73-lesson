import React, { useEffect, useState } from "react";
import axios from "../../api";

const Manage = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/users`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [reload]);

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`/users/${id}`)
        .then((res) => {
          console.log(res.data);
          setReload((p) => !p);
        })
        .catch((err) => console.log(err));
    }
  };

  const products = data?.map((val) => (
    <div className="product-card" key={val.id}>
      <img src={val.url} alt="img" />
      <h2>{val.lname}</h2>
      <h3>{val.sname}</h3>
      <p style={{ marginBottom: "10px" }}>Age: {val.age}</p>
      <button onClick={() => handleDeleteUser(val.id)}>Delete</button>
    </div>
  ));
  return (
    <>
      <section className="product">
        <div className="container">
          {loading ? <h2>Loading...</h2> : <></>}
          <div className="product-cards">{products}</div>
        </div>
      </section>
    </>
  );
};

export default Manage;
