import PageLayout from "@/app/layouts/PageLayout"

export default function OrderPage({params}) {
    return (
        <PageLayout>
            <h1>Order Page</h1>
            <p>Order ID: {params.orderId}</p>
        </PageLayout>
    )
}