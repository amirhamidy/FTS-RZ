// File: ProjectIcon.jsx
export default function ProjectIcon({ className = "w-6 h-6", title, ...props }) {
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
            <path d="M3 7h18M6 21V7M18 21V7" />
            <rect x="8" y="10" width="8" height="7" rx="1" />
        </svg>
    );
}
