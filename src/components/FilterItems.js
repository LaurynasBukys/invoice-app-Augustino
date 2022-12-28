import { t } from "i18next";

let FilterItems = (props) => {
    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value);
    }
    return (
        <div className="Filter-area" style={{textAlign:"left"}} onChange={onFilterValueChanged}>
            <select name="statusas" className="btn-outline-primary bg-white text-secondary  col-3  btn-lg mb-2 ">
                <option value="All">{t('all')}</option>
                <option value="Aktyvus">{t('active')}</option>
                <option value="Neaktyvus">{t('blocked')}</option>
            </select>
        </div>
    );
}
export default FilterItems;