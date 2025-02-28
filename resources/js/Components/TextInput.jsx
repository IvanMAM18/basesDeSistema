import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-white dark:border-gray-300 dark:bg-white opacity-30 focus:opacity-100 dark:text-gray-950 focus:text-black dark:focus:text-black dark:focus:border-rose-900 focus:ring-rose-900 dark:focus:ring-rose-900 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
