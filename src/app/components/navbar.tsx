export default function Navbar (){
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">Wibi Laksono Wijaya</div>
            <ul className="flex space-x-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#experience" className="hover:underline">Experience</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    )
}