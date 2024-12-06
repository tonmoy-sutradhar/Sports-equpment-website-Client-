import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyEquipmentCart from "../Components/MyEquipmentCart";
import { Fade } from "react-awesome-reveal";

const MyEquipmentList = () => {
  const { cart } = useContext(AuthContext);

  const [myCart, setMyCart] = useState(cart);

  return (
    <>
      <h1 className="text-3xl font-bold text-center border-b-2 w-[300px] mx-auto text-lime-500 mb-5">
        My Equipment List
      </h1>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-9">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <Fade cascade="false" delay={index * 100} direction="right">
                {" "}
                <MyEquipmentCart
                  key={item._id}
                  myCart={myCart}
                  setMyCart={setMyCart}
                  item={item}
                ></MyEquipmentCart>
              </Fade>
            ))
          ) : (
            <p className="text-center text-xl font-bold ml-[0px] md:ml-[100px]  lg:ml-[380px] text-purple-500 col-span-3">
              No Sports equipment added, Cart is Empty
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyEquipmentList;

// import React from "react";

// const MyEquipmentList = () => {
//   return (
//     <div>
//       <h1>My Equipment List</h1>
//     </div>
//   );
// };

// export default MyEquipmentList;
