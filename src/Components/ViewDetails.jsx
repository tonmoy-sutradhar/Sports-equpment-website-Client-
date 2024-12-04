import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewData = useLoaderData();
  const {
    _id,
    photo,
    itemName,
    categoryName,
    description,
    price,
    rating,
    stockStatus,
    processingTime,
    customization,
  } = viewData;
  return (
    <div>
      <h1>View details {itemName}</h1>
    </div>
  );
};

export default ViewDetails;
