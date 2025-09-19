// File: SearchIcon.jsx
export default function SearchIcon({ className = "w-6 h-6", title, ...props }) {
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
            <circle cx="11" cy="11" r="6" />
            <path d="M21 21l-4.35-4.35" />
        </svg>
    );
}
