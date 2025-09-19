// File: CreditCardIcon.jsx
export default function CreditCardIcon({ className = "w-6 h-6", title, ...props }) {
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
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
            <rect x="6" y="15" width="4" height="2" rx="1" />
        </svg>
    );
}
