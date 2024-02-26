"use client";

import { useState } from "react";

import PageLayout from "@/app/layouts/PageLayout";

import StoreModal from "@/app/components/StoreModal";

import Cats from "@/app/data/cats.json"

import StoreItemList from "@/app/components/StoreItemList";

export default function DogsPage() {
  const [showModal, setShowModal] = useState(false);

  const [modalObject, setModalObject] = useState({});

  const handleOnAddToCart = (item) => {
    setModalObject(item);
    setShowModal(true);
  };

  const handleOnCloseModal = () => {
    setModalObject({});
    setShowModal(false);
  };

  return (
    <PageLayout>
      {Object.keys(modalObject).length > 0 && showModal && (
        <StoreModal
          modalObject={modalObject}
          onCloseModal={handleOnCloseModal}
        />
      )}
      <section className="flex flex-col gap-8 my-6">
        <div>
          <p className="text-4xl font-semibold text-gray-800">All Cats</p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p className="text-xl font-semibold text-gray-700">Results:</p>
            <p className="text-md font-semibold text-gray-700">{Cats.length}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-semibold text-gray-700">Sort by:</p>
            <select className="px-4 py-2 bg-gray-50 border border-gray-500 rounded-md">
              <option>Name</option>
              <option>Breed</option>
            </select>
          </div>
        </div>
      </section>

      <StoreItemList storeItems={Cats} onAddToCart={handleOnAddToCart} />
    </PageLayout>
  );
}
