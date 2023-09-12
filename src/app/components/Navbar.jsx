import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex justify-center space-x-5 px-5'>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
