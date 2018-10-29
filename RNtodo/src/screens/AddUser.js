import React, { Component } from 'react';
import { Icon, Picker, FooterTab, Form, Label, Spinner, Text, Content, Container, Item, Footer, Button, Input } from 'native-base';
import { connect } from 'react-redux';

import { createUser } from '../actions/user';

// import '../components/Redux';

class AddUser extends Component {

	constructor(){
		super();
		this.state = {
			datePickerVisible: false,
			name: '',
			gender: '',
		}
	}

	addButton = () => {
		this.props.dispatch(createUser({
			name: this.state.name,
			gender: this.state.gender,
			createdAt: this.state.time,
		})).then(() => {
			this.props.navigation.goBack()
		})
    }
    
    onValueChange2(value) {
        this.setState({
          gender: value
        });
      }

	render(){
		if(this.props.data.fetching){
			return(
				<Spinner />
			)
		}

		if(this.state.name === ''){
			submitButton = (
				<Button block disabled>
					<Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
				</Button>
			)
		}else{
			submitButton = (
				<Button block style={{ backgroundColor: '#2ecc71' }} onPress={this.addButton}>
					<Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
				</Button>
			)
		}

		return(
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Name</Label>
							<Input onChangeText={(text) => this.setState({ name: text })} />
						</Item>
						<Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder="Select Gender"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.gender}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
					</Form>
				</Content>
				<Footer>
					<FooterTab>
						{submitButton}
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.userReducer
})

export default connect(mapStateToProps)(AddUser)