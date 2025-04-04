import Link from "next/link";

export default function Header() {
    const linkStyling = "text 4xl font-semibold";
    return (
        <header className="p-4 bg-white">
            <nav>
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/about" className={linkStyling}>
                    About
                </Link>
            </nav>
        </header>
    );
}