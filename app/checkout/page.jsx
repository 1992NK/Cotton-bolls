"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./checkout.module.css";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import AddressSection from "./components/AddressSection";
import PaymentSection from "./components/PaymentSection";
import BillingDetails from "./components/billingdetail/BillingDetails";
import CheckoutStepper from "@/checkout/components/checkoutStepper/CheckoutStepper";

const CheckoutPage = () => {
    const router = useRouter();
    const [selectedPayment, setSelectedPayment] = useState("cod");
    const [openMethod, setOpenMethod] = useState(null);

    const selectPayment = (payment) => {
        setSelectedPayment(payment);
        setOpenMethod(null);
    };

    const toggleMethod = (method) => {
        setOpenMethod((previous) =>
            previous === method ? null : method
        );
    };

    const handlePlaceOrder = () => {
        console.log("Selected Payment:", selectedPayment);
        console.log("Place Order");
    };

    const handleAddNewAddress = () => {
        router.push("/delivery-address");
    };

    return (
        <>
            <Header />
            <section className={styles.stepperbg}>
                <div className="container">
                    <CheckoutStepper />
                </div>
            </section>
            <section className={styles.checkoutPage}>
                <div className="container">
                    <div className={styles.checkoutrow}>
                        <section className={styles.leftSection}>
                            <AddressSection
                                onAddAddress={handleAddNewAddress}
                            />
                            <PaymentSection
                                selectedPayment={selectedPayment}
                                onSelectPayment={selectPayment}
                                openMethod={openMethod}
                                toggleMethod={toggleMethod}
                            />
                        </section>
                        <BillingDetails
                            cartTotal={2698}
                            memberSavings={200}
                            codCharges={29}
                            shippingCharges={50}
                            isCOD={selectedPayment === "cod"}
                            onPlaceOrder={handlePlaceOrder}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CheckoutPage;