import './Dashboard.css'

const Dashboard = ({ user }) => {
    return (
      <main className="dashboard">
        <h1 className="dashBoard-title">Welcome, Teacher <span>{user.username}</span></h1>
        <p>
          This is the dashboard page where you, and only you, can see a dashboard
          of all of your things.
        </p>
      </main>
    );
  };
  
  export default Dashboard;
  