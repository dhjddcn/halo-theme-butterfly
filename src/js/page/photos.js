/**
 * @date: 2024/6/21
 * @author: 小红
 * @fileName: photos
 * @Description: 图库
 */

import {getQueryParams} from '../core/_util';
import AmplifyImg from '../modules/AmplifyImg';
import App from '../core/App';

@App([AmplifyImg])
class Photos {
  run_active_group() {
    const params = getQueryParams();

    const items = document.querySelectorAll('.groups-item');

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if(window.location.search === '') {
        items[0].classList.add('active');
        break;
      }

      if(item.dataset.group === params.group) {
        item.classList.add('active');
        break;
      }
    }

  }
}