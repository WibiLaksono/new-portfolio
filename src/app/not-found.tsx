import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Page Not Found</p>
            <Link
                href="/"
                className="px-6 py-2 border rounded-4xl hover:px-8 transition-all duration-200"
            >
                Back to Home
            </Link>
        </div>
    );
}