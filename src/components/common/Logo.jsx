import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="font-bold text-2xl tracking-wide text-rose-500">
        QuikBuys
      </h1>
    </Link>
  );
}
