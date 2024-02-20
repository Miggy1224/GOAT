import React from "react";

function SneakersTable({ sneakers }) {
  return (
    <div className="table-container">
      <table className="sneaker-table">
        <tbody>
          {sneakers.map((sneaker, index) => (
            <tr key={index}>
              <td className="sneaker-cell">
                <div className="text-top-left">{sneaker.year}</div>
                <div className="text-top-center">{sneaker.name}</div>
                <div className="text-top-right">${sneaker.price}</div>
                {sneaker.stock === 0 ? (
                  <p className="danger">Out of Stock</p>
                ) : (
                  <p className="success">In Stock</p>
                )}
                <img src={sneaker.image} alt={`Sneaker ${index + 1}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SneakersTable;
