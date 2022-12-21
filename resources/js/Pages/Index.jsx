import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/inertia-react";
import PageTemplate from "@/Layouts/templates/PageTemplate";

export default function Homepage(props) {
    return (
        <>
            <Head title="Homepage " />
            <GuestLayout>
                <PageTemplate innerHeader={true} />
            </GuestLayout>
        </>
    );
}
