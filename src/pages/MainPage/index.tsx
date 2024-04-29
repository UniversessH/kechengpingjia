import React from "react";
import TeacherMainPage from "./TeacherMainPage";
import StudentMainPage from "./StudentMainPage";
const MainPage: React.FC = () => {
  const isAdmin = localStorage.getItem("is_admin");
  // return isAdmin === "true" ? <TeacherMainPage /> : <StudentMainPage />;
  return <TeacherMainPage />;
};

export default MainPage;
