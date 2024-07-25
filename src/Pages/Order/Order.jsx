import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../components/Layout/LayOut";
import { contextProvider } from "../../Data/DataProvider";
import { db } from "../../Utility/fireBase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import SingleProduct from "../../components/product/SingleProduct";
import "./order.css"; // Assuming there is a CSS file for styling
// import { Loader } from "../../components/Loder/Loader"; // Correct import statement
import Loader from './../../components/Loder/Loader';

function Order() {
  const [orders, setOrders] = useState([]);
  const { state } = useContext(contextProvider);
  const { user } = state;
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        setProcessing(true);
        const ordersRef = collection(db, "users", user.uid, "orders");
        const q = query(ordersRef, orderBy("created", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedOrders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(fetchedOrders);
        setProcessing(false);
      } else {
        setOrders([]);
      }
    };

    fetchOrders();
  }, [user]);

  if (processing) {
    return <Loader />;
  }

  return (
    <LayOut>
      <section className="container">
        <div className="order_container">
          <h2>Your Orders</h2>
          {orders.length === 0 ? (
            <div className="order_not_found">You don't have orders yet</div>
          ) : (
            <div>
              {orders.map((eachOrder) => (
                <div key={eachOrder.id}>
                  <hr />
                  <p>Order Id: {eachOrder.id}</p>
                  {eachOrder.data.basket.map((order) => (
                    <SingleProduct
                      flex={true}
                      product={order}
                      key={order.id}
                      smallHeight={true}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Order;
