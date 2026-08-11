"use client";

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import styles from "./wishlist.module.css";

import featuredData from "../../data/featuredProductData";

import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

const WishlistPage = () => {
  const [wishlistIds, setWishlistIds] = useState([]);
  const [previewIds, setPreviewIds] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================================
  // LOAD WISHLIST
  // =========================================

  useEffect(() => {
    try {
      const savedWishlist =
        localStorage.getItem("wishlist");

      if (savedWishlist) {
        const parsedWishlist =
          JSON.parse(savedWishlist);

        if (Array.isArray(parsedWishlist)) {
          setWishlistIds(parsedWishlist);
        }
      }
    } catch (error) {
      console.error(
        "Wishlist loading error:",
        error
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // =========================================
  // PREVIEW PRODUCTS
  // =========================================
  //
  // Jab actual wishlist empty ho,
  // first 2 products design preview ke liye
  // show honge.
  //

  useEffect(() => {
    if (wishlistIds.length === 0) {
      const firstTwoProducts =
        featuredData.slice(0, 2);

      setPreviewIds(
        firstTwoProducts.map(
          (product) => product.id
        )
      );
    } else {
      setPreviewIds([]);
    }
  }, [wishlistIds]);

  // =========================================
  // ACTUAL WISHLIST PRODUCTS
  // =========================================

  const wishlistProducts =
    featuredData.filter((product) =>
      wishlistIds.includes(product.id)
    );

  // =========================================
  // PREVIEW PRODUCTS
  // =========================================

  const previewProducts =
    featuredData.filter((product) =>
      previewIds.includes(product.id)
    );

  // =========================================
  // PRODUCTS TO DISPLAY
  // =========================================

  const displayProducts =
    wishlistProducts.length > 0
      ? wishlistProducts
      : previewProducts;

  // =========================================
  // REMOVE FROM WISHLIST
  // =========================================

  const removeFromWishlist = (productId) => {
    // -----------------------------------------
    // If this is an actual wishlist product
    // -----------------------------------------

    if (wishlistIds.includes(productId)) {
      const updatedWishlist =
        wishlistIds.filter(
          (id) => id !== productId
        );

      setWishlistIds(updatedWishlist);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );

      window.dispatchEvent(
        new Event("wishlistUpdated")
      );

      return;
    }

    // -----------------------------------------
    // If this is a temporary preview product
    // -----------------------------------------

    setPreviewIds((prev) =>
      prev.filter(
        (id) => id !== productId
      )
    );
  };

  // =========================================
  // ADD TO BAG
  // =========================================

  const addToBag = (product) => {
    try {
      const savedCart =
        localStorage.getItem("cart");

      const cart = savedCart
        ? JSON.parse(savedCart)
        : [];

      const existingProduct = cart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  (item.quantity || 1) + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );
    } catch (error) {
      console.error(
        "Add to bag error:",
        error
      );
    }
  };

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <div className={styles.loading}>
        Loading Wishlist...
      </div>
    );
  }

  // =========================================
  // PAGE
  // =========================================

  return (
    <>
      <Header />

      <section className={styles.wishlistPage}>
        <div className="container">

          {/* =================================
              HEADING
          ================================= */}

          <div className={styles.heading}>
            <h1>My Wishlist</h1>

            <span>
              {displayProducts.length}{" "}
              {displayProducts.length === 1
                ? "Item"
                : "Items"}
            </span>
          </div>

          {/* =================================
              CATEGORY
          ================================= */}

          <div
            className={
              styles.categoryWrapper
            }
          >
            <button
              type="button"
              className={
                styles.categoryBtn
              }
            >
              T-Shirt
            </button>
          </div>

          {/* =================================
              PRODUCTS
          ================================= */}

          {displayProducts.length > 0 ? (

            <div
              className={
                styles.productGrid
              }
            >

              {displayProducts.map(
                (product) => {

                  const productImage =
                    product.images?.[0];

                  return (
                    <div
                      className={
                        styles.productCard
                      }
                      key={product.id}
                    >

                      {/* =====================
                          IMAGE
                      ====================== */}

                      <div
                        className={
                          styles.imageWrapper
                        }
                      >

                        {productImage && (
                          <img
                            src={
                              productImage?.src ||
                              productImage
                            }
                            alt={
                              product.title ||
                              "Product"
                            }
                            className={
                              styles.productImage
                            }
                          />
                        )}

                        {/* Category */}

                        <span
                          className={
                            styles.fitBadge
                          }
                        >
                          {product.category ||
                            "REGULAR FIT"}
                        </span>

                        {/* Rating */}

                        <div
                          className={
                            styles.rating
                          }
                        >
                          <span
                            className={
                              styles.star
                            }
                          >
                            ★
                          </span>

                          <span>
                            {product.rating ||
                              "0.0"}
                          </span>
                        </div>

                      </div>

                      {/* =====================
                          DETAILS
                      ====================== */}

                      <div
                        className={
                          styles.productDetails
                        }
                      >

                        <div
                          className={
                            styles.brand
                          }
                        >
                          {product.brand ||
                            "Cotton Bolls"}
                        </div>

                        <div
                          className={
                            styles.productName
                          }
                          title={
                            product.title
                          }
                        >
                          {product.title}
                        </div>

                        <div
                          className={
                            styles.priceRow
                          }
                        >

                          <span
                            className={
                              styles.price
                            }
                          >
                            ₹{product.price}
                          </span>

                          {product.oldPrice && (
                            <span
                              className={
                                styles.oldPrice
                              }
                            >
                              ₹
                              {
                                product.oldPrice
                              }
                            </span>
                          )}

                          {product.discount && (
                            <span
                              className={
                                styles.discount
                              }
                            >
                              {
                                product.discount
                              }
                              % off
                            </span>
                          )}

                        </div>

                      </div>

                      {/* =====================
                          ACTIONS
                      ====================== */}

                      <div
                        className={
                          styles.actions
                        }
                      >

                        {/* DELETE */}

                        <button
                          type="button"
                          className={
                            styles.deleteBtn
                          }
                          onClick={() =>
                            removeFromWishlist(
                              product.id
                            )
                          }
                          aria-label="Remove from wishlist"
                        >
                          <FiTrash2
                            size={17}
                          />
                        </button>

                        {/* ADD TO BAG */}

                        <button
                          type="button"
                          className={
                            styles.addBagBtn
                          }
                          onClick={() =>
                            addToBag(product)
                          }
                        >
                          ADD TO BAG
                        </button>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          ) : (

            /* =================================
               EMPTY WISHLIST
            ================================= */

            <div
              className={
                styles.emptyWishlist
              }
            >

              <div
                className={
                  styles.emptyIcon
                }
              >
                ♡
              </div>

              <h2>
                Your Wishlist is Empty
              </h2>

              <p>
                Save your favorite products
                here and buy them later.
              </p>

            </div>

          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default WishlistPage;