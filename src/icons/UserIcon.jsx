// File: UserIcon.jsx
export default function UserIcon({ className = "size-for-icon", title, ...props }) {
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
            <circle cx="12" cy="8" r="3.2" />
            <path d="M4.5 20a6.5 6.5 0 0115 0" />
        </svg>
    );
}
