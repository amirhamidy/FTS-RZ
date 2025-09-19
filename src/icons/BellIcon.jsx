// File: BellIcon.jsx
export default function BellIcon({ className = "w-6 h-6", title, ...props }) {
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
            <path d="M15 17H9l-1-2V10a5 5 0 0110 0v5l-1 2z" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
    );
}
