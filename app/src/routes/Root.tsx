import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { FavoritesData } from '../types'
import yelpBurst from '../assets/yelp_burst.svg'

export default function Root() {
  const { favorites } = useLoaderData() as FavoritesData

  return (
    <>
      <aside className="sidebar sidebar-separated sidebar-left">
        <Link to="/">
          <h1 className="logo">
            <img src={yelpBurst} alt="Yelp logo" width={25} />
            <span>Yelp Favorites</span>
          </h1>
        </Link>
        <nav className="nav">
          <ul className="list">
            {
              Object.values(favorites).map(fav => (
                <li className="list-item" key={fav.id}>
                  <Link className="link" to={`/favs/${fav.id}`}>{fav.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </aside>
      <section className="detail">
        <Outlet />
      </section>
    </>
  );
}