// File: ActivityIcon.jsx
export default function ActivityIcon({ className = "size-for-icon", title, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <path d="M3 12h3l2-4 2 8 2-6 3 6 3-4h2" />
            <circle cx="12" cy="12" r="0.5" />
        </svg>
    );
}
