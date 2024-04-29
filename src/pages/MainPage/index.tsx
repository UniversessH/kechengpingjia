import React from "react";
import TeacherMainPage from "./TeacherMainPage";
import UserMainPage from "./UserMainPage";
const MainPage: React.FC = () => {
  const isAdmin = localStorage.getItem("is_admin");
  return isAdmin === "true" ? <TeacherMainPage /> : <UserMainPage />;
};

export default MainPage;
