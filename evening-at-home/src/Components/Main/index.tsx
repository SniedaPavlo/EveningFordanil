import React from 'react'
import s from './Main.module.scss'
import moon from '../../img/Main/moon.svg'
import top__transition from '../../img/Main/top__transition.svg'
import button__transition from '../../img/Main/button__transition.svg'
import man from '../../img/Main/man__svg.svg'
import man__transition from '../../img/All/transition.svg'
// import btn__border from '../../img/Main/btn__border.svg'

const Main: React.FC = () => {
    return (
        <div className={s.wrapper}>

            <div className={s.main__wrapper}>
                <div className={s.description__wrapper}>
                    <img className={s.top__transition} src={button__transition} alt="" />
                    <svg className={s.description__svg} width="369" height="154" viewBox="0 0 369 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.7005 95.0148H76.9356L35.3064 33.2849L51.3249 9.56919L57.811 0H0V95.024H57.7005V95.0148ZM32.0899 9.56919L19.2327 28.6108V9.56919H32.0899ZM19.2327 85.5285V57.0006H19.2903L25.6843 47.5305L51.2973 85.5217L19.2327 85.5285Z" fill="#FDFDFD" />
                        <path d="M57.7005 95.0148H76.9356L35.3064 33.2849L51.3249 9.56919L57.811 0H0V95.024H57.7005V95.0148ZM32.0899 9.56919L19.2327 28.6108V9.56919H32.0899ZM19.2327 85.5285V57.0006H19.2903L25.6843 47.5305L51.2973 85.5217L19.2327 85.5285Z" fill="url(#paint0_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M159.411 85.4641H118.427V47.512L153.901 47.4453L147.599 38.0303H118.427V9.55306H156.894V0H99.1938V9.55306V85.4733V95.0471H166.609L159.411 85.4641Z" fill="#FDFDFD" />
                        <path d="M159.411 85.4641H118.427V47.512L153.901 47.4453L147.599 38.0303H118.427V9.55306H156.894V0H99.1938V9.55306V85.4733V95.0471H166.609L159.411 85.4641Z" fill="url(#paint1_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M227.33 0.00685802V28.521L208.097 0H188.867L227.332 57.0443V95.0171H246.567V0.00685802H227.33Z" fill="#FDFDFD" />
                        <path d="M227.33 0.00685802V28.521L208.097 0H188.867L227.332 57.0443V95.0171H246.567V0.00685802H227.33Z" fill="url(#paint2_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M288.058 0H268.825V95.0079H288.058V0Z" fill="#FDFDFD" />
                        <path d="M288.058 0H268.825V95.0079H288.058V0Z" fill="url(#paint3_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M368.309 0H349.081V0.016077H310.316V95.024H329.551V57.4749L368.309 0ZM342.634 9.54384L329.547 28.9539V9.54384H342.634Z" fill="#FDFDFD" />
                        <path d="M368.309 0H349.081V0.016077H310.316V95.024H329.551V57.4749L368.309 0ZM342.634 9.54384L329.547 28.9539V9.54384H342.634Z" fill="url(#paint4_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M14.6269 128.047L21.2658 118.087L23.9509 114.076H0V153.949H31.8732L14.6269 128.047ZM13.2942 118.092L7.96832 126.082V118.092H13.2942ZM7.96832 149.966V137.999H7.99128L10.6403 134.026L21.2527 149.966H7.96832Z" fill="#FDFDFD" />
                        <path d="M14.6269 128.047L21.2658 118.087L23.9509 114.076H0V153.949H31.8732L14.6269 128.047ZM13.2942 118.092L7.96832 126.082V118.092H13.2942ZM7.96832 149.966V137.999H7.99128L10.6403 134.026L21.2527 149.966H7.96832Z" fill="url(#paint5_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M99.97 123.934V124.057L109.95 114.076H106.514H99.97H96.5332L89.937 124.012L83.3063 114.076H80.0074H73.3258H70.0269L79.9433 123.993L84.959 131.508L70.0269 154H80.0074L89.9632 139.005L99.97 154H109.95L94.9395 131.508L99.97 123.934Z" fill="#FDFDFD" />
                        <path d="M99.97 123.934V124.057L109.95 114.076H106.514H99.97H96.5332L89.937 124.012L83.3063 114.076H80.0074H73.3258H70.0269L79.9433 123.993L84.959 131.508L70.0269 154H80.0074L89.9632 139.005L99.97 154H109.95L94.9395 131.508L99.97 123.934Z" fill="url(#paint6_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M157.283 154H167.263L140.619 114.076H130.637L138.114 125.278L125.641 145.109L116.75 154H130.029L133.168 149.009H153.951L157.283 154ZM136.307 144.018C138.621 140.338 140.936 136.658 143.251 132.977L150.621 144.018H136.307Z" fill="#FDFDFD" />
                        <path d="M157.283 154H167.263L140.619 114.076H130.637L138.114 125.278L125.641 145.109L116.75 154H130.029L133.168 149.009H153.951L157.283 154ZM136.307 144.018C138.621 140.338 140.936 136.658 143.251 132.977L150.621 144.018H136.307Z" fill="url(#paint7_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M213.985 119.067L210.794 114.076H174.063L177.259 119.067H188.212V153.997H199.023V119.067H213.985Z" fill="#FDFDFD" />
                        <path d="M213.985 119.067L210.794 114.076H174.063L177.259 119.067H188.212V153.997H199.023V119.067H213.985Z" fill="url(#paint8_linear_14_7384)" fill-opacity="0.3" />
                        <path d="M253.974 114.076L242.428 131.467L230.767 114.076H220.785L237.448 138.925H237.476L227.468 154H237.448L263.955 114.076H253.974Z" fill="#FDFDFD" />
                        <path d="M253.974 114.076L242.428 131.467L230.767 114.076H220.785L237.448 138.925H237.476L227.468 154H237.448L263.955 114.076H253.974Z" fill="url(#paint9_linear_14_7384)" fill-opacity="0.3" />
                        <defs>
                            <linearGradient id="paint0_linear_14_7384" x1="1.58314e-07" y1="4.05032" x2="100.718" y2="95.0475" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_14_7384" x1="99.1938" y1="4.0513" x2="197.749" y2="82.0562" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_14_7384" x1="188.867" y1="4.05003" x2="282.888" y2="67.7636" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_14_7384" x1="268.825" y1="4.04964" x2="312.335" y2="13.8784" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_14_7384" x1="310.316" y1="4.05032" x2="404.517" y2="68.2044" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_14_7384" x1="6.55871e-08" y1="115.776" x2="42.204" y2="153.423" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_14_7384" x1="70.0269" y1="115.778" x2="112.306" y2="162.958" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_14_7384" x1="116.75" y1="115.778" x2="156.873" y2="172.428" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_14_7384" x1="174.063" y1="115.778" x2="216.339" y2="162.956" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_14_7384" x1="220.785" y1="115.778" x2="262.579" y2="166.209" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className={s.title}>
                        Бренд не про в'язницю, бренд про нашу неньку Україну
                    </div>

                    <div className={s.btn__wrapper}>

                        <button className={s.button}>
                            <img className={s.btn__moon__svg} src={moon} alt="moon" />
                        </button>
                    </div>

                </div>
                <div className={s.man__wrapper}>
                    <img className={s.man__transition} src={man__transition} alt="man___transition" />
                    <img className={s.man} src={man} alt="man" />
                    <img className={s.button__transition} src={top__transition} alt="" />
                </div>
            </div>



            {/* проблема hover у кнопке була */}
            {/* <svg className={s.transition} viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={s.transition} width='100%' fill="url(#paint0_linear_14_6057)" />
                <defs>
                    <linearGradient id="paint0_linear_14_6057" x1="720" y1="0" x2="720" y2="500" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
            </svg> */}
        </div>

    )
}

export default Main