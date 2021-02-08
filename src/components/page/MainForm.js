import React from 'react'
import { connect } from "react-redux";
import { selectCountry } from "../../actions";

import { Form , Button, Select } from "antd";

const countryOptions = [
    { label: 'India', value: 'IND' },
    { label: 'United States of America', value: 'USA' },
    { label: 'United Kingdom', value: 'GBR' },
  ];

const MainForm = (props) => {
    const [form] = Form.useForm();

    const handleChange = () => {
        form.setFieldsValue({ sights: [] });
    };
    
    return (
        <div className="formContainer">
            <Form
                form={form}
                style={{padding: "0.5em"}}
                layout="inline"
                autoComplete="off"
                onFinish={(event) => {
                    let selectedCountry = event.countries;
                    props.dispatch(selectCountry(selectedCountry));
                }}
            >
                <Form.Item name="countries">
                    <Select style={{width:"200px"}} placeholder="Browse Countries" options={countryOptions} onChange={handleChange} />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{borderRadius: "5px"}}>
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default connect()(MainForm)
