import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 px-4 pb-10">
      <nav className="space-y-8">
        <Link href="/contact" className="ep-link">
          Contact Us
        </Link>
        <Link href="/terms" className="ep-link">
          Term of Use
        </Link>
        <Link href="/privacy" className="ep-link">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
