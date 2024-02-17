"use client";

import { useState } from "react";

import StoreItem from "@/app/components/StoreItem";

import PageLayout from "@/app/layouts/PageLayout";

import StoreModal from "@/app/components/StoreModal";

import Link from "next/link";

import kat_smith from "@/public/images/dogs/kat-smith.jpg";
import helena_lopes from "@/public/images/dogs/helena-lopes.jpg";
import dominika_roseclay from "@/public/images/dogs/dominika-roseclay.jpg";
import ilargian_faus from "@/public/images/dogs/ilargian-faus.jpg";

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
          <p className="text-4xl font-semibold text-gray-800">All Dogs</p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p className="text-xl font-semibold text-gray-700">Results:</p>
            <p className="text-md font-semibold text-gray-700">3</p>
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

      <section className="flex flex-col gap-12">
        <StoreItem
          image={kat_smith}
          name="Kat"
          onAddToCart={handleOnAddToCart}
        />
        <StoreItem
          image={helena_lopes}
          name="Helena"
          onAddToCart={handleOnAddToCart}
        />
        <StoreItem
          image={ilargian_faus}
          name="Ilargian"
          onAddToCart={handleOnAddToCart}
        />
      </section>
    </PageLayout>
  );
}
