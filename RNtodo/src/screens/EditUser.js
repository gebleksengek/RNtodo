import React, { Component } from 'react';
import { Picker, FooterTab, Form, Label, Spinner, Text, Content, Container, Item, Footer, Button, Input } from 'native-base';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { updateUser } from '../actions/user'

// import '../components/Redux';

class EditUser extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			gender: '',
		}
    }

    componentDidMount(){
        this.setState({
            id: this.props.data.editUser.id,
            name: this.props.data.editUser.name,
            gender: this.props.data.editUser.gender
        })
    }

	updateButton = () => {
		this.props.dispatch(updateUser( this.state.id, {
			name: this.state.name,
			gender: this.state.gender,
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
				<Button block style={{ backgroundColor: '#2ecc71' }} onPress={this.updateButton}>
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
							<Input value={this.state.name} onChangeText={(text) => this.setState({ name: text })} />
						</Item>
						<Item stackedLabel picker>
							<Label>Gender</Label>
							<Picker
                                mode="dropdown"
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
						</Item>
					</Form>
					<DateTimePicker
					 isVisible={this.state.datePickerVisible}
					 onConfirm={this.dateConfirm}
					 onCancel={() => this.setState({ datePickerVisible: false })}
					 mode='datetime'
					 datePickerModeAndroid='spinner'
					/>
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

export default connect(mapStateToProps)(EditUser)