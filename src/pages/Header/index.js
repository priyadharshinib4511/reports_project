import {
  CalendarOutlined,
  DownCircleOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './styles.css'

function Header() {
  const navigate = useNavigate()

  const hadleOptions = () => {
    navigate('/');
  }
  const handelLogOut = () => {
    navigate('/');
  }
  return (
    <div className="header">

      <div className='header-text'>
        <div className='header-cs'>CS</div>
        <div className='vertical-line'></div>
        <div className='header-uat'>UAT</div>
      </div>
      <div className='header-end'>
        <div className='header-image1'>
          <button className='logout-button' onClick={handelLogOut}>Log Out</button>
        </div>
        <div className='header-image1'>
          <DownCircleOutlined style={{ fontSize: 25 }} onClick={hadleOptions} />
        </div>
        <div className='header-image' >
          <CalendarOutlined style={{ fontSize: 25 }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
