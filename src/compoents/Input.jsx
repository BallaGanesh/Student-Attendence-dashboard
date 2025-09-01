export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="mb-4" >
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
