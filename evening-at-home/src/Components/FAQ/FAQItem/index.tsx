import React from 'react'
import s from './FAQItem.module.scss'
import arrow from '../../../img/FAQ/ArrowCircleDown.svg'
import { FAQItemTypeProps } from '../../../types/types'

const FAQItem: React.FC<FAQItemTypeProps> = ({ obj }) => {
    const { id, question, answer } = obj

    const [active, setActive] = React.useState<boolean>(false)

    const turn = active === false ? `answer` : 'active'

    return (
        <div className={s.wrapper}>

            <div className={s.question__wrapper}>
                <div className={s.question}>
                    {question}

                </div>
                <div className={s.btn__wrapper}>
                    <img onClick={() => setActive(!active)} src={arrow}  className={`${s.button} ${active && s.button_active}`}/>
                </div>
            </div>

          {active && <p className={s.answer}>{answer}</p>}

        </div>
    )
}

export default FAQItem