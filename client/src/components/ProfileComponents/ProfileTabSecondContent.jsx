import React, { useEffect, useState } from "react";
import {
  Divider,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import { getOrder } from "../../features/order/orderSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function ProfileTabSecondContent() {
  const token = useSelector((state) => state.auth.token);
  const orders = useSelector((state) => state.order.order);
  const orderStatus = useSelector((state) => state.order.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(getOrder(token));
      setLoading(true);
    }
  }, [dispatch, token]);

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!loading) {
    return (
      <Container maxWidth="lg" sx={{ textAlign: "center", pt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (orderStatus === "failed") {
    return (
      <Container maxWidth="lg" sx={{ textAlign: "center", pt: 4 }}>
        <Typography variant="h6">Error</Typography>
        <CustomButton value="Logout" onClick={handleLogOut} />
      </Container>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 33 } }}>
        No order has been made yet.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 33 }, p: 2 }}>
        Order History
      </Typography>
      <table style={{ width: "100%" }}>
        <thead
          style={{
            height: "50px",
          }}
        >
          <tr style={{ fontSize: "16px" }}>
            <th>Order Number</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total Sum</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} style={{ fontSize: "14px" }}>
              <td>{order.orderNo}</td>
              <td>{formatDate(order.date)}</td>
              <td>{order.status}</td>
              <td>{order.totalSum + "$"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Divider sx={{ pt: 2 }} />
    </>
  );
}
