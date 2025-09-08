const sidebarItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "menu", label: "Menu" },
    { key: "orders", label: "Orders" },
    { key: "cart", label: "Cart" },
    { key: "customers", label: "Customers" },
    { key: "profile", label: "Profile" },
    { key: "settings", label: "Settings" },
    { key: "logout", label: "Logout" },
];


const Sidebar: React.FC = () => {
    return <div className="w-[16%] h-screen bg-gray-100 flex flex-col items-start py-2">
        {sidebarItems.map((item) => <div key={item.key} className="hover:bg-green-400 transition-all duration-300 hover:text-white flex justify-start px-10 cursor-pointer items-center text-green-400 font-bold text-semibold list-none text-center bg-green-100 w-full h-full">{item.label}</div>)}
    </div>
}

export default Sidebar;