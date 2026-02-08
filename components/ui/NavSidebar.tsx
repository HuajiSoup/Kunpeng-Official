interface NavSidebarProps {
  title: string;
  sections: {
    id: string;
    label: string;
  }[];
  activeId: string;
  handleClick: (id: string) => void;
}

export function NavSidebar({
  title,
  sections,
  activeId,
  handleClick
}: NavSidebarProps) {
  return (<>
    <nav className="bg-white border border-gray-200 rounded-lg p-3">
      <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">{title}</h3>
      <ul className="space-y-1">
        {sections.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                activeId === item.id
                  ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                  : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </>)
}