import React from 'react'
import { Menu } from '@headlessui/react'

const DropDownMenu = () => {
    return (
        <Menu>
            <Menu.Button className="text-white hover:text-red-500 duration-1000">[Menu]</Menu.Button>
            <Menu.Items className="absolute right-0 mt-4 bg-[#201e1e] rounded-md shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    <h1 className="block px-4 py-2 text-sm text-white hover:text-red-500 duration-1000">Projects</h1>
                </Menu.Item>
                <Menu.Item>
                    <h1 className="block px-4 py-2 text-smtext-white hover:text-red-500 duration-1000">Github</h1>
                </Menu.Item>
                <Menu.Item>
                    <h1 className="block px-4 py-2 text-smtext-white hover:text-red-500 duration-1000">LinkedIn</h1>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default DropDownMenu
