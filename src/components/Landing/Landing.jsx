import './Landing.css';
import dashboard from '../../assets/dashboard-photo1.png'

const Landing = () => {
  return (
    <main className="container">
      <header className="item-a">
        <h1>hello</h1>
      </header>
      <section className="item-b">
      </section>
      <aside className="item-c">
        <h2>Bridging the Gap Between Teachers and Students</h2>
      </aside>
      <aside className="item-d">
        <img className="dashboard-img" src={dashboard} alt="dwdw" />
      </aside>

      <footer className="item-e">
        {/* Footer content */}
      </footer>
    </main>
  );
};

export default Landing;
  