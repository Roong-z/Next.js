import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href={'/'}>
        <p className={router.pathname === '/' ? 'active' : ''}>Home</p>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        p {
          font-size: 30px;
        }
        .active {
          color: yellow;
        }
      `}</style>
      <br />
      <Link href={'/about'}>
        <p className={router.pathname === '/about' ? 'active' : ''}>About</p>
      </Link>
    </nav>
  );
}
