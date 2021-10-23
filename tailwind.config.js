module.exports = {
    purge: {
        enabled: true,
        content: ['./index.html', './public/css/style.css'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            poppins: '"Poppins", sans-serif',
        },
        screens: {
            '2xl-max': { max: '1535px' },
            '2xl-min': { min: '1535px' },
            'xl-max': { max: '1279px' },
            'xl-min': { min: '1279px' },
            'lg-max': { max: '1023px' },
            'lg-min': { min: '1023px' },
            'md-max': { max: '767px' },
            'md-min': { min: '767px' },
            'sm-max': { max: '639px' },
            'sm-min': { min: '639px' },
        },
        extend: {
            colors: {
                c1: '#212121',
                c2: '#6d9886',
                c3: '#d9cab3',
                c4: '#f6f6f6',
            },
            height: {
                c80: '80vh',
            },
            transitionDelay: {
                c25: '25ms',
            },
            borderRadius: {
                'c-29': '.29rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
