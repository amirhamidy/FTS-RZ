// File: ShieldIcon.jsx
export default function ShieldIcon({ className = "size-for-icon", title, ...props }) {
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
            <path d="M12 2l7 3v5c0 5-3.6 9.9-7 11-3.4-1.1-7-6-7-11V5l7-3z" />
            <path d="M9.5 11.5l1.5 1.5 3-3" />
        </svg>
    );
}
