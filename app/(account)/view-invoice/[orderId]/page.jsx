"use client";

import { useParams } from "next/navigation";
import styles from "./invoice.module.css";

const orders = [
  {
    id: "20360685",
    date: "14 Aug, 2026",
    invoiceDate: "14 Aug, 2026",
    paymentMethod: "Cash on Delivery",

    seller: {
      name: "Cotton Bolls",
      address: "Mumbai, Maharashtra",
      state: "Maharashtra",
      stateCode: "27",
      gstin: "27ABCDE1234F1Z5",
    },

    customer: {
      name: "Neeraj Katiyar",
      phone: "+91 9876543210",
      email: "neeraj@example.com",
      address: "123, Main Road",
      city: "New Delhi",
      state: "Delhi",
      stateCode: "07",
      pincode: "110001",
    },

    products: [
      {
        id: 1,
        name: "Men's Classic Oversized T-Shirt",
        size: "L",
        color: "Black",
        quantity: 1,
        price: 999,
        hsn: "6109",
        gst: 5,
      },
      {
        id: 2,
        name: "Classic Cotton T-Shirt",
        size: "M",
        color: "White",
        quantity: 1,
        price: 799,
        hsn: "6109",
        gst: 5,
      },
    ],

    shippingCharge: 0,
  },
];

const InvoicePage = () => {
  const params = useParams();

  const order = orders.find(
    (item) => item.id === params.orderId
  );

  if (!order) {
    return (
      <div className={styles.notFound}>
        <h2>Invoice Not Found</h2>

        <p>
          Invoice for Order ID {params.orderId} could not be found.
        </p>
      </div>
    );
  }

  /*
   * =====================================
   * PRODUCT CALCULATIONS
   * =====================================
   */

  const productRows = order.products.map((product) => {
    const productTotal =
      product.price * product.quantity;

    // Discount amount
    const discountRate = 0;

    const discountAmount =
      productTotal * (discountRate / 100);

    // Taxable value
    const taxableValue =
      productTotal - discountAmount;

    /*
     * Seller Maharashtra
     * Customer Delhi
     *
     * Therefore IGST
     */

    const isInterState =
      order.customer.stateCode !==
      order.seller.stateCode;

    const cgstRate = isInterState
      ? 0
      : product.gst / 2;

    const sgstRate = isInterState
      ? 0
      : product.gst / 2;

    const igstRate = isInterState
      ? product.gst
      : 0;

    const cgstAmount =
      taxableValue * (cgstRate / 100);

    const sgstAmount =
      taxableValue * (sgstRate / 100);

    const igstAmount =
      taxableValue * (igstRate / 100);

    const payable =
      taxableValue +
      cgstAmount +
      sgstAmount +
      igstAmount;

    return {
      ...product,

      productTotal,

      discountRate,
      discountAmount,

      taxableValue,

      cgstRate,
      cgstAmount,

      sgstRate,
      sgstAmount,

      igstRate,
      igstAmount,

      payable,
    };
  });


  /*
   * =====================================
   * TOTALS
   * =====================================
   */

  const subtotal = productRows.reduce(
    (total, product) =>
      total + product.productTotal,
    0
  );

  const totalDiscount = productRows.reduce(
    (total, product) =>
      total + product.discountAmount,
    0
  );

  const taxableTotal = productRows.reduce(
    (total, product) =>
      total + product.taxableValue,
    0
  );

  const cgstTotal = productRows.reduce(
    (total, product) =>
      total + product.cgstAmount,
    0
  );

  const sgstTotal = productRows.reduce(
    (total, product) =>
      total + product.sgstAmount,
    0
  );

  const igstTotal = productRows.reduce(
    (total, product) =>
      total + product.igstAmount,
    0
  );

  const totalTax =
    cgstTotal +
    sgstTotal +
    igstTotal;

  const grandTotal =
    taxableTotal +
    totalTax +
    order.shippingCharge;


  const formatMoney = (value) => {
    return `₹${value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };


  return (
    <main className={styles.invoicePage}>

      <div className={styles.invoice}>

        {/* =====================================
            HEADER
        ===================================== */}

        <header className={styles.header}>

          <div className={styles.brand}>

            <h1>
              Cotton Bolls
            </h1>

            <p>
              Original Merchandise
            </p>

          </div>


          <div className={styles.invoiceTitle}>

            <h2>
              TAX INVOICE
            </h2>

            <div className={styles.invoiceMeta}>

              <p>
                Invoice No.
                <strong>
                  INV-{order.id}
                </strong>
              </p>

              <p>
                Order No.
                <strong>
                  #{order.id}
                </strong>
              </p>

              <p>
                Invoice Date
                <strong>
                  {order.invoiceDate}
                </strong>
              </p>

            </div>

          </div>

        </header>


        {/* =====================================
            SELLER / BILL TO / PAYMENT
        ===================================== */}

        <section className={styles.parties}>

          {/* SELLER */}

          <div className={styles.party}>

            <span className={styles.label}>
              SOLD BY
            </span>

            <h3>
              {order.seller.name}
            </h3>

            <p>
              {order.seller.address}
            </p>

            <p>
              State: {order.seller.state}
            </p>

            <p>
              State Code: {order.seller.stateCode}
            </p>

            <p>
              GSTIN: {order.seller.gstin}
            </p>

          </div>


          {/* BILL TO */}

          <div className={styles.party}>

            <span className={styles.label}>
              BILL TO
            </span>

            <h3>
              {order.customer.name}
            </h3>

            <p>
              {order.customer.address}
            </p>

            <p>
              {order.customer.city},{" "}
              {order.customer.state} -{" "}
              {order.customer.pincode}
            </p>

            <p>
              State Code: {order.customer.stateCode}
            </p>

            <p>
              Phone: {order.customer.phone}
            </p>

            <p>
              {order.customer.email}
            </p>

          </div>


          {/* PAYMENT */}

          <div className={styles.party}>

            <span className={styles.label}>
              PAYMENT DETAILS
            </span>

            <div className={styles.paymentRow}>
              <span>
                Payment Method
              </span>

              <strong>
                {order.paymentMethod}
              </strong>
            </div>

            <div className={styles.paymentRow}>
              <span>
                Payment Status
              </span>

              <strong>
                Paid
              </strong>
            </div>

            <div className={styles.paymentRow}>
              <span>
                Order Status
              </span>

              <strong>
                Delivered
              </strong>
            </div>

          </div>

        </section>


        {/* =====================================
            PRODUCT / GST TABLE
        ===================================== */}

        <section className={styles.taxTableSection}>

          <div className={styles.tableScroll}>

            <table className={styles.taxTable}>

              <thead>

                {/* MAIN HEADER */}

                <tr>

                  <th rowSpan="2">
                    Description of Goods
                  </th>

                  <th rowSpan="2">
                    HSN Code
                  </th>

                  <th rowSpan="2">
                    Qty.
                  </th>

                  <th rowSpan="2">
                    Product Total
                  </th>

                  <th rowSpan="2">
                    Discount
                  </th>

                  <th rowSpan="2">
                    Taxable Value
                  </th>

                  <th colSpan="2">
                    CGST
                  </th>

                  <th colSpan="2">
                    SGST
                  </th>

                  <th colSpan="2">
                    IGST
                  </th>

                  <th rowSpan="2">
                    Payable
                  </th>

                </tr>


                {/* SUB HEADER */}

                <tr>

                  <th>
                    Rate
                  </th>

                  <th>
                    Amt
                  </th>

                  <th>
                    Rate
                  </th>

                  <th>
                    Amt
                  </th>

                  <th>
                    Rate
                  </th>

                  <th>
                    Amt
                  </th>

                </tr>

              </thead>


              <tbody>

                {productRows.map((product) => (

                  <tr key={product.id}>

                    {/* DESCRIPTION */}

                    <td
                      className={
                        styles.descriptionCell
                      }
                    >

                      <div
                        className={
                          styles.productDetails
                        }
                      >

                        <strong>
                          {product.name}
                        </strong>

                        <span>
                          Color: {product.color}
                        </span>

                        <span>
                          Size: {product.size}
                        </span>

                      </div>

                    </td>


                    {/* HSN */}

                    <td>
                      {product.hsn}
                    </td>


                    {/* QTY */}

                    <td>
                      {product.quantity}
                    </td>


                    {/* PRODUCT TOTAL */}

                    <td>
                      {formatMoney(
                        product.productTotal
                      )}
                    </td>


                    {/* DISCOUNT */}

                    <td>
                      {product.discountAmount > 0
                        ? `- ${formatMoney(
                            product.discountAmount
                          )}`
                        : "₹0.00"}
                    </td>


                    {/* TAXABLE VALUE */}

                    <td>
                      {formatMoney(
                        product.taxableValue
                      )}
                    </td>


                    {/* CGST */}

                    <td>
                      {product.cgstRate}%
                    </td>

                    <td>
                      {formatMoney(
                        product.cgstAmount
                      )}
                    </td>


                    {/* SGST */}

                    <td>
                      {product.sgstRate}%
                    </td>

                    <td>
                      {formatMoney(
                        product.sgstAmount
                      )}
                    </td>


                    {/* IGST */}

                    <td>
                      {product.igstRate}%
                    </td>

                    <td>
                      {formatMoney(
                        product.igstAmount
                      )}
                    </td>


                    {/* PAYABLE */}

                    <td
                      className={
                        styles.payableCell
                      }
                    >
                      {formatMoney(
                        product.payable
                      )}
                    </td>

                  </tr>

                ))}


                {/* TOTAL ROW */}

                <tr
                  className={
                    styles.totalRow
                  }
                >

                  <td
                    colSpan="3"
                    className={
                      styles.totalLabel
                    }
                  >
                    TOTAL
                  </td>

                  <td>
                    {formatMoney(
                      subtotal
                    )}
                  </td>

                  <td>
                    {totalDiscount > 0
                      ? `- ${formatMoney(
                          totalDiscount
                        )}`
                      : "₹0.00"}
                  </td>

                  <td>
                    {formatMoney(
                      taxableTotal
                    )}
                  </td>

                  <td></td>

                  <td>
                    {formatMoney(
                      cgstTotal
                    )}
                  </td>

                  <td></td>

                  <td>
                    {formatMoney(
                      sgstTotal
                    )}
                  </td>

                  <td></td>

                  <td>
                    {formatMoney(
                      igstTotal
                    )}
                  </td>

                  <td
                    className={
                      styles.payableCell
                    }
                  >
                    {formatMoney(
                      grandTotal
                    )}
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* =====================================
            BOTTOM SUMMARY
        ===================================== */}

        <section className={styles.bottomSection}>

          <div className={styles.amountWords}>

            <span>
              Amount in Words
            </span>

            <strong>
              Rupees{" "}
              {Math.round(
                grandTotal
              ).toLocaleString("en-IN")}{" "}
              Only
            </strong>

            <p>
              This is a computer generated
              tax invoice and does not require
              a signature.
            </p>

          </div>


          <div className={styles.summary}>

            <div className={styles.summaryRow}>
              <span>
                Product Total
              </span>

              <strong>
                {formatMoney(subtotal)}
              </strong>
            </div>


            <div className={styles.summaryRow}>
              <span>
                Discount
              </span>

              <strong>
                - {formatMoney(totalDiscount)}
              </strong>
            </div>


            <div className={styles.summaryRow}>
              <span>
                Taxable Value
              </span>

              <strong>
                {formatMoney(taxableTotal)}
              </strong>
            </div>


            <div className={styles.summaryRow}>
              <span>
                Total Tax
              </span>

              <strong>
                {formatMoney(totalTax)}
              </strong>
            </div>


            <div className={styles.summaryRow}>
              <span>
                Shipping
              </span>

              <strong>
                {order.shippingCharge === 0
                  ? "FREE"
                  : formatMoney(
                      order.shippingCharge
                    )}
              </strong>
            </div>


            <div className={styles.grandTotal}>

              <span>
                PAYABLE
              </span>

              <strong>
                {formatMoney(grandTotal)}
              </strong>

            </div>

          </div>

        </section>


        {/* =====================================
            FOOTER
        ===================================== */}

        <footer className={styles.footer}>

          <div>

            <h3>
              Thank you for shopping with us!
            </h3>

            <p>
              For any queries regarding this
              invoice, please contact customer
              support.
            </p>

          </div>


          <button
            type="button"
            className={styles.printButton}
            onClick={() => window.print()}
          >
            Print Invoice
          </button>

        </footer>

      </div>

    </main>
  );
};

export default InvoicePage;