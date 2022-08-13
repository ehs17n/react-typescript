import React, { useState } from 'react';

type TestProps = {};

const Items = [
  {
    count: 5,
    id: 1,
    name: 'hi',
  },
  {
    count: 5,
    id: 2,
    name: 'yo',
  },
];

const Test: React.FC<TestProps> = () => {
  const [storeItems, setStoreItems] = useState(Items);

  // const newArr = arr1.map((obj) => {
  //   if (obj.id === 1) {
  //     return { ...obj, name: 'Alfred' };
  //   }

  //   return obj;
  // });

  const modify = (id: number) => {
    const newArr = storeItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: 1 };
      }
      return item;
    });

    setStoreItems(newArr);

    //   storeItems.forEach((item) => {
    //     if (item.id === id) {
    //       const Copy = { ...item, count: 1 };
    //       setStoreItems
    //     }
    //   });
    // };
  };

  return (
    <div>
      <div>
        {storeItems.map((item) => {
          return (
            <div>
              <p>{item.count}</p>
              <p> {item.id}</p>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => modify(1)}>Change the Count</button>
    </div>
  );
};
export default Test;
