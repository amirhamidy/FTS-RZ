// File: ArticleIcon.jsx
export default function ArticleIcon({ className = "size-for-icon", title, ...props }) {
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
            <path d="M8 6h8M8 10h8M8 14h5" />
            <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
    );
}
