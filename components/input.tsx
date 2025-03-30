import React from 'react';

type InputType = 'checkbox' | 'radio' | 'text' | 'password' | 'email' | 'number' | string;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: InputType;
}

export default function Input(props: InputProps) {
    const styles: Record<string, string> = {
        checkbox: 'rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm',
        radio: 'rounded-full border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm',
        default: 'w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950'
    };

    const styleKey = props.type && styles[props.type] ? props.type : 'default';
    const className = styles[styleKey];

    return <input {...props} className={className} />;
}