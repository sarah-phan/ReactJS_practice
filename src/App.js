import './App.css';
// import Baitap1 from './baitap1';
// ko cần phải khai báo index vì sẽ được tự động đọc, chỉ có khai báo những tên khác index
// import Baitap2 from './baitap2';
import RenderingElement from './rendering-elements';
import Handlingevents from './handling-events';
import State from './state';
import ChangeColorCar from './changeColorCar';
import ListKey from './list-key';
import Example from './list-key/example';
import Communication from './communication';
import LiftingStateUpCart from './shopping-cart';

function App() {
  return (
    <div>
      {/* gọi component Baitap1 */}
      {/* được gọi theo dạng thẻ */}
      {/* flow: đi vào thẻ App, thấy thẻ Baitap1 -> đọc Baitap1 */}
      {/* <Baitap1 /> */}
      {/* <Baitap2/> */}
      {/* <RenderingElement/>
      <hr/>
      <Handlingevents/>
      <hr/>
      <State/>
      <hr/>
      <ChangeColorCar/>
      <hr/> */}
      {/* <ListKey/>
      <Example/> */}
      {/* <Communication/> */}
      <LiftingStateUpCart/>
    </div>
  );
}

export default App;
