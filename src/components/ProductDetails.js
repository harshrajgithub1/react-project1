




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsComponent = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch the item details based on the ID
    // For example, make an API call or access data from a local source
    
    console.log(this.props);

    const fetchItemDetails = async () => {
      // Fetch the item details using the ID
      const response = await fetch(`/api/items/${id}`);
      const itemData = await response.json();
      setItem(itemData);
    };

    fetchItemDetails();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Details Component</h2>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default DetailsComponent;

