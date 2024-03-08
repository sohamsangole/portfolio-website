import React from 'react'
import { Menu } from '@headlessui/react'

const DropDownMenu = () => {
    return (
        <Menu>
            <Menu.Button className="text-white hover:text-red-500 duration-1000">[Menu]</Menu.Button>
            <Menu.Items className="absolute right-0 mt-4 bg-[#201e1e] rounded-md shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    <button className="block px-4 py-2 text-sm text-white hover:text-red-500 duration-1000" onClick={() => window.location.href = "/projects"}>Projects</button>
                </Menu.Item>
                <Menu.Item>
                    <button className="block px-4 py-2 text-sm text-white hover:text-red-500 duration-1000" onClick={() => window.location.href = "https://github.com/sohamsangole"}>GitHub</button>

                </Menu.Item>
                <Menu.Item>
                    <button className="block px-4 py-2 text-sm text-white hover:text-red-500 duration-1000" onClick={() => window.location.href = "https://www.linkedin.com/in/sohamsangole/"}>LinkedIn</button>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default DropDownMenu
