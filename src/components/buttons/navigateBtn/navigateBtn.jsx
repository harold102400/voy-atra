import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavigateBtn = ({ variant, route, text }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(route);
  };

  return (
    <Button variant={variant} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default NavigateBtn;
