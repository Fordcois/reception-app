import Link from "next/link"

export default function Home() {


  return (
    <div className="Centralised-container">
      <h1> Welcome</h1>
      <Link href='/users'>Users</Link>
      </div>
  );
}
