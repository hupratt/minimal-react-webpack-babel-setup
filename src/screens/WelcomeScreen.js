import logo from '../images/logo.png';
import Grill from '../images/Grill.jpg';
import head_chef from '../images/head_chef.jpg';
import logo_footer from '../images/logo_footer.png';
import salad from '../images/salad.jpg';

export default function WelcomeScreen({ children }) {
  return (
    <>
      {children}
      <main>
        <section>
          <article id="hero">
            <h1 className="heading_shadow">SPECIAL OFFER</h1>
            <p>30% Off This Weekend</p>
            <a href="book/" className="cta">
              Book now
            </a>
          </article>
        </section>
        <section>
          <article>
            <h2>Our New Menu</h2>
            <img src={Grill} />
            <p>
              Our menu consists of 12-15 seasonal items based on
              Italian, Greek, and Turkish culture.
            </p>
            <p>
              <a href="menu/">See our new menu</a>
            </p>
          </article>
          <article>
            <h2>Book a table</h2>
            <img src={salad} />
            <p>
              Reserve your table for an Italian, Greek, and Turkish
              dining experience.
            </p>
            <p>
              <a href="book/">Book your table now</a>
            </p>
          </article>
          <article>
            <h2>Opening Hours</h2>
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

      <footer>
        <article>
          <img src={logo_footer} />
        </article>
        <article>
          <p>Copyright Little Lemon</p>
        </article>
      </footer>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#000',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
};
