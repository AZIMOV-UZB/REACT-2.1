import React from "react";
import { Card } from "antd";
import { FaHeart ,FaRegHeart  } from "react-icons/fa";
import { useStateValue } from "@/context/index";
import { Image } from 'antd';

import Skeletons from "@/components/skelotons/skeletons";
const Products = ({ data, loading }) => {
  if (loading) {
    return <Skeletons limit={10} />;
  }
  const [{ wishlist }, dispatch] = useStateValue();
  let items = data?.map((product) => {
    return (
      <Card key={product.id} className="relative">
        <div>
        <Image className="image w-full object-contain"
    src={product.images[0]}
    alt="foto"
  />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-[700] text-[#253D4E] text-start">
            {product.title.slice(0, 20)}...
          </p>
          <p className="text-start text-[12px] text-[#878686]">
            {product.category}
          </p>
          <p className="text-[18px] text-[#3BB77E] font-[700]">
            ${product.price}
          </p>
        </div>
        <div className="absolute top-0 right-0">
          <div>
          <button

            onClick={() =>
              dispatch({ type: "TOGGLE_WISHLIST", payload: product })
            }
            className="rounded-[0_7px] text-[20px] px-[15px]   py-[10px] bg-[#ffffff]"
            >
            {wishlist?.some(item =>item.id === product.id)?
            <FaHeart className="text-[red]"/>
            :
            <FaRegHeart  />
            }
          </button>
          </div>
          
        </div>
      </Card>
    );
  });
  return (
    <div className="container mx-auto mt-7 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {items}
      </div>
    </div>
  );
};

export default Products;
