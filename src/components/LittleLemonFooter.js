import logoFooter from '../images/logo_footer.png';

export default function LittleLemonFooter() {
  return (
    <footer>
      <article>
        <img src={logoFooter} />
      </article>
      <article>
        <p>Copyright Little Lemon</p>
      </article>
    </footer>
  );
}
