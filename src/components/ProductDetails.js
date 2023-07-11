




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const DetailsComponent = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     // Fetch the item details based on the ID
//     // For example, make an API call or access data from a local source
    
//     console.log(this.props);

//     const fetchItemDetails = async () => {
//       // Fetch the item details using the ID
//       const response = await fetch(`/api/items/${id}`);
//       const itemData = await response.json();
//       setItem(itemData);
//     };

//     fetchItemDetails();
//   }, [id]);

//   if (!item) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Details Component</h2>
//       <h3>{item.name}</h3>
//       <p>{item.description}</p>
//     </div>
//   );
// };

// export default DetailsComponent;





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details based on the itemId from an API or data source
    const fetchItemDetails = async () => {
      try {
        // Replace with your own fetch logic
        const response = await fetch(`/api/items/${itemId}`);
        const itemData = await response.json();
        setItem(itemData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.imgsrc} alt={item.name} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      {/* Add more item details here */}
    </div>
  );
};

export default ItemDetails;
