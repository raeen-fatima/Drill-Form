import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Mini Drills!
        </h1>
        <p className="mb-8 text-zinc-700 dark:text-zinc-300">
          Your go-to app for quick coding exercises.
        </p>
        <Link
          href="/form"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Start Coding
        </Link>
      </div>
      
    </div>
  );
}
