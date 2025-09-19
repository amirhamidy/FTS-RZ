// File: TagIcon.jsx
export default function TagIcon({ className = "w-6 h-6", title, ...props }) {
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
            <path d="M20.59 13.41L11 3 3 11v8h8l8.59-8.59a2 2 0 000-2.82z" />
            <circle cx="7.5" cy="7.5" r="1" />
        </svg>
    );
}
