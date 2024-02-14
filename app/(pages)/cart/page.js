"use client";

import CartItem from "@/app/components/CartItem";

import PageLayout from "@/app/layouts/PageLayout";

export default function CartPage() {
    return (
      <PageLayout>
        <section className="my-4">
            <p className="text-4xl font-semibold text-gray-800">Cart</p>
        </section>

        <section className="flex flex-row w-full justify-between">
            <div className="border flex-1">
                <CartItem />
            </div>

            <div className="border flex-1">
                <p>Summary section</p>
            </div>
        </section>
      </PageLayout>
    );
  }
  