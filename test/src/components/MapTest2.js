import '../static/css/MapTest.css';
import Mapsvg from '../../node_modules/@svg-maps/south-korea/south-korea.svg'

// 단순히 위의 경로에서 지도 svg 를 가져와서 import 하는 방법입니다.
// 각 객체별로 css 적용을 위해 MapSelect에는 path를 copy 해와서 작성하였습니다. 

function MapTest2(){

    return (
        <div>
            <img src={Mapsvg}/>
        </div>
    )
}
export default MapTest2;