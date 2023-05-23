import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.profileBlock}>
            <img
                src="https://images.thevoicemag.ru/upload/img_cache/c32/c3271e898e8042cd78a0e53f54770e4d_cropped_616x822.webp"
                alt="user"/>
            <div className={s.descriptionBlock}>
                {/*<div className={s.questionBlock}>*/}
                {/*    <div>ФИО</div>*/}
                {/*    <div>Дата рождения</div>*/}
                {/*    <div>Место рождения</div>*/}
                {/*    <div>Семейное положение</div>*/}
                {/*    <div>Место работы</div>*/}
                {/*</div>*/}
                {/*<div className={s.answerBlock}>*/}
                {/*    <div>Марк Цукерберг</div>*/}
                {/*    <div>14 Мая 1984</div>*/}
                {/*    <div>Уайт-Плейнс, США</div>*/}
                {/*    <div>Женат</div>*/}
                {/*    <div>Facebook</div>*/}
                {/*</div>*/}
                <div className={s.block}>
                    <div className={s.question}>ФИО</div>
                    <div className={s.answer}>Марк Цукерберг</div>
                </div>
                <div className={s.block}>
                    <div className={s.question}>Дата рождения</div>
                    <div className={s.answer}>14 Мая 1984</div>
                </div>
                <div className={s.block}>
                    <div className={s.question}>Место рождения</div>
                    <div className={s.answer}>Уайт-Плейнс, США</div>
                </div>
                <div className={s.block}>
                    <div className={s.question}>Семейное положение</div>
                    <div className={s.answer}>Женат</div>
                </div>
                <div className={s.block}>
                    <div className={s.question}>Место работы</div>
                    <div className={s.answer}>Facebook</div>
                </div>
            </div>
        </div>
    );
};