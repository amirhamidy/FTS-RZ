// File: MediaIcon.jsx
export default function MediaIcon({ className = "w-6 h-6", title, ...props }) {
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
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M8 10l2.5 3 2-2.5L16 16" />
        </svg>
    );
}
