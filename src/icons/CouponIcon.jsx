// File: CouponIcon.jsx
export default function CouponIcon({ className = "size-for-icon", title, ...props }) {
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
            <path d="M2 12a2 2 0 012-2h2a2 2 0 002-2V5a2 2 0 012-2h6a2 2 0 012 2v3a2 2 0 002 2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 00-2 2v3a2 2 0 01-2 2H8a2 2 0 01-2-2v-3a2 2 0 00-2-2H4a2 2 0 01-2-2v-2z" />
            <circle cx="12" cy="12" r="1.2" />
        </svg>
    );
}
