interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

export default function Label(props: LabelProps) {
    const { className, ...rest } = props;
    return (
        <label
            {...rest}
            className={`text-gray-700 dark:text-gray-300 ${className || ''}`}
        />
    );
}