import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        <div className="Cart-photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXH6HMOmgq62y3RBHPeCGgrMGgxrJLEofPw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="total">({total})</div>
        
      </Link>
    </div>
  );
}
