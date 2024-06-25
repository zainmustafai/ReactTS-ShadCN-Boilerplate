import { HStack } from "../ui/HStack"
import ThemeToggle from "../ui/ThemeToggle"
import { Button } from "../ui/button"
import { Text } from "../ui/text"

const RootNavbar = () => {
    return (
        <HStack justify={"between"} className="relative z-50 px-16 py-10" >
            <HStack className="gap-2">
                {/* <img src="/logo.webp" alt="logo" className="h-16" /> */}
                <span
                className="w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-blue-500"
                >

                </span>
                <Text className="text-3xl font-caudex ">
                    LOREM IPSUM
                </Text>
            </HStack>
            <HStack>
                <ThemeToggle />
                <Button className="flex items-center justify-center gap-2 text-white" >
                    <img src="/assets/nav-button-icon.svg" alt="icon" />
                    Create New
                </Button>
            </HStack>

        </HStack>
    )
}

export default RootNavbar
