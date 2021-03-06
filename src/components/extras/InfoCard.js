import React, {useState} from 'react'
import { Card, Carousel, Drawer, Button, Typography, Image, Tabs } from 'antd';

const { Meta } = Card;
const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

function callback(key) {
    console.log(key);
}

function InfoCard({inputData}) {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            {inputData.length !== 0 &&
                <Card
                hoverable
                style={{ width: "280px", backgroundColor:"#333", color:"#eee" }}
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
                <p style={{color:"#eee", fontSize:"large"}}>
                {inputData.properties.COUNTRY_NAME} 
                </p>
                <p style={{color:"#eee"}}>
                {inputData.properties.COUNTRY_INFO}
                </p>
                <Button type="dashed" style={{color:"#eee", backgroundColor:"#222"}} onClick={showDrawer}>
                    Show more info...
                </Button>{" "}
                <Button type="text" style={{color:"#888", backgroundColor:"#222"}}
                className="infoContainerClose">
                close...
                </Button>  
                <Drawer
                placement="left"
                closable={false}
                bodyStyle={{
                    backgroundColor:"#333",
                    color:"#eee"
                }}
                onClose={onClose}
                width={400}
                visible={visible}
                >
                    <Tabs defaultActiveKey="1" onChange={callback} style={{color:"#fff"}}>
                        <TabPane tab="About" key="1">
                            <Typography>
                                <Title level={4} style={{color:"#fff"}}>Country : {inputData.properties.COUNTRY_NAME}</Title>
                        
                                <Paragraph style={{color:"#eee"}}>
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
                                <Title level={4} style={{color:"#eee"}}>Facts about {inputData.properties.COUNTRY_NAME}</Title>
                                {inputData.properties.fact.map((object, i) => 
                                    <Paragraph style={{color:"#fff"}}>
                                    {object}
                                    </Paragraph>
                                )}
                            </Typography>
                        
                        </TabPane>
                        <TabPane tab="Images" key="2" className="imagesTabContainer">
                            <Typography>
                                <Title level={4} style={{color:"#eee"}}>Images of {inputData.properties.COUNTRY_NAME}</Title>
                            
                                <Paragraph className="imagesContainer">
                                <Image.PreviewGroup>
                                {inputData.properties.images.map((object, i) => 
                                    
                                    <Image
                                      width="100%"
                                      src={object}
                                    />
                                )}
                                </Image.PreviewGroup>
                                </Paragraph>
                            </Typography>
                        </TabPane>
                    </Tabs>
                </Drawer>
            </Card>
            }
            </div>
    )
}

export default InfoCard
