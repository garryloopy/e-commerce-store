"use client";

import { useState } from "react";

import StoreItem from "@/app/components/StoreItem";

import PageLayout from "@/app/layouts/PageLayout";

import StoreModal from "@/app/components/StoreModal";

import Dogs from "@/app/data/dogs.json"

import { useFavorite } from "@/app/_utils/favorite-context";

export default function DogsPage() {
  const [showModal, setShowModal] = useState(false);

  const { findFavorite } = useFavorite();

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
          <p className="text-4xl font-semibold text-gray-800">All Dogs</p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p className="text-xl font-semibold text-gray-700">Results:</p>
            <p className="text-md font-semibold text-gray-700">{Dogs.length}</p>
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

      <section className="flex flex-col gap-12 items-center">
        {
          Dogs.map((dog) => (
            <StoreItem storeItem={dog} onAddToCart={handleOnAddToCart} key={dog.id} isFavorite={findFavorite(dog)}/>
          ))
        }
      </section>
    </PageLayout>
  );
}
