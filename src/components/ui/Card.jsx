'use client'

import styledCard from "@/styles/ui/card.module.css"
import {useState} from "react";
import Image from "next/image";

export const Card = (props) => {
    const [fullCard, setFullCard] = useState(false)

    return (
        <div
            className={styledCard.card}
            onMouseEnter={() => setFullCard(true)}
            onMouseLeave={() => setFullCard(false)}
        >
            <div className={styledCard.cardTop}>
                <div className={styledCard.cardVid}>
                    {/*  Game Video Goes Here  */}
                    <img src="/img/x.jpg" alt=""/>
                </div>
            </div>
            <div className={styledCard.cardBottom}>
                <div className={styledCard.cardIconContainer}>
                    {props.platforms.map((platform, index) => (
                        <div key={index}>
                            {platform}
                        </div>
                    ))}
                </div>
                <div className={styledCard.cardText}>
                    <a href={props.link}>{props.gameName}</a>
                </div>
                <div className={styledCard.btnGroup}>
                    <button>
                        <svg
                            className="SVGInline-svg game-card-button__icon-svg game-card-button__icon_12-svg game-card-button__icon_with-offset-svg"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12">
                            <g fill="#fff" fillRule="evenodd">
                                <rect width="3" height="12" x="4.5" rx=".75"></rect>
                                <rect width="3" height="12" x="4.5" rx=".75" transform="rotate(-90 6 6)"></rect>
                            </g>
                        </svg>
                        833
                    </button>
                    <button style={{opacity: fullCard ? 1 : 0}}>
                        <svg className="SVGInline-svg game-card-button__icon-svg game-card-button__icon_20-svg"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 30 30">
                            <path fill="#FFF"
                                  d="M25.5 9.846h-4.746a5.87 5.87 0 00.837-.657 3.027 3.027 0 000-4.32c-1.175-1.158-3.223-1.159-4.4 0-.649.639-2.375 3.24-2.137 4.977h-.108c.237-1.738-1.488-4.339-2.138-4.978-1.176-1.158-3.224-1.157-4.4 0a3.028 3.028 0 000 4.321c.205.203.498.429.838.657H4.5A1.487 1.487 0 003 11.314v3.672c0 .405.336.734.75.734h.75v8.812c.004.813.675 1.47 1.5 1.468h18a1.487 1.487 0 001.5-1.468V15.72h.75c.414 0 .75-.329.75-.734v-3.672a1.487 1.487 0 00-1.5-1.468zM9.472 5.904a1.61 1.61 0 011.138-.464c.427 0 .83.164 1.135.464 1.011.995 2.016 3.54 1.667 3.893 0 0-.064.048-.278.048-1.036 0-3.015-1.054-3.662-1.691a1.578 1.578 0 010-2.25zm4.778 18.628H6V15.72h8.25v8.812zm0-10.28H4.5v-2.938h9.75v2.938zm4.005-8.348c.609-.598 1.665-.597 2.273 0a1.578 1.578 0 010 2.25c-.647.637-2.626 1.692-3.662 1.692-.214 0-.278-.047-.279-.049-.348-.354.657-2.898 1.668-3.893zM24 24.532h-8.25V15.72H24v8.812zm1.5-10.28h-9.75v-2.938h9.75v2.938z"></path>
                        </svg>
                    </button>
                </div>
                <div className={styledCard.hoveredCard + ' ' + (fullCard ? styledCard.isHovered : '')}>
                    <div className={styledCard.hoveredCardItem} style={{borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
                        <div className={styledCard.hoveredCardItemTitle}>Release date:</div>
                        <div>Nov 22, 2024</div>
                    </div>
                     <div className={styledCard.hoveredCardItem} style={{borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
                        <div className={styledCard.hoveredCardItemTitle}>Genres:</div>
                        <div>

                        </div>
                    </div>
                     <div className={styledCard.hoveredCardItem}>
                        <div className={styledCard.hoveredCardItemTitle}>Chart:</div>
                        <a href="">#1 Top 2024</a>
                    </div>
                </div>
            </div>
        </div>
    )
}