
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    const{titleText,descText} = props;
    return <div className='card'>
                <h4 className='headingCard'>{titleText}</h4>
                <p className='cardDesc'>{descText}</p>
                <p className='cardFooter'>{ dateName + "/" + monthName + "/" + currentYear}</p>
            </div>
}
export default Card;