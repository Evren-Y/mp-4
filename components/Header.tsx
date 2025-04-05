import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#222', 
      color: 'white', 
      padding: '15px 20px', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Link href="/" style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        Cat Breed Explorer 🐱
      </Link>
    </header>
  );
}
