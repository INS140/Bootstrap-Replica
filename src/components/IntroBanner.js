import '../css/banner.css'

export default function IntroBanner() {
    return <div className="intro-banner">
        <div className="country-select-card">
            <div className="country-select">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                    <g clipPath="url(#clip0)">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="20">
                    <path d="M22.1728 11.9978C22.1728 17.5195 17.6966 21.9957 12.1749 21.9957C6.91157 21.9957 2.59815 17.9284 2.20615 12.7654C2.18692 12.5121 2.17712 12.2561 2.17712 11.9978C2.17712 6.47618 6.6533 2 12.1749 2C17.6966 2 22.1728 6.47618 22.1728 11.9978Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask0)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.77991 1.99609H36.1114V3.53482H-3.77991V1.99609ZM-3.77991 5.07355H36.1114V6.61228H-3.77991V5.07355ZM-3.77991 8.1471H36.1114V9.68973H-3.77991V8.1471ZM-3.77991 11.2246H36.1114V12.7633H-3.77991V11.2246ZM-3.77991 14.302H36.1114V15.8407H-3.77991V14.302ZM-3.77991 17.3756H36.1114V18.9143H-3.77991V17.3756ZM-3.77991 20.453H36.1114V21.9917H-3.77991V20.453Z" fill="#BD3D44"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.77991 3.53516H36.1114V5.07388H-3.77991V3.53516ZM-3.77991 6.61261H36.1114V8.14744H-3.77991V6.61261ZM-3.77991 9.68616H36.1114V11.2249H-3.77991V9.68616ZM-3.77991 12.7636H36.1114V14.3023H-3.77991V12.7636ZM-3.77991 15.8411H36.1114V17.3798H-3.77991V15.8411ZM-3.77991 18.9146H36.1114V20.4534H-3.77991V18.9146Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.77991 1.99609H12.1758V12.7633H-3.77991V1.99609Z" fill="#192F5D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M-2.45118 2.45703L-2.30356 2.88272H-1.83608L-2.21334 3.14438L-2.06982 3.57398L-2.45118 3.30841L-2.82845 3.57007L-2.68492 3.14438L-3.06628 2.88272H-2.59061L-2.45118 2.45703ZM0.210152 2.45703L0.353675 2.88272H0.825252L0.44389 3.14438L0.587413 3.57398L0.210152 3.30841L-0.171211 3.57007L-0.0276873 3.14438L-0.404949 2.88272H0.0625274L0.210152 2.45703ZM2.86739 2.45703L3.01501 2.88272H3.47839L3.10112 3.14438L3.24465 3.57398L2.86329 3.30841L2.48602 3.57007L2.62955 3.14438L2.24819 2.88272H2.71976L2.86739 2.45703ZM5.52872 2.45703L5.67225 2.88272H6.14382L5.76246 3.14438L5.91008 3.57398L5.52872 3.30841L5.14736 3.57007L5.29498 3.14438L4.91362 2.88272H5.3811L5.52872 2.45703ZM8.18596 2.45703L8.33358 2.88272H8.80106L8.4238 3.14438L8.56732 3.57398L8.18596 3.30841L7.80869 3.57007L7.95222 3.14438L7.57496 2.88272H8.04243L8.18596 2.45703ZM10.8473 2.45703L10.9908 2.88272H11.4624L11.081 3.14438L11.2287 3.57398L10.8473 3.30841L10.4659 3.57007L10.6136 3.14438L10.2322 2.88272H10.7038L10.8473 2.45703ZM-1.11847 3.53492L-0.974942 3.96061H-0.503365L-0.884728 4.22227L-0.745305 4.64796L-1.11437 4.3863L-1.49573 4.64796L-1.36041 4.22227L-1.72947 3.96061H-1.26199L-1.11847 3.53492ZM1.53877 3.53492L1.68639 3.96061H2.15387L1.77251 4.22227L1.92013 4.64796L1.53877 4.3863L1.15741 4.64796L1.30503 4.22227L0.923668 3.96061H1.39525L1.53877 3.53492ZM4.2001 3.53492L4.34363 3.96061H4.81521L4.43384 4.22227L4.57737 4.64796L4.2001 4.3863L3.81874 4.64796L3.96227 4.22227L3.585 3.96061H4.05248L4.2001 3.53492ZM6.85734 3.53492L7.00496 3.96061H7.47244L7.09108 4.22227L7.2387 4.64796L6.85734 4.3863L6.48008 4.64796L6.6236 4.22227L6.24224 3.96061H6.71792L6.85734 3.53492ZM9.51867 3.53492L9.6622 3.96061H10.1338L9.75241 4.22227L9.89594 4.64796L9.51867 4.3863L9.13731 4.64796L9.28084 4.22227L8.90357 3.96061H9.37105L9.51867 3.53492ZM-2.45118 4.60891L-2.30356 5.04241H-1.83608L-2.21334 5.30407L-2.06982 5.72976L-2.45118 5.46419L-2.82845 5.72976L-2.68492 5.30016L-3.06628 5.0385H-2.59061L-2.45118 4.60891ZM0.210152 4.60891L0.353675 5.0385H0.825252L0.44389 5.30016L0.587413 5.72585L0.210152 5.46028L-0.171211 5.72585L-0.0276873 5.29626L-0.404949 5.03459H0.0625274L0.210152 4.60891ZM2.86739 4.60891L3.01501 5.0385H3.47839L3.10112 5.30016L3.24465 5.72585L2.86329 5.46028L2.48602 5.72585L2.62955 5.29626L2.24819 5.03459H2.71976L2.86739 4.60891ZM5.52872 4.60891L5.67225 5.0385H6.14382L5.76246 5.30016L5.91008 5.72585L5.52872 5.46028L5.14736 5.72585L5.29498 5.29626L4.91362 5.03459H5.3811L5.52872 4.60891ZM8.18596 4.60891L8.33358 5.0385H8.80106L8.4238 5.30016L8.56732 5.72585L8.18596 5.46028L7.80869 5.72585L7.95222 5.29626L7.57496 5.03459H8.04243L8.18596 4.60891ZM10.8473 4.60891L10.9908 5.0385H11.4624L11.081 5.30016L11.2287 5.72585L10.8473 5.46028L10.4659 5.72585L10.6136 5.29626L10.2322 5.03459H10.7038L10.8473 4.60891ZM-1.11847 5.6868L-0.974942 6.11248H-0.503365L-0.884728 6.37415L-0.741204 6.80374L-1.11847 6.53817L-1.49983 6.79983L-1.3563 6.37415L-1.73357 6.11248H-1.26609L-1.11847 5.6868ZM1.53877 5.6868L1.68639 6.11248H2.15387L1.77251 6.37415L1.92013 6.80374L1.53877 6.53817L1.15741 6.79983L1.30503 6.37415L0.923668 6.11248H1.39525L1.53877 5.6868ZM4.2001 5.6868L4.34363 6.11248H4.81521L4.43384 6.37415L4.57737 6.80374L4.2001 6.53817L3.81874 6.79983L3.96227 6.37415L3.585 6.11248H4.05248L4.2001 5.6868ZM6.85734 5.6868L7.00496 6.11248H7.47244L7.09518 6.37415L7.2387 6.80374L6.85734 6.53817L6.48008 6.79983L6.6236 6.37415L6.24224 6.11248H6.71792L6.85734 5.6868ZM9.51867 5.6868L9.6622 6.11248H10.1338L9.75241 6.37415L9.89594 6.80374L9.51867 6.53817L9.13731 6.79983L9.28084 6.37415L8.90357 6.11248H9.37105L9.51867 5.6868ZM-2.45118 6.76469L-2.30356 7.19037H-1.83608L-2.21334 7.45204L-2.06982 7.88163L-2.45118 7.61606L-2.82845 7.87773L-2.68492 7.45204L-3.06628 7.19037H-2.59061L-2.45118 6.76469ZM0.210152 6.76469L0.353675 7.19037H0.825252L0.44389 7.45204L0.587413 7.87773L0.210152 7.61606L-0.171211 7.87773L-0.0276873 7.45204L-0.404949 7.19037H0.0625274L0.210152 6.76469ZM2.86739 6.76469L3.01501 7.19037H3.47839L3.10112 7.45204L3.24465 7.88163L2.86329 7.61606L2.48602 7.87773L2.62955 7.45204L2.24819 7.19037H2.71976L2.86739 6.76469ZM5.52872 6.76469L5.67225 7.19037H6.14382L5.76246 7.45204L5.91008 7.88163L5.52872 7.61606L5.14736 7.87773L5.29498 7.45204L4.91362 7.19037H5.3811L5.52872 6.76469ZM8.18596 6.76469L8.33358 7.19037H8.80106L8.4238 7.45204L8.56732 7.88163L8.18596 7.61606L7.80869 7.87773L7.95222 7.45204L7.57496 7.19037H8.04243L8.18596 6.76469ZM10.8473 6.76469L10.9908 7.19037H11.4624L11.081 7.45204L11.2287 7.88163L10.8473 7.61606L10.4659 7.87773L10.6136 7.45204L10.2322 7.19037H10.7038L10.8473 6.76469ZM-1.11847 7.84258L-0.974942 8.26827H-0.503365L-0.884728 8.52993L-0.741204 8.95562L-1.11847 8.69005L-1.49983 8.95562L-1.3563 8.52602L-1.73357 8.26436H-1.26609L-1.11847 7.84258ZM1.53877 7.84258L1.68639 8.26827H2.15387L1.77251 8.52993L1.92013 8.95562L1.53877 8.69005L1.15741 8.95562L1.30503 8.52602L0.923668 8.26436H1.39525L1.53877 7.84258ZM4.2001 7.84258L4.34363 8.26827H4.81521L4.43384 8.52993L4.57737 8.95562L4.2001 8.69005L3.81874 8.95562L3.96227 8.52602L3.585 8.26436H4.05248L4.2001 7.84258ZM6.85734 7.84258L7.00496 8.26827H7.47244L7.09518 8.52993L7.2387 8.95562L6.85734 8.69005L6.48008 8.95562L6.6236 8.52602L6.24224 8.26436H6.71792L6.85734 7.84258ZM9.51867 7.84258L9.6622 8.26827H10.1338L9.75241 8.52993L9.89594 8.95562L9.51867 8.69005L9.13731 8.95562L9.28084 8.52602L8.90357 8.26436H9.37105L9.51867 7.84258ZM-2.45118 8.91656L-2.30356 9.34616H-1.83608L-2.21334 9.60782L-2.06982 10.0296L-2.45118 9.76794L-2.82845 10.0296L-2.68492 9.60391L-3.06628 9.34225H-2.59061L-2.45118 8.91656ZM0.210152 8.91656L0.353675 9.34616H0.825252L0.44389 9.60782L0.591514 10.0296L0.210152 9.76794L-0.171211 10.0296L-0.0235867 9.60391L-0.404949 9.34225H0.0625274L0.210152 8.91656ZM2.86739 8.91656L3.01501 9.34616H3.47839L3.10112 9.60782L3.24465 10.0296L2.86329 9.76794L2.48602 10.0296L2.62955 9.60391L2.24819 9.34225H2.71976L2.86739 8.91656ZM5.52872 8.91656L5.67225 9.34616H6.14382L5.76246 9.60782L5.91008 10.0296L5.52872 9.76794L5.14736 10.0296L5.29498 9.60391L4.91362 9.34225H5.3811L5.52872 8.91656ZM8.18596 8.91656L8.33358 9.34616H8.80106L8.4238 9.60782L8.56732 10.0296L8.18596 9.76794L7.80869 10.0296L7.95222 9.60391L7.57496 9.34225H8.04243L8.18596 8.91656ZM10.8473 8.91656L10.9908 9.34616H11.4624L11.081 9.60782L11.2287 10.0296L10.8473 9.76794L10.4659 10.0296L10.6136 9.60391L10.2322 9.34225H10.7038L10.8473 8.91656ZM-1.11847 9.99445L-0.974942 10.4201H-0.503365L-0.884728 10.6818L-0.741204 11.1114L-1.11847 10.8458L-1.49983 11.1075L-1.3563 10.6818L-1.73357 10.4201H-1.26609L-1.11847 9.99445ZM1.53877 9.99445L1.68639 10.4201H2.15387L1.77251 10.6818L1.92013 11.1114L1.53877 10.8458L1.15741 11.1075L1.30503 10.6818L0.923668 10.4201H1.39525L1.53877 9.99445ZM4.2001 9.99445L4.34363 10.4201H4.81521L4.43384 10.6818L4.57737 11.1114L4.2001 10.8458L3.81874 11.1075L3.96227 10.6818L3.585 10.4201H4.05248L4.2001 9.99445ZM6.85734 9.99445L7.00496 10.4201H7.47244L7.09518 10.6818L7.2387 11.1114L6.85734 10.8458L6.48008 11.1075L6.6236 10.6818L6.24224 10.4201H6.71792L6.85734 9.99445ZM9.51867 9.99445L9.6622 10.4201H10.1338L9.75241 10.6818L9.89594 11.1114L9.51867 10.8458L9.13731 11.1075L9.28084 10.6818L8.90357 10.4201H9.37105L9.51867 9.99445ZM-2.45118 11.0723L-2.30356 11.498H-1.83608L-2.21334 11.7597L-2.06982 12.1854L-2.45118 11.9237L-2.82845 12.1854L-2.68492 11.7558L-3.06628 11.4941H-2.59061L-2.45118 11.0723ZM0.210152 11.0723L0.353675 11.498H0.825252L0.44389 11.7597L0.591514 12.1854L0.210152 11.9237L-0.171211 12.1854L-0.0235867 11.7558L-0.404949 11.4941H0.0625274L0.210152 11.0723ZM2.86739 11.0723L3.01501 11.498H3.47839L3.10933 11.7597L3.25285 12.1854L2.87149 11.9237L2.49423 12.1854L2.63775 11.7558L2.25639 11.4941H2.72796L2.86739 11.0723ZM5.52872 11.0723L5.67225 11.498H6.14382L5.76246 11.7597L5.91008 12.1854L5.52872 11.9237L5.14736 12.1854L5.29498 11.7558L4.91362 11.4941H5.3811L5.52872 11.0723ZM8.18596 11.0723L8.33358 11.498H8.80106L8.4238 11.7597L8.56732 12.1854L8.18596 11.9237L7.80869 12.1854L7.95222 11.7558L7.57496 11.4941H8.04243L8.18596 11.0723ZM10.8473 11.0723L10.9908 11.498H11.4624L11.081 11.7597L11.2287 12.1854L10.8473 11.9237L10.4659 12.1854L10.6136 11.7558L10.2322 11.4941H10.7038L10.8473 11.0723Z" fill="white"/>
                    </g>
                    </g>
                    <path d="M22.1728 11.9978C22.1728 17.5195 17.6966 21.9957 12.1749 21.9957C6.91157 21.9957 2.59815 17.9284 2.20615 12.7654C2.18692 12.5121 2.17712 12.2561 2.17712 11.9978C2.17712 6.47618 6.6533 2 12.1749 2C17.6966 2 22.1728 6.47618 22.1728 11.9978Z" stroke="#BD3D44" strokeWidth="0.454447"/>
                    <path d="M12.1749 2C6.6533 2 2.17712 6.47618 2.17712 11.9978C2.17712 12.2561 2.18692 12.5121 2.20615 12.7654" stroke="#192F5D" strokeWidth="0.454447"/>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="19.9957" height="19.9957" fill="white" transform="translate(2.01056 2)"/>
                    </clipPath>
                    </defs>
                </svg>
                <select>
                    <option>US</option>
                    <option>CA</option>
                </select>
            </div>
        </div>
        <div className="intro-text">
            <h1>Order groceries for delivery or pickup today</h1>
            <p>Whatever you want from local stores, brought right to your door.</p>
        </div>
    </div>
}