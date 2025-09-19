// File: ChartIcon.jsx
export default function ChartIcon({ className = "size-for-icon", title, ...props }) {
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
            <path d="M5 19h4V10H5v9zM10 19h4V5h-4v14zM15 19h4v-6h-4v6z" />
        </svg>
    );
}
