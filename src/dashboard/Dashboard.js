import RecentUser from "./RecentUser";
import StatCard from "../components/StatCard";
import EmployerJobChart from "./EmployerJobChart";
import JobPieChart from "./JobPieChart";
import UserPieChart from "./UserPieChart";

function Dashboard() {
  return (
    <div>

      {/* Stat Cards */}
      <div className="card">
        <div className="row">
          <StatCard />
        </div>
      </div>

      {/* Charts Section */}
      <div className="row">
          <EmployerJobChart />
      </div>

      {/* Charts Section */}
      <div className="row">
        <div className="col-md-6">
          <JobPieChart />
        </div>
        <div className="col-md-6">
          <UserPieChart />
        </div>
      </div>

      {/* Recent Users Table */}
      <RecentUser />
    </div>
  );
}

export default Dashboard;
