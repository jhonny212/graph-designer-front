
import './index.css'

export const Item = ({ text, targetId, children,href }) => {
    return <>
        <div>
            <a id={`item-speed-${targetId}`} data-tooltip={text} href={href} data-tooltip-target={`tooltip-${targetId}`} data-tooltip-placement="left" className="tooltip flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                {children}
            </a>
            <div id={`tooltip-${targetId}`} role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </>
}
