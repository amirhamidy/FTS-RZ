// File: InvoiceIcon.jsx
export default function InvoiceIcon({ className = "w-6 h-6", title, ...props }) {
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
            <path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2" />
            <path d="M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8" />
            <path d="M8 12h8M8 16h5" />
        </svg>
    );
}
