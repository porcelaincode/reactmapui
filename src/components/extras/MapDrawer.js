import React, {useState} from 'react'
import { Drawer, Button, Switch, Typography, Divider } from 'antd';

import ProfileCard from './ProfileCard';

const { Title, Paragraph } = Typography;


function MapDrawer(props) {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    function onChange(checked) {
        console.log(`switched to ${checked}`)
    }
      
    return (
        <div>
            <div className="menuBtnDiv">
                <Button className="menuBtn" onClick={showDrawer}>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </p>
                </Button>
            </div>
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Title level={3}>Map UI <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                    </svg>
                </Title>
                <Paragraph style={{fontSize: 12}}>
                    A simple React Map App using OpenStreetMap from Leaflet. Browse countries from the select panel on bottom left.
                </Paragraph>
                <Divider/>
                <p>
                    <Title level={4}>Mode</Title>
                    <Switch onChange={onChange}/> Toggle Light/Dark
                </p>
                <Divider />
                <p>
                    <Title level={4}>Your Profile </Title>
                    <ProfileCard/>
                </p>
                <Divider />
                <Button block onClick={onClose}>Logout</Button>
            </Drawer>
        </div>
    )
}

export default MapDrawer
