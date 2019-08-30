import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faRoute, faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faComment  } from '@fortawesome/free-regular-svg-icons';



export default function loadFontAwesome() {
    library.add(faBars, faComment, faTimes, faRoute, faDoorClosed, faDoorOpen);
}