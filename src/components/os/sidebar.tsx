import { FileIcon, PaintbrushIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-[#1F2128] bg-bg-2 p-4 font-mono">
      <span className="text-text-description">WORKSPACE</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex flex-row gap-4 cursor-pointer text-center">
          <FileIcon className="w-5 bg-gray-700 rounded" color="gray"/>
          <span>Overview</span>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer text-center">
          <PaintbrushIcon className="w-5 bg-gray-700 rounded" color="gray"/>
          <span>Overview</span>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer text-center">
          <FileIcon className="w-5 bg-gray-700 rounded" color="gray"/>
          <span>Overview</span>
        </div>
      </div>
    </aside>
  );
}
