import { useTheme } from "./theme-provider";


const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    return (
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    checked={theme === "dark"}
                    className="sr-only peer"
                    // value={theme} 
                    type="checkbox"
                    onChange={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                    }}
                />
                <div
                    className={`w-24 h-12 relative overflow-hidden duration-500 scale-50 bg-gray-200 rounded-full shadow-lg outline-none ring-0 peer before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-${Sun} before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full peer-checked:bg-[#1E293B] after:content-'🌑' after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0 dark:bg-accent dark:after:bg-gray-700 dark:before:bg-white dark:peer-checked:before:bg-gray-700 dark:peer-checked:after:bg-black`}
                >
                    <div className="absolute inset-0 grid w-full h-full place-content-center">
                        {
                            theme === "dark" ? Moon : Sun
                        }
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;



const Moon = (
    <svg
        className="mr-10 "
        width="49" height="51" viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_188_824)">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.1588 10.8864C14.7309 14.3541 14.039 18.9319 15.7156 23.1996L15.828 23.4859C18.5164 30.3291 26.2764 33.7835 33.1604 31.2014C33.7032 30.9978 34.2242 30.7628 34.7224 30.4992C33.2571 32.592 31.1595 34.2803 28.5686 35.2522C21.6846 37.8343 13.9246 34.3799 11.2363 27.5367L11.1238 27.2504C8.64738 20.9467 11.3382 13.9662 17.1588 10.8864Z" fill="#E532F6" />
            <path d="M24.4996 17.5137L25.3752 20.1469L28.2087 20.1469L25.9164 21.7743L26.792 24.4075L24.4996 22.7801L22.2072 24.4075L23.0829 21.7743L20.7905 20.1469L23.624 20.1469L24.4996 17.5137Z" fill="#E532F6" />
        </g>
        <defs>
            <filter id="filter0_d_188_824" x="0.203125" y="0.886429" width="48.5195" height="49.222" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.760784 0 0 0 0 0.690196 0 0 0 0 0.988235 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_188_824" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_188_824" result="shape" />
            </filter>
        </defs>
    </svg>

);

const Sun = (
    <svg
        className="relative z-10 ml-11 "
        width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7.59375" y="7.57617" width="19.0125" height="18.5777" rx="9.28885" fill="#38AEFF" />
        <line x1="17.5996" y1="0.851562" x2="17.5996" y2="6.04413" stroke="#B9B9B9" strokeLinecap="round" />
        <line x1="17.5996" y1="27.6855" x2="17.5996" y2="32.8781" stroke="#B9B9B9" strokeLinecap="round" />
        <line x1="0.700195" y1="17.3965" x2="6.0377" y2="17.3965" stroke="#B9B9B9" strokeLinecap="round" />
        <line x1="28.1621" y1="16.3652" x2="33.4996" y2="16.3652" stroke="#B9B9B9" strokeLinecap="round" />
        <line x1="0.5" y1="-0.5" x2="5.76545" y2="-0.5" transform="matrix(0.715238 -0.698881 0.715238 0.698881 25.5498 9.89062)" stroke="#B9B9B9" strokeLinecap="round" />
        <line x1="0.5" y1="-0.5" x2="5.76545" y2="-0.5" transform="matrix(0.715238 0.698881 -0.715238 0.698881 3.36914 5.51172)" stroke="#B9B9B9" strokeLinecap="round" />
        <line x1="0.5" y1="-0.5" x2="5.76545" y2="-0.5" transform="matrix(0.715238 -0.698881 0.715238 0.698881 4.4248 28.4688)" stroke="#B9B9B9" strokeLinecap="round" />
        <line x1="0.5" y1="-0.5" x2="5.76545" y2="-0.5" transform="matrix(0.715238 0.698881 -0.715238 0.698881 26.6064 24.0898)" stroke="#B9B9B9" strokeLinecap="round" />
    </svg>

);