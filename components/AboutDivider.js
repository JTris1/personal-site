function AboutDivider({ width, height, color, darkColor }) {
    return (
        <svg width={width} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`fill-neutral-100 dark:fill-neutral-800`} fillOpacity="1" d="M0,0L48,37.3C96,75,192,149,288,181.3C384,213,480,203,576,213.3C672,224,768,256,864,261.3C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    )
}

export default AboutDivider