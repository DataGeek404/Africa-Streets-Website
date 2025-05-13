import Header from "../components/Header.js"
import LoginComponent from "../components/LoginComponent.js"
import HomePage from "../components/Home"  // Adjust path

export default function LoginPage() {
    if (sessionStorage.length === 0) {  // Use === instead of ==
        return (
            <div className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md space-y-8 p-6 bg-white shadow-lg rounded-lg">
                    <Header
                        heading="Login to your account"
                        paragraph="Don't have an account yet?"
                        linkName="Signup"
                        linkUrl="/signup"
                    />
                    <LoginComponent />
                </div>
            </div>
        );
    } else {
        return (
            <HomePage />
        );
    }
}
