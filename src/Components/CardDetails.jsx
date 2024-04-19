import { Delete } from "@mui/icons-material";
import React from "react";
import { Table } from "react-bootstrap";

const CardDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2>Item Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            <div className="items_img">
              <img src="" alt="" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant:</strong>
                    </p>
                    <p>
                      <strong>price: ₹</strong>
                    </p>
                    <p>
                      <strong>Dish:</strong>
                    </p>
                    <p>
                      <strong>Total: ₹</strong>
                    </p>
                  </td>
                  <td>
                    <p><strong>Rating:</strong></p>
                    <p><strong>Order Review:</strong></p>
                    <p><strong>Remove:</strong><Delete style={{color: 'red'}}/></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
