import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <GuestLayout>
                <div>he world</div>
                <Link href="/about">About</Link>
            </GuestLayout>
        </>
    );
}
