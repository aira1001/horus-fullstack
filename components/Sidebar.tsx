
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

type Props = {
  className?: string
}
export default function SidebarComponent(props: Props) {
  return (
    <Sidebar aria-label="Default sidebar example" className={`${props.className}`}>
      <Sidebar.Items>
        <Sidebar.ItemGroup className="space-y-2">
          <Sidebar.Item href="#" className="text-center cursor-text">
            Kategori Voucher
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark"  className="hover:bg-gray-400">
            Makanan
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3"  className="hover:bg-gray-400">
            Travel
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}  className="hover:bg-gray-400">
            Gojek
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}  className="hover:bg-gray-400">
            Gocar
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}  className="hover:bg-gray-400">
            Liburan
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}  className="hover:bg-gray-400">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}  className="hover:bg-gray-400">
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
