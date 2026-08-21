"use client";

import { useEffect, useState } from "react";
import styles from "./wishlist.module.css";
import featuredData from "../../data/featuredProductData";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import WishlistHeader from "./components/wishlistHeader/WishlistHeader";
import WishlistCategory from "./components/wishlistCategory/WishlistCategory";
import WishlistGrid from "./components/wishlistGrid/WishlistGrid";
import EmptyWishlist from "./components/emptyWishlist/EmptyWishlist";

const WishlistPage = () => {
  const [wishlistIds, setWishlistIds] = useState([]);
  const [previewIds, setPreviewIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist");

      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);

        if (Array.isArray(parsedWishlist)) {
          setWishlistIds(parsedWishlist);
        }
      }
    } catch (error) {
      console.error("Wishlist loading error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (wishlistIds.length === 0) {
      const firstTwoProducts = featuredData.slice(0, 2);

      setPreviewIds(
        firstTwoProducts.map((product) => product.id)
      );
    } else {
      setPreviewIds([]);
    }
  }, [wishlistIds]);

  const wishlistProducts = featuredData.filter((product) =>
    wishlistIds.includes(product.id)
  );

  const previewProducts = featuredData.filter((product) =>
    previewIds.includes(product.id)
  );

  const displayProducts =
    wishlistProducts.length > 0
      ? wishlistProducts
      : previewProducts;

  const removeFromWishlist = (productId) => {
    if (wishlistIds.includes(productId)) {
      const updatedWishlist = wishlistIds.filter(
        (id) => id !== productId
      );

      setWishlistIds(updatedWishlist);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );

      window.dispatchEvent(new Event("wishlistUpdated"));

      return;
    }

    setPreviewIds((prev) =>
      prev.filter((id) => id !== productId)
    );
  };

  const addToBag = (product) => {
    try {
      const savedCart = localStorage.getItem("cart");
      const cart = savedCart ? JSON.parse(savedCart) : [];

      const existingProduct = cart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
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

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Add to bag error:", error);
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        Loading Wishlist...
      </div>
    );
  }

  return (
    <>
      <Header />

      <section className={styles.wishlistPage}>
        <div className="container">
          <WishlistHeader
            itemCount={displayProducts.length}
          />

          <WishlistCategory />

          {displayProducts.length > 0 ? (
            <WishlistGrid
              products={displayProducts}
              onRemove={removeFromWishlist}
              onAddToBag={addToBag}
            />
          ) : (
            <EmptyWishlist />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WishlistPage;