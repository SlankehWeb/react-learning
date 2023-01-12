import EksterneLinks from './parts/eksterne-links'
import Ressourcer from './parts/ressourcer'

const Footer = () => {
    return(
        <div class="footer">
            <div class="parent">
<EksterneLinks />
<Ressourcer />
<div class="div3"> 
<img src={ require('./img/Partner-UNDP-Full.png')} alt="" />
</div>
</div>
        </div>
    )
}

export default Footer