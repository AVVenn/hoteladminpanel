import React from "react";
import { Routes, Route } from "react-router-dom";
import ReservationList from "./pages/Reservations/ReservationList";
import Reservation from "./pages/Reservations/Reservation";
import RoomList from "./pages/Rooms/RoomList";
import Room from "./pages/Rooms/Room";
import UserList from "./pages/Users/UserList";
import User from "./pages/Users/User";
import Questions from "./pages/Questions";
import Statistic from "./pages/Statistic";
import NewsList from "./pages/News/NewsList";
import News from "./pages/News/News";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReservationList />} />
          <Route path="reservation/:id" element={<Reservation />} />
          <Route path="rooms" element={<RoomList />} />
          <Route path="rooms/:id" element={<Room />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/:id" element={<User />} />
          <Route path="questions" element={<Questions />} />
          <Route path="statistic" element={<Statistic />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:id" element={<News />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
