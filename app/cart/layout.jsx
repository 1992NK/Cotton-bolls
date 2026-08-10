import CartHeader from "./components/cartHeader/CartHeader";


export default function CartLayout({ children }) {
  return (
    <>
      <CartHeader />
      {children}
      
    </>
  );
}