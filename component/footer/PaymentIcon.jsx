import Image from "next/image";
import visa from "@/assets/images/pay-card/visa.png";
import mastercard from "@/assets/images/pay-card/mastercard.png";
const icons = [visa, mastercard];

const PaymentIcon = () => {
  return (
    <div className="paymentIcons">
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon}
          alt={`payment-${index}`}
          width={45}
          height={25}
        />
      ))}
    </div>
  );
};

export default PaymentIcon;
