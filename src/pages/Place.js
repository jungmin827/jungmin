import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import StepIndicator from './StepIndicator';

function Place(props){
  let navigate = useNavigate();

  function handleClick(id){
    navigate(`/placedetail/${id}`);
  }

  return(
    <>
    
      <p></p>
      <Stack direction="horizontal" gap={3}>
        <div className="ms-auto" style={{ width: 'auto' }}>
          <Form.Control style={{ width: '200px' }} placeholder="검색어를 입력하세요" />
        </div>
        <Button variant="secondary">Search</Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
      <p></p>
{/*       <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="장소"
      />
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="컨셉"
      />
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="관광지"
      />
    </Form> */}

      <div className="d-flex justify-content-around">
        {/* Card 컴포넌트들을 map을 사용하여 생성하거나, 아래와 같이 각각에 대해 명시적으로 handleClick에 ID를 전달 */}
        {props.places.map((place, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={place.image} />
            <Card.Body>
              <Card.Title>{place.title}</Card.Title>
              <Card.Text>
                {place.shortct}
              </Card.Text>
              <Button variant="dark" onClick={() => handleClick(place.id)}>상세정보</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Place;
