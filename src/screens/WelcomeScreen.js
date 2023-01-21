import logo from '../images/logo.png';
import Grill from '../images/Grill.jpg';
import head_chef from '../images/head_chef.jpg';
import salad from '../images/salad.jpg';
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
  return (
    <>
      <main>
        <section>
          <article id="hero">
            <h1 style={styles.h1} className="heading_shadow">
              SPECIAL OFFER
            </h1>
            <p>30% Off This Weekend</p>
            <Link to="book/" className="cta">
              Book now
            </Link>
          </article>
        </section>
        <section>
          <article>
            <h2 style={styles.h2}>Our New Menu</h2>
            <img src={Grill} />
            <p>
              Our menu consists of 12-15 seasonal items based on
              Italian, Greek, and Turkish culture.
            </p>
            <p>
              <Link to="menu/">See our new menu</Link>
            </p>
          </article>
          <article>
            <h2 style={styles.h2}>Book a table</h2>
            <img src={salad} />
            <p>
              Reserve your table for an Italian, Greek, and Turkish
              dining experience.
            </p>
            <p>
              <Link to="book/">Book your table now</Link>
            </p>
          </article>
          <article>
            <h2 style={styles.h2}>Opening Hours</h2>
            <img src={head_chef} />
            <p>
              The Little Lemon Restaurant is open 7 days a week,
              except for public holidays.
            </p>
            <ul>
              <li>Mon - Fri: 2pm - 10pm</li>
              <li>Sat: 2pm - 11pm</li>
              <li>Sun: 2pm - 9pm</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}

const styles = {
  h2: {
    fontSize: '2.5rem',
    color: '#333333',
    margin: '1rem 0',
  },
  h1: {
    fontSize: '4rem',
    marginTop: '1.5rem',
    marginBottom: '0',
  },
};
