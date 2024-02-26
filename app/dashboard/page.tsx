import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { iran_sans } from '@/app/ui/fonts'

import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data'

export default async function Page() {

    const revenue = await fetchRevenue()
    const latestInvoices = await fetchLatestInvoices()
    const { totalPaidInvoices, totalPendingInvoices, numberOfCustomers, numberOfInvoices} = await fetchCardData()

    return (
        <main>
            <h1 className={`${iran_sans.className} mb-4 text-xl md:text-2xl`}>
                داشبورد
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="کو کراوه" value={totalPaidInvoices} type="collected" /> 
                <Card title="جاری ماوه" value={totalPendingInvoices} type="pending" /> 
                <Card title="هموی خریده کان" value={numberOfInvoices} type="invoices" /> 
                <Card
                    title="هموی مشتریه کان"
                    value={numberOfCustomers}
                    type="customers"
                /> 
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue}  />
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    );
}