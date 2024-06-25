import RootNavbar from "@/components/shared/RootNavbar"
import RootHeading from "./components/RootHeading"

const RootLayout = () => {
    return (
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <RootNavbar />
            <main className="flex flex-col items-center justify-start h-full ">
                <RootHeading />
            </main>
        </div>
    )
}

export default RootLayout
