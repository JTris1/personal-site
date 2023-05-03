function PortfolioDivider({ width, height, color, darkColor }) {
    return (
        <svg width={width} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`fill-neutral-100 dark:fill-neutral-800 `} fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,240C672,267,768,245,864,213.3C960,181,1056,139,1152,106.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
    )
}

export default PortfolioDivider