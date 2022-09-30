import axios from "axios";
import { useState, useEffect } from "react";

import SellerMenuBar from "./SellerMenuBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { SERVER_BASE_URL } from "../../config";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // const [seller, setSeller] = useState(
  //   JSON.parse(sessionStorage.getItem("seller"))
  // );

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(SERVER_BASE_URL + "/products").then((response) => {
      const result = response.data;
      setProducts(result);

      console.log(result);
    });
  };

  const dashboard = () => {
    navigate("/sellerDashboard");
  };

  return (
    <div className="row">
      <SellerMenuBar />

      <div className="col-8">
        <h2 className="text-indigo-600">All Products</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td> {product.id}</td>

                <td>
                  {product.productName}
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      style={{ height: "30px" }}
                      src={SERVER_BASE_URL + "/store/" + product?.productImage}
                      alt=""
                    />
                  </div>
                </td>
                <td>{product.productDescription}</td>
                <td>{product?.quantity}</td>
                <td>{product?.productPrice}</td>
                <td>{product?.productDiscount}</td>
                <td>{product?.productRating}</td>

                <td>
                  {/* <Link className="btn btn-info" to={`/users/edit/${cat.id}`}>
                    Update
                  </Link>
                  &nbsp; */}
                  {/* <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={dashboard}>Back To DashBoard</Button>{" "}
      </div>
    </div>
  );
};

export default AllProducts;
