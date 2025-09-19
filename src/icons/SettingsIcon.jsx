// File: SettingsIcon.jsx
export default function SettingsIcon({ className = "w-6 h-6", title, ...props }) {
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
            <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.07a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06A2 2 0 012.3 16.88l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.07a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82L4 4.3A2 2 0 016.83 1.5l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001 1.51V6a2 2 0 004 0v-.07a1.65 1.65 0 001-1.51h.09a1.65 1.65 0 001.82-.33l.06-.06A2 2 0 0119.7 7.12l-.06.06a1.65 1.65 0 00-.33 1.82V10a1.65 1.65 0 001 1.51z" />
        </svg>
    );
}
