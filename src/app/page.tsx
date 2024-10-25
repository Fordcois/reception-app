import Link from "next/link"


export default function Home() {


  return (
    <div className="centralised">
      
      <h1 > Welcome</h1>


        <p className="app-font">Please register as you enter/exit the building</p>
        <Link className='Button' href='/users'>Register</Link>

    </div>
  );
}
