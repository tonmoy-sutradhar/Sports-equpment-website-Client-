import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyEquipmentCart from "../Components/MyEquipmentCart";
import { Fade } from "react-awesome-reveal";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [myEquipment, setMyEquipment] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://sports-equipment-store-server-zeta.vercel.app/my-equipment?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyEquipment(data))
        .catch((err) => console.error("Error fetching user equipment:", err));
    }
  }, [user?.email]);

  const handleDelete1 = (id) => {
    setMyEquipment((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center border-b-2 w-[400px] mx-auto text-lime-500 ">
        My Equipment List
      </h2>
      <p className="ml-4">
        User Name: <span className="text-blue-500 ">{user.displayName}</span>
      </p>
      <p className="ml-4 mb-5">
        USer Email: <span className="text-blue-500 ">{user.email}</span>
      </p>
      {myEquipment.length === 0 ? (
        <p className="text-center font-bold text-blue-500 mt-7">
          No equipment Added.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-9">
          {myEquipment.map((item, index) => (
            <Fade
              cascade="false"
              triggerOnce="true"
              delay={index * 200}
              direction="right"
            >
              <MyEquipmentCart
                key={item._idk}
                item={item}
                handleDelete1={handleDelete1}
              ></MyEquipmentCart>
            </Fade>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEquipmentList;
