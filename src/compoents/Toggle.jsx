export default function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`px-3 py-1 rounded-full text-white ${
        checked ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {checked ? "Present" : "Absent"}
    </button>
  );
}
