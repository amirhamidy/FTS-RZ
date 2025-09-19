// File: HomeIcon.jsx
export default function HomeIcon({ className = "size-for-icon", title, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
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
            <path d="M3 9.75L12 3l9 6.75V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.75z" />
        </svg>
    );
}
