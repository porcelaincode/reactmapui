import React, {useState} from 'react'
import { Card, Carousel, Modal, Button, Typography, Image } from 'antd';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

function InfoCard({inputData}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            {inputData.length !== 0 &&
                <Card
                hoverable
                style={{ width: "280px" }}
                >
                  
                <Carousel autoplay>
                    
                    {inputData.properties.images.map((object, i) => 
                        <div>
                        <Image
                            preview={false}
                            src={object}
                            style={{width:"100%"}}
                        />
                    </div>
                    )}
                </Carousel>
                <br/>
                <p>
                <Meta title={inputData.properties.COUNTRY_NAME} description={inputData.properties.COUNTRY_INFO} />
                </p>
                <Button type="dashed" onClick={showModal}>
                    Show more info...
                </Button>{" "}
                <Button type="dashed"
                className="infoContainerClose">
                close...
                </Button>  
                <Modal 
                title="Country Details" 
                centered
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={false}
                >
                    <Typography>
                        <Title level={4}>Country : {inputData.properties.COUNTRY_NAME}</Title>
                        
                        <Paragraph>
                            <ul>
                                <li>
                                Country Currency - <strong>{inputData.properties.COUNTRY_CURRENCY}</strong>
                                </li>
                                <li>
                                Speed Unit - <strong>{inputData.properties.UNITS_SPEED}</strong>
                                </li>
                                <li>
                                Distance Unit - <strong>{inputData.properties.UNITS_DISTANCE}</strong>
                                </li>
                                <li>
                                Volume Unit - <strong>{inputData.properties.UNITS_VOLUME}</strong>
                                </li>
                                <li>
                                Timezone - <strong>{inputData.properties.TIMEZONE}</strong>
                                </li>
                            </ul>
                        </Paragraph>
                        <Title level={4}>Facts about {inputData.properties.COUNTRY_NAME}</Title>
                        {inputData.properties.fact.map((object, i) => 
                            <Paragraph>
                            {object}
                            </Paragraph>
                        )}
                    </Typography>
                </Modal>
            </Card>
            }
            </div>
    )
}

export default InfoCard
