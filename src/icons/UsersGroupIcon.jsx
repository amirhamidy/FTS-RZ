// File: UsersGroupIcon.jsx
export default function UsersGroupIcon({ className = "size-for-icon", title, ...props }) {
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
            <path d="M17 21v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2" />
            <circle cx="9.5" cy="8" r="3" />
            <path d="M20 8a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    );
}
