import React from "react";
import Header from "./Header";
import SneakersTable from "./SneakersTable";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const sneakers = [
    {
      year: 2023,
      name: "Air Jordan 4 SB 'Pine Green'",
      price: 477,
      stock: 1,
      image: "./shoes/pine.png",
    },

    {
      year: 2023,
      name: "Air Jordan 4 SB 'Pine Green'",
      price: 477,
      stock: 1,
      image: "./shoes/pine.png",
    },
    {
      year: 2023,
      name: "Air Jordan 4 SB 'Pine Green'",
      price: 477,
      stock: 1,
      image: "./shoes/pine.png",
    },
    {
      year: 2023,
      name: "Air Jordan 4 SB 'Pine Green'",
      price: 477,
      stock: 1,
      image: "./shoes/pine.png",
    },
    {
      year: 2023,
      name: "Air Jordan 4 SB 'Pine Green'",
      price: 477,
      stock: 1,
      image: "./shoes/pine.png",
    },

    {
      year: 2023,
      name: "Air Jordan 4 SB 'Pine Green'",
      price: 477,
      stock: 1,
      image: "./shoes/pine.png",
    },
  ];

  return (
    <div>
      <Header />
      <div className="content">
        <Sidebar />
        <SneakersTable sneakers={sneakers} />
      </div>
    </div>
  );
}

export default App;
