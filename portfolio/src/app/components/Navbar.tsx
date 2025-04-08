import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/projects">Projects</Link>
    </nav>
  );
};

export default Navbar;
