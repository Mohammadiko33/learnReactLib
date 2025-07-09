import React, { useEffect, useState } from "react";
import "./UserTable.css";
import { toast, ToastContainer } from "react-toastify";
import Modal from "./Modals/Modal";
import "./LoginPage.css";
import headerFetch from "../headerFetch";

const UserTable = () => {
  const [submitted, setSubmitted] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "کاربر۱", password: "123456" },
    { id: 2, name: "کاربر۲", password: "abcdef" },
    { id: 3, name: "کاربر۳", password: "qwerty" },
  ]);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showEditModal, setEditModal] = useState(false);
  const [mainID, setMainID] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const getUsers = async () => {
    const res = await fetch(`http://localhost:4000/users`);

    if (!res.ok) {
      if (res.status === 404) {
        return toast.error(
          "همچین ادرسی که شما بهش درخاست داده اید وجود ندارد",
          { position: "bottom-right" }
        );
      }
      throw "خطایی با ارتباط با بکند رخ داد";
    }

    const result = await res.json();
    setUsers(result);
    console.log(result);
  };

  const handleDelete = (userId) => {
    setDeleteModal(true);
    setMainID(userId);
  };

  const handleEdit = (userId) => {
    setEditModal(true);
    setMainID(userId);
    const catchUserFromList = users.filter((user) => user.id === userId);
    setName(catchUserFromList[0].name);
    setPassword(catchUserFromList[0].password);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onClose = () => {
    setDeleteModal(false);
    setEditModal(false);
  };

  const deleteUserFromdb = async () => {
    await fetch(`http://localhost:4000/users/${mainID}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        getUsers();
        setDeleteModal(false);
      }
    });
  };

  const editedUserFromdb = async e => {
    e.preventDefault();
    await fetch(`http://localhost:4000/users/${mainID}`, {
      method: "PUT",
      headers: headerFetch,
      body: JSON.stringify({
        name,
        password
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        getUsers();
        setEditModal(false);
      }
    });
  };

  return (
    <div className="app-container">
      <ToastContainer />
      <h1>مدیریت کاربران</h1>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th className="small-column">ایدی کاربر</th>
              <th>اسم کاربر</th>
              <th>رمز کاربر</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="small-column">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td className="actions-cell">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(user.id)}
                  >
                    ویرایش
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDeleteModal ? (
        <Modal onClose={onClose}>
          <h1>ایا از حذف اطمینان دارید</h1>
          <div className="btns dac jcsa mt5 g2">
            <button className="b btn2" onClick={deleteUserFromdb}>
              بله حذف شود
            </button>
            <button className="b btn1 h3 br-5" onClick={onClose}>
              خیر منصرف شدم
            </button>
          </div>
        </Modal>
      ) : null}
      {showEditModal ? (
        <Modal onClose={onClose}>
          <form className="form-card" onSubmit={editedUserFromdb}>
            <h2 className="tc">اطلاعات جدید کاربر را وارد کنید</h2>

            <div className="input-group">
              <label htmlFor="name" className="form-label">
                نام کامل:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="نام خود را وارد کنید"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="form-label">
                رمز عبور:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز خود را وارد کنید"
                min="1"
                max="120"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              onClick={editedUserFromdb}
              onSubmit={editedUserFromdb}
            >
              تغییر اطلاعات
            </button>

            {/* {submitted && (
          <div className="success-message">
            ثبت نام با موفقیت انجام شد! نام: {formData.name}, رمز عبور:{" "}
            {formData.password}
          </div>
        )} */}
          </form>
        </Modal>
      ) : null}
    </div>
  );
};

export default UserTable;
