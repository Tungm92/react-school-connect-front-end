import './Landing.css';
import dashboard from '../../assets/dashboard-photo1.png'
import highschool from '../../assets/highschool.png'
import highschoolConnect from '../../assets/connect.png'

const Landing = () => {
  return (
    <main className="container">
      <header className="item-a">
        <h1>Where Education Meets Connection.</h1>
      </header>
      <section className="item-b">
      </section>
      <aside className="item-c">
        <h2>Bridging the Gap Between Teachers and Students</h2>
        <p>Fostering seamless communication and understanding, empowering both educators and learners to achieve their best.</p>
      </aside>
      <aside className="item-d">
        <img className="dashboard-img" src={highschool} alt="dashboard-picture" />
      </aside>
      <aside className="item-e">
      <img className="dashboard-img" src={highschoolConnect} alt="dashboard-picture" />
      </aside>
      <aside className="item-f">
        <h2>Empowering Schools, Uniting Communities.</h2>
      </aside>
      <footer className="item-g">
      <p><strong>© 2024 SchoolConnect</strong></p>
      </footer>
    </main>
  );
};

export default Landing;
  