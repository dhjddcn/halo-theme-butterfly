/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Circle
 * @Description: 转圈加载
 */
import { AbsLoading } from '../../types';

export default class Circle extends AbsLoading {
  constructor() {
    super(`
     #Butterfly{
        display: none;
     }
      
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:100vh;
    }
     .loading-body {
          position: relative;
          border: 4px solid rgba(0, 0, 0, .3);
          border-left-color: transparent;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          animation: spin89345 1s linear infinite;
     }
      
     html[data-color-scheme="dark"] .loading-body {
          border: 4px solid rgba(118 ,104 ,104 , 0.3);
          border-left-color: rgb(225,225,225);
     }
      
     @keyframes spin89345 {
          0% {
            transform: rotate(0deg);
          }
        
          100% {
            transform: rotate(360deg);
          }
      }
  `);
    this.start();
  }
}
