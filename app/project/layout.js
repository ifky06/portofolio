import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Profile from "@/models/Profile";

export default async function ProjectLayout({ children }) {
    const data = await Profile.getProfile();
    return (
        <>
            <Navbar profileName={data.nickname} />
            {children}
            <Footer profileName={data.nickname} />
        </>
    )
}