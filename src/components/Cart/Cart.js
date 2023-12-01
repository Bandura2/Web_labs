import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./actions";
import { NavLink } from "react-router-dom";
import { CartCountainer, InsectImage, Price, CardInCart, Buttons, DivForPrice } from "./Cart.styled";


const Cart = () => {
    const dispatch = useDispatch();
    const insectsArray = useSelector((state) => state.insectsList);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        insectsArray.forEach((item) => {
            totalPrice += Math.round(parseInt(item.price)) * item.count;
        });
        setTotalPrice(totalPrice);
    }, [insectsArray]);

    const handleIncrement = (name) => {
        dispatch(incrementCount(name));
    };

    const handleDecrement = (name) => {
        dispatch(decrementCount(name));
    };

    const filteredStadiums = insectsArray.filter((item) => item.count > 0);

    return (
        <div>
            <CartCountainer>
                {filteredStadiums.map((item, index) => (
                    <div key={index}>
                        <CardInCart>
                            <NavLink
                                exact="true"
                                to={`insect/${item.id}`}
                                onClick={(e) => {
                                    if (e.target.tagName === "BUTTON") {
                                        e.preventDefault();
                                    }
                                }}>
                                <InsectImage src={item.img} />
                            </NavLink>
                            <h3>{item.name}</h3>
                            <Price>Price: {item.price}</Price>
                            <Buttons>
                                <button onClick={() => handleDecrement(item.name)}>-</button>
                                <p>{item.count}</p>
                                <button onClick={() => handleIncrement(item.name)}>+</button>
                            </Buttons>
                        </CardInCart>
                    </div>
                ))}
                {totalPrice <= 0 && (
                    <p className="Empty">
                        Cart is empty -_(*_*)_-
                    </p>
                )}

                {totalPrice > 0 && (
                    <DivForPrice>
                        <p style={{ fontSize: "24px", display: "flex", justifyContent: "center" }}>Total Price: {totalPrice}</p>
                    </DivForPrice>
                )}

            </CartCountainer>
        </div>

    );
};

export default Cart;