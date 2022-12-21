import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Homepage " />
            <GuestLayout>
                <div>hello world</div>
            </GuestLayout>
        </>
    );
}
