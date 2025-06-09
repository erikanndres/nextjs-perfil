export const dynamic = 'force-dynamic';
import CardProfile from "@/components/Card/ProfileCard";

export const metadata = {
    title: 'My Profile',
    description: 'This is my profile',
    authors: [{name: 'Erik Carcelen'}]
}

export default function Perfil() {
    return (
        <main className="h-screen w-full">
            <CardProfile/>
        </main>
    );
}