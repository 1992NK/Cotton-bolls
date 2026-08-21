"use client";

import { usePathname } from "next/navigation";
import styles from "./checkoutStepper.module.css";

const steps = [
  {
    id: "cart",
    label: "My Bag",
    path: "/cart",
  },
  {
    id: "address",
    label: "Address",
    path: "/delivery-address",
  },
  {
    id: "checkout",
    label: "Checkout",
    path: "/checkout",
  },
];

export default function CheckoutStepper() {
  const pathname = usePathname();

  const currentIndex = steps.findIndex(
    (step) => step.path === pathname
  );

  return (
    <div className={styles.stepperWrapper}>
      <div className={styles.stepper}>

        {steps.map((step, index) => {
          const isActive = index === currentIndex;
          const isCompleted = index < currentIndex;

          // Sirf Checkout page par
          // Cart → Address line green hogi
          const isCartAddressLine =
            pathname === "/checkout" && index === 0;

          return (
            <div
              className={styles.stepItem}
              key={step.id}
            >

              {/* Circle */}
              <div
                className={`${styles.stepCircle} ${
                  isActive ? styles.active : ""
                } ${
                  isCompleted ? styles.completed : ""
                }`}
              >
                {isCompleted ? "✓" : index + 1}
              </div>

              {/* Label */}
              <div
                className={`${styles.stepLabel} ${
                  isActive ? styles.activeLabel : ""
                } ${
                  isCompleted ? styles.completedLabel : ""
                }`}
              >
                {step.label}
              </div>

              {/* Line */}
              {index < steps.length - 1 && (
                <div
                  className={`${styles.stepLine} ${
                    isCartAddressLine
                      ? styles.completedLine
                      : ""
                  }`}
                />
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}