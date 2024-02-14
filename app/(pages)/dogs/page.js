import StoreItem from "@/app/components/StoreItem";

import PageLayout from "@/app/layouts/PageLayout";

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
      <StoreItem />
      <StoreItem />
      <StoreItem />
      </section>
    </PageLayout>
  );
}
