import { useEffect, useState } from "react";
import Servicesapi from "../services/Servicesapi";
import Card from "../compoents/Card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export default function SummaryPage() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    Servicesapi.fetchSummary().then(setSummary);
  }, []);

  return (
    <div className="p-6">
      <Card title="Attendance Summary">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={summary}>
            <XAxis dataKey="classId" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
