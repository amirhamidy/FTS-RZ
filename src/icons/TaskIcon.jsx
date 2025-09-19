// File: TaskIcon.jsx
export default function TaskIcon({ className = "size-for-icon", title, ...props }) {
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
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M8 12l2 2 4-4" />
        </svg>
    );
}
