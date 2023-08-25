import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../../styles/style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, getUser } from "../../data/fetchUsers";
import { setUser, setError } from "../../features/auth/authSlice";
import { CartLocalStorageHelper } from "../../helpers/cartLocalStorageHelper";
import { updateCart, getCart } from "../../data/fetchCart";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    loginOrEmail: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    loginOrEmail: Yup.string().required("Login or Email is required"),
    password: Yup.string()
      .min(7, "Password must be between 7 and 30 characters")
      .max(30, "Password must be between 7 and 30 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const user = await loginUser(values);
      // Перевірка, чи отриманий токен не є undefined
      if (user.token !== undefined) {
        const userData = await getUser(user.token);
        dispatch(setUser(userData));
        const { cart, amount } = CartLocalStorageHelper.getCart();
        const existingCart = await getCart(user.token);
        const localStorageCartBody = cart.map((product) => {
          return {
            product: product._id,
            cartQuantity: amount[product._id] || 1,
          };
        });
        const existingCartBody =
          existingCart?.products.map((item) => {
            return {
              product: item.product._id,
              cartQuantity: Number(item.cartQuantity) || 1,
            };
          }) || [];
        const updateCartBody = existingCartBody.reduce((acc, item) => {
          if (acc.find((i) => i.product === item.product)) {
            return acc.map((i) => {
              if (i.product === item.product) {
                return {
                  product: i.product,
                  cartQuantity: i.cartQuantity + item.cartQuantity,
                };
              }
              return i;
            });
          }
          return [...acc, item];
        }, localStorageCartBody);
        await updateCart(
          {
            products: updateCartBody,
          },
          user.token
        );
        CartLocalStorageHelper.resetCart();
        // Зберігання JWT в LocalStorage
        localStorage.setItem("token", user.token);
        navigate("/");
      } else {
        alert("Error logging in");
        localStorage.removeItem("token");
        dispatch(setError("Error logging in"));
      }
    } catch (error) {
      dispatch(setError("Error logging in"));
    }
  };

  useEffect(() => {
    // Перевірте, чи є інформація про вхід користувача (наприклад, збережене в LocalStorage)
    const token = localStorage.getItem("token");
    if (token) {
      // Якщо є інформація про вхід, перенаправте користувача на сторінку профілю
      navigate("/profile");
    }
    return;
  }, [navigate]);

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="loginOrEmail">Login or Email</label>
            <Field
              type="text"
              id="loginOrEmail"
              name="loginOrEmail"
              autoComplete="username"
            />
            <ErrorMessage
              name="loginOrEmail"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p className="login-text">
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "#707070" }}>
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
