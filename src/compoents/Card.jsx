export default function Card({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      {title && <h2 className="text-lg font-semibold mb-4 text-fuchsia-500">{title}</h2>}
      {children}
    </div>
  );
}
