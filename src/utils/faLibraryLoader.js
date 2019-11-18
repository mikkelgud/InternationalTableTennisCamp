import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faRoute, faDoorClosed, faDoorOpen, faPlaneArrival, faUserShield, faUsers, faHome , faUsersCog, faFileDownload} from '@fortawesome/free-solid-svg-icons';
import { faComments, faHandshake, faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



export default function loadFontAwesome() {
    library.add(faBars, faComments,faStar, faTimes,faHandshake, faRoute, faDoorClosed, faDoorOpen, faPlaneArrival, faUserShield, faUsers, faHome, faUsersCog, faFacebook, faInstagram, faFileDownload);
}
