import React, { useEffect, useState } from "react";
import axios from "../../api";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/users`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const products = data?.map((val) => (
    <div className="product-card" key={val.id}>
      <img src={val.url} alt="img" />
      <h2>{val.lname}</h2>
      <h3>{val.sname}</h3>
      <p>Age: {val.age}</p>
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

export default Product;
