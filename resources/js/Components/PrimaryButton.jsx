export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center w-full py-4 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-[1.4vh] text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-rose-900 dark:hover:text-white focus:bg-white dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
