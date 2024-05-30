import { Route, Routes, Router } from 'react-router-dom';
import { DashboardCreate } from '../pages/dashboards/DashboardCreate';
import { Dashboard } from '../pages/dashboards/Dashboard';
import { DataCenter } from '../pages/data/DataCenter';
import { Home } from '../pages/Home';
import { Graph } from '../pages/graph/Graph';
import { DashboardList } from '../pages/dashboards/DashboardList';
import { DashboardRow } from '../pages/dashboards/DashboardRow';
import { NavbarP } from '../components/navbar/NavbarP';

export const AppRouter = () => {
  return (
    <>
      <NavbarP/>  

      <Routes>
        <Route path="data-center" element={<DataCenter />} />
        <Route path="dashboard/:dashboardId" element={<Dashboard />} />
        <Route path="dashboard/:dashboardId/add-row" element={<DashboardRow />} />
        <Route path="dashboard/:dashboardId/add-graph" element={<Graph />} />
        <Route path='dashboard-create' element={<DashboardCreate />} />
        <Route path='dashboard-list' element={<DashboardList />} />
        <Route path="" element={<Home />} />
      </Routes>
    </>
  )
}