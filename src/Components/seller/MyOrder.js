import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_BASE_URL } from "../../config";
import { useStateValue } from "../StateProvider";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    axios
      .get(SERVER_BASE_URL + `/payment/${user?.id}`)
      .then((response) => {
        const result = response.data;
        console.log(result);
        setOrders(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.id]);

  return (
    <div className="container">
      <h3>My Orders</h3>
      <hr />
      <div>
        {/* <Link to="/sellers/add" className="btn btn-primary mb-2">
          Add Seller
        </Link>{" "} */}
        {/* &nbsp; */}
        {/* <Link to="/adminDashboard" className="btn btn-primary mb-2">
          Back To DashBoard
        </Link> */}
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Id </th>
              <th>OrderId</th>
              <th>ReceiptNo</th>
              <th>Amount</th>
              <th>PaymentId</th>
              <th>Status</th>
              <th>Give Rating to This Product</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderId}</td>
                <td>{order.receipt}</td>

                <td>{order.amount}</td>
                <td>{order.paymentId}</td>
                <td>{order.status}</td>
                <td>
                  <p>⭐⭐⭐⭐⭐</p>
                </td>
                {/* <td>
                  <Link
                    className="btn btn-info"
                    to={`/orders/edit/${order.id}`}
                  >
                    Update
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-danger ml-2"
                    // onClick={() => {
                    //   handleDelete(order.id);
                    // }}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
