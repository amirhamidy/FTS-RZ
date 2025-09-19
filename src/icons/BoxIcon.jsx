// File: BoxIcon.jsx
export default function BoxIcon({ className = "size-for-icon", title, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <path d="M21 16V8a2 2 0 00-1-1.73L12 3 4 6.27A2 2 0 003 8v8a2 2 0 001 1.73L12 21l8-3.27A2 2 0 0021 16z" />
            <path d="M12 3v9" />
        </svg>
    );
}
