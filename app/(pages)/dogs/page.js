import StoreItem from "@/app/components/StoreItem";

import PageLayout from "@/app/layouts/PageLayout";

import kat_smith from "@/public/images/dogs/kat-smith.jpg";
import helena_lopes from "@/public/images/dogs/helena-lopes.jpg";
import dominika_roseclay from "@/public/images/dogs/dominika-roseclay.jpg";
import ilargian_faus from "@/public/images/dogs/ilargian-faus.jpg";

export default function DogsPage() {
  return (
    <PageLayout>
      <section className="flex flex-col gap-6 my-6">
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
            <select className="px-4 py-2 border border-gray-500 rounded-md">
              <option>Name</option>
              <option>Breed</option>
            </select>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
      <StoreItem image={kat_smith} name="Kat"/>
      <StoreItem image={helena_lopes} name="Helena"/>
      <StoreItem image={ilargian_faus} name="Ilargian"/>
      </section>
    </PageLayout>
  );
}
