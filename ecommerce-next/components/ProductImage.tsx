"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";

type Props = {
  product: Product;
  fill?: boolean;
};

const ProductImage = ({ product, fill }: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      {fill ? (
        <Image
          src={product.image}
          fill
          alt={product.title}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        ></Image>
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        ></Image>
      )}
    </div>
  );
};

export default ProductImage;
