import Link from 'next/link';

const Navbar = () => (
  <>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        background: #333;
        color: #fff;
        display: flex;
        align-items: center;
        list-style: none;
        width: 100%;
        height: 80px;
        margin: 0;
      }

      li {
        padding: 0 1rem 0 0;
        font-size: 18px;
      }
    `}</style>
  </>
);

export default Navbar;
