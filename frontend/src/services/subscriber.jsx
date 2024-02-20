import {
  goToDashboard,
  goToLoginPage,
  goToDashboardSubscriber,
} from "../routes/coordinator";
import { httpClient } from "./httpClient";

export const signup = async (form, navigate) => {
  await httpClient
    .post("/user/create", form)
    .then(() => {
      console.log(form);
      goToLoginPage(navigate(navigate));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const login = async (form, navigate) => {
  await httpClient
    .post("/user/authorize", form)
    .then((data) => {
      console.log(form);
      console.log(data);
      if (data.status === 200) {
        const token = data.data.hash;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", data.data.userType);
        if (data.data.userType === "SUBSCRIBER") {
          goToDashboardSubscriber(navigate);
        } else {
          goToDashboard(navigate);
        }
      }
    })
    .catch((err) => {
      console.log(err);
      alert(err.response);
      return err;
    });
};
export const activatePlan = async (token) => {
  const res = await httpClient
    .post("/user/subscription/activate", { userHash: token })
    .then((data) => {
      console.log(token);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      alert(err.response);
      return err;
    });

  return res;
};
export const changePassword = async (email, navigate) => {
  const res = await httpClient
    .post("/user/password-recovery", { email: email })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);

      return err;
    });

  return res;
};
export const getUserProfile = async (token) => {
  const res = await httpClient
    .get(`user/${token}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return res;
};
export const editUserProfile = async (form, token) => {
  const res = await httpClient
    .put(`user/update/${token}`, form)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return res;
};
export const cancelSubscribe = async (token) => {
  const res = await httpClient
    .put(`user/subscription/disable`, { userHash: token })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return res;
};
