import PageLayout from "@/app/layouts/PageLayout";

import Image from "next/image";

import dogImg from "@/public/images/dogs/helena-lopes.jpg"

export default function CatsPage() {
  return (
    <PageLayout>
      <p>Cats Page</p>
      <p>Still in construction... </p>

      <div className="relative w-full h-64 flex flex-row">
        <div className="relative bg-gray-500 w-1/3 h-full overflow-hidden">
            <Image src={dogImg} alt="dog" layout="fill" objectFit="cover" />
        </div>
        <div className="relative bg-gray-700 w-2/3 h-full">

        </div>
      </div>
      <div className="relative w-full h-64 flex flex-row">
        <div className="relative bg-gray-500 w-1/3 h-full overflow-hidden">
            <Image src={dogImg} alt="dog" layout="fill" objectFit="cover" />
        </div>
        <div className="relative bg-gray-700 w-2/3 h-full">

        </div>
      </div>
      <div className="relative w-full h-64 flex flex-row">
        <div className="relative bg-gray-500 w-1/3 h-full overflow-hidden">
            <Image src={dogImg} alt="dog" layout="fill" objectFit="cover" />
        </div>
        <div className="relative bg-gray-700 w-2/3 h-full">

        </div>
      </div>
      <div className="relative w-full h-64 flex flex-row">
        <div className="relative bg-gray-500 w-1/3 h-full overflow-hidden">
            <Image src={dogImg} alt="dog" layout="fill" objectFit="cover" />
        </div>
        <div className="relative bg-gray-700 w-2/3 h-full">

        </div>
      </div>
    </PageLayout>
  );
}
