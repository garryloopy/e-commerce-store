"use client";

import PageLayout from "@/app/layouts/PageLayout";

import { motion } from "framer-motion";

import Image from "next/image";

import helenaDog from "@/public/images/dogs/helena-lopes.jpg";

import { useOrder } from "@/app/_utils/order-context";
import Link from "next/link";

import google_logo from "@/public/images/logos/google_logo.png";
import github_logo from "@/public/images/logos/github-mark.png";
import { useUserAuth } from "@/app/_utils/auth-context";

export default function ProfilePage() {
  const { order, orderLength } = useOrder();

  const { user, gitHubSignIn, firebaseSignOut, googleSignIn } = useUserAuth();

  const userName = "Garry Jr Dayag";
  const userDescription = "Nisi qui cillum id laboris enim aliquip magna.";

  if (user) {
    console.log(user);
    console.log(user.photoURL);
  }

  return (
    <PageLayout>
      <section className="w-full py-4 flex flex-row gap-4">
        <div className="bg-gray-100 h-[40rem] flex-1 border rounded-md">
          {user ? (
            <div className="flex flex-col justify-between h-full">
              <div className="rounded-t-md overflow-hidden">
                <Image
                  src={user.photoURL}
                  alt="User Profile Picture"
                  height={300}
                  width={300}
                />
              </div>

              <div className="h-2/3 p-4 flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-2xl font-bold text-gray-800">
                        {user.displayName}
                      </p>
                      <p className="text-sm font-medium text-gray-400">
                        Member since Feb 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-lg text-gray-600 font-medium">
                        {userDescription}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-8 w-full">
                  <button className="bg-indigo-700 w-full text-gray-50 px-4 py-2 rounded-md text-lg font-semibold hover:bg-indigo-800 active:bg-indigo-700">
                    Edit Profile
                  </button>
                  <button
                    className="bg-indigo-700 w-full text-gray-50 px-4 py-2 rounded-md text-lg font-semibold hover:bg-indigo-800 active:bg-indigo-700"
                    onClick={firebaseSignOut}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <div className="flex flex-col gap-4">
                <button
                  className="bg-white text-gray-950 px-4 py-2 h-12 rounded-md w-64 flex flex-row items-center justify-start gap-4 border border-gray-400"
                  onClick={googleSignIn}
                >
                  <Image
                    src={google_logo}
                    height={20}
                    width={20}
                    alt="Google logo"
                  />
                  <p className="text-gray-800 font-medium text-base">
                    Continue with Google
                  </p>
                </button>
                <button
                  className="bg-white text-gray-950 px-4 py-2 h-12 rounded-md w-64 flex flex-row items-center justify-start gap-4 border border-gray-400"
                  onClick={gitHubSignIn}
                >
                  <Image
                    src={github_logo}
                    height={20}
                    width={20}
                    alt="GitHub logo"
                  />
                  <p className="text-gray-800 font-medium text-base">
                    Continue with GitHub
                  </p>
                </button>
              </div>
              <p className="text-base text-gray-700 font-normal">
                Note: Log in to save any purchases and to view profile
              </p>
            </div>
          )}
        </div>

        <div className="bg-gray-100 flex-1 min-h-fit max-h-screen overflow-auto border rounded-md p-4">
          <p className="text-4xl text-gray-800 font-semibold border-b-2">
            Recent Purchases
          </p>
          {order <= 0 ? (
            <p className="text-base font-semibold text-gray-500">
              You dont have any recent purchases...
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-gray-500">
                Total orders: {orderLength}
              </p>
              <div className="flex flex-col gap-4">
                {order.map((currentOrder) => {
                  // Get the date components
                  var year = currentOrder.orderDate.getFullYear();
                  var month = currentOrder.orderDate.getMonth() + 1; // Months are zero-indexed, so add 1
                  var day = currentOrder.orderDate.getDate();

                  const orderDate = `${year}-${month}-${day}`;
                  const orderTime = currentOrder.orderDate.toLocaleTimeString();

                  return (
                    <Link
                      className="bg-gray-200 px-4 py-3 rounded-md border shadow-sm"
                      key={currentOrder.orderId}
                      href={`/profile/order/${currentOrder.orderId}`}
                    >
                      <p className="text-gray-700 font-medium">
                        <span className="font-bold">{orderDate}</span> at{" "}
                        <span className="font-bold">{orderTime}</span>
                      </p>
                      <p>Order id: {currentOrder.orderId}</p>
                      <p>{currentOrder.orderQuantity} Items</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
