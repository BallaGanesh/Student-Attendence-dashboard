

import { useEffect, useState } from "react";
import Servicesapi from "../services/Servicesapi";
import Card from "../compoents/Card";
import Toggle from "../compoents/Toggle";
import Button from "../compoents/Button";
import { useNavigate } from "react-router-dom";


export default function StudentListPage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Servicesapi.fetchStudents().then(setStudents);
  }, []);

  const toggleAttendance = (index) => {
    const copy = [...students];
    copy[index].present = !copy[index].present;
    setStudents(copy);
  };

  const handleSubmit = () => {
    Servicesapi.submitAttendance(students);
   navigate("/summary");
  };

  return (
    <div className="p-6 bg-amber-300">
      <Card title="#Btech – Mark Attendance">
        <table className="w-full border-collapse border border-gray-700 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-blue-700">Roll No</th>
              <th className="border px-4 py-2 text-blue-700 ">Name</th>
              <th className="border px-4 text-blue-700 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, idx) => (
              <tr key={s.id}>
                <td className="border px-4 py-2">{s.roll}</td>
                <td className="border px-4 py-2">{s.name}</td>
                <td className="border px-4 py-2 text-center">
                  <Toggle checked={s.present} onChange={() => toggleAttendance(idx)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button label="Submit Attendance" onClick={handleSubmit} />
      </Card>
    </div>
  );
}
