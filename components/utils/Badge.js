function Badge({ children, className }) {
  return (
    <li
      className={`${className} flex items-center lowercase mr-1 mb-1 py-1 px-3 text-sm bg-gradient-to-r from-blue-100 to-blue-200 rounded text-blue-700 font-semibold`}
    >
      {children}
    </li>
  );
}

export default Badge;
