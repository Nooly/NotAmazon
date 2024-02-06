import  {React, Col, PropTypes, Row } from '../../imports.js'

export const CheckOutSteps = (step1, step2, step3, step4) => {
    return (
            <Row className='checkout-steps'>
                <Col className={step1 && "active"}>SignIn</Col>
                <Col className={step2 && "active"}>Shipping</Col>
                <Col className={step3 && "active"}>Payment</Col>
                <Col className={step4 && "active"}>Placeorder</Col>
            </Row>
    )
}

CheckOutSteps.propTypes = { step1: PropTypes.bool, step2: PropTypes.bool, step3: PropTypes.bool, step4: PropTypes.bool };

// export default CheckOutSteps; // this means i need to use without {} when importing