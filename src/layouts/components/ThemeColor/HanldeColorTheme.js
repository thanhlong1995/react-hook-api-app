import { useState, useContext, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './HandleColorTheme.module.scss';
import { ThemeContext } from '../../../App';
import Search from '~/layouts/components/Header/Search';

const cx = classNames.bind(styles);
function HandleColorTheme() {
    const {setThemeColor } = useContext(ThemeContext);
    const [checked, setChecked] = useState(false);
    const [hiddenIcon, setHiddenIcon] = useState(false);
    const [valueInput, setValueInput] = useState('')
    const inputSearchRef = useRef()

    const handleChangeColor = () => {
        setChecked(!checked);
        setThemeColor(checked);
    };

    const handleOnClick = () => {
        setHiddenIcon(true)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = () => {
        setHiddenIcon(false)
        setValueInput('')
    };


    return (
        <div className={cx('wrapper')}>
                    <Search 
                hiddenIcon={hiddenIcon} 
                valueInput={valueInput}
                setHiddenIcon={setHiddenIcon} 
                handleOnClick={handleOnClick} 
                setValueInput={setValueInput}
            />
        <label htmlFor="toggle" className={cx('toggle-module-toggle', hiddenIcon ? "hidden-checkbox-change-color" : "")}>
            <input id="toggle" type="checkbox" onChange={handleChangeColor} />
            <span className={cx('toggle-module-slider', 'toggle-module-round')} />
        </label>
        </div>
    );
}

export default HandleColorTheme;
