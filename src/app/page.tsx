import Link from "next/link"


export default function Home() {


  return (
    <div className="Centralised-container">
      
      <h1 > Welcome</h1>


        <span className="app-font">Please register as you enter/exit the building</span>
        <Link className='Button' href='/users'>Register</Link>

    </div>
  );
}
