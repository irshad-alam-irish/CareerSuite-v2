export default function AnimatedWave() {
    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
            <svg
                className="animate-wave w-full h-[100vh]"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    fill="url(#gradient)"
                    fillOpacity="1"
                    d="
            M0,192L40,181.3C80,171,160,149,240,128C320,107,400,85,480,106.7C560,128,640,192,720,202.7C800,213,880,171,960,144C1040,117,1120,107,1200,122.7C1280,139,1360,181,1400,202.7L1440,224V0H1400C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0H0Z"
                ></path>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
