"use client";

import ProductImage from "@/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import React from "react";

function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  const id = useParams().id;
  const [product, setProduct] = useState<Product>();
  const router = useRouter()

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();

      setProduct(product);
      console.log(product, "proudcttt");
    }

    fetchProducts();
    console.log(Array.from);
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false)
        router.back()
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
            <div className="flex gap-x-0 h-96">
              {product?.image && (
                <div className="relative w-72 h-full hidden md:inline">
                  <ProductImage product={product} fill />
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div className="flex-1">
                  <h4 className="font-semibold">{product?.title}</h4>
                  <p className="font-medium text-sm">{product?.price}</p>
                </div>

                <div className="flex items-center text-sm my-4">
                  <p>{product?.rating.rate}</p>
                  {product?.rating.rate && (
                    <div className="flex items-center ml-2 mr-6">
                      {Array.from(
                        { length: Math.floor(product.rating.rate) },
                        (_, i) => (
                          <StarIcon
                            key={i}
                            className="h-4 w-4 text-yellow-500"
                          />
                        )
                      )}
                      {Array.from(
                        { length: 5 - Math.floor(product.rating.rate) },
                        (_, i) => (
                          <StarIconOutline
                            key={i}
                            className="h-4 w-4 text-yellow-500"
                          />
                        )
                      )}
                    </div>
                  )}
                  <p className="text-blue-500 hover:underline cursor-pointer text-xs">
                    see all {product?.rating.count}
                  </p>
                </div>
                <p className="line-clamp-5 text-sm">{product?.description}</p>
              <div className="text-2xl">
                <button className="button p-1 w-full bg-blue-600 text-white border border-transparent hover:border-blue-500 hover:text-blue-500 hover:bg-transparent my-2 transition-all duration-200">
                  add to bug
                </button>
                <button onClick={() => window.location.reload()} className="button p-1 w-full bg-blue-600 text-white border-transparent hover:bg-blue-800">
                  view full details
                </button>
              </div>
              </div>



            </div>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
